import axios from 'axios';
import { toLower } from 'lodash';
import qs from 'qs';

let baseURL;
let authToken;

if (process.browser) {
  // baseURL = API;
  baseURL = process.env.BASE_API_PATH;
  authToken = localStorage.getItem('authToken');
}

const showRequestLogs = process.env.NODE_ENV !== 'production';
const showResponseLogs = process.env.NODE_ENV !== 'production';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
if (authToken) {
  headers.Authorization = `Bearer ${authToken}`;
}

export const api = axios.create({ baseURL, headers, timeout: 1800000 });

const formDataHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

let apiCounter = 0;

export function generateResourceMethod(resouceApi, method) {
  /*eslint-disable */
  return function (path, data, config = {}) {
    const apiId = apiCounter++;
    let apiCall,
      globalErrorHandling = false;
    if (config.formData) {
      config.headers = formDataHeaders;
      data = qs.stringify(data);
      delete config.formData;
    }

    if (toLower(method) === 'get' || toLower(method) === 'delete') {
      if (data && Object.keys(data).length) {
        config.params = data;
      }
      apiCall = resouceApi[method](appendUid(path), config);
    } else {
      apiCall = resouceApi[method](appendUid(path), data, config);
    }
    const payload = data;

    return apiCall.then(
      (responseWrapper) => {
        // extracting response from responseWrapper ( papi layer )
        let { data } = responseWrapper;
        const { success, error } = data;
        logRequest(responseWrapper, method, payload);

        if (!success) {
          logResponseOrError(success, error);
        }
        return data;
      },
      (error) => {
        console.log('fail');

        console.log(error);
        //globalApiErrorHandler()
        throw { data: 'API failed' };

        // throw error to keep the promise chain
        // throw { data: response, status };
      },
    );
  };
}

export const apiResource = {
  resourceAPI: api,
  get: generateResourceMethod(api, 'get'),
  post: generateResourceMethod(api, 'post'),
  put: generateResourceMethod(api, 'put'),
  delete: generateResourceMethod(api, 'delete'),
};

function appendUid(url) {
  if (url.indexOf('?') > -1) {
    url += '&t=' + Date.now().toString();
  } else {
    url += '?t=' + Date.now().toString();
  }

  return url;
}

function logResponseOrError(status, response) {
  if (showResponseLogs === 'TRUE') {
    console.info(
      '\n\n********************************************************** Response *****************************************************************\n',
    );
    console.info('\n* Response Status: ', status);
    console.info('\n* === API Response ===\n');
    console.info(response);
    console.info(
      '\n*****************************************************************************************************************************************\n',
    );
  }
}

function logRequest(response, method, payload) {
  if (showRequestLogs === 'TRUE') {
    console.info(
      '\n\n********************************************************** Calling API *****************************************************************\n',
    );
    console.info('* API URL: ', response.config.url);
    console.info('\n* Request Type: ', response.config.method.toUpperCase());
    if ('post' === toLower(method)) {
      console.info('\n* POST Body: ', payload);
    }
  }
}

const globalApiErrorHandler = ({ response: errorBody, status }) => {
  console.log(
    `--- Global Api Error Handler --- \nError Status : ${status} \nError Body : `,
    errorBody,
  );

  switch (status) {
    case 0:
      console.log(
        'Api Call Error : Not connected. Please verify your network connection.',
        { errorBody, status },
      );
      break;

    case 401:
      console.log('Api Call Error : Unauthorized access', {
        errorBody,
        status,
      });
      const errorMessage = errorBody.message || errorBody.data.message;
      break;

    case 404:
      console.log('Api Call Error : Method not found', { errorBody, status });
      break;

    case 405:
      console.log('Api call error : Method not allowed', { errorBody, status });
      break;

    case 500:
      console.log('Api Call Error : Internal Server Error.', {
        errorBody,
        status,
      });
      break;
  }
};
