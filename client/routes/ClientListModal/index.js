import React, { useEffect, useState } from 'react';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { clientModalListReducer } from './reducer';
import clientModalListSaga from './saga';
import ClientListForm from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';
import { getClientModalList } from './actions';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { loaderContainer } from './components/styles';
import './components/styles.css';

const ClientList = (props) => {
  const { clientListData, dispatch } = props;
  const lang = localStorage.getItem('lang');
  const [currentPage, updateCurrentPage] = useState(1);
  const [limit, updateLimit] = useState(20);

  useInjectReducer({
    key: 'clientModalListReducer',
    reducer: clientModalListReducer,
  });
  useInjectSaga({ key: 'clientModalListSaga', saga: clientModalListSaga });

  useEffect(() => {
    dispatch(
      getClientModalList({
        limit,
        currentPage,
      }),
    );
  }, []);

  return (
    <div>
      {clientListData != undefined &&
      clientListData.clientList.length > 0 &&
      clientListData.loading === false ? (
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content" style={{ borderRadius: '0px' }}>
            <div class="modal-body">
              <ClientListForm {...props} lang={lang} />
            </div>
          </div>
        </div>
      ) : (
        <div className={loaderContainer}>
        <Loader
          type="Bars"
          color="#3566cc"
          height={100}
          width={100}
          radius={30}
        />
      </div>
      )}
    </div>
  );
};

ClientList.propTypes = {
  dispatch: func.isRequired,
  clientListData: shape({}).isRequired,
};

function mapStateToProps(props) {
  return {
    clientListData: props.clientModalListReducer,
  };
}

export default connect(mapStateToProps)(ClientList);
