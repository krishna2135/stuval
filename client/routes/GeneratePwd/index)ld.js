import React, { useState } from 'react';
import {
  loginPage,
  loginBox,
  fields,
  button,
  textField,
  mainHeader,
  secondHeader,
  errorText,
} from '../Login/components/styles';

const GeneratePwdForm = (props) => {
  var isFirstLogin = localStorage.getItem("isFirstLogin")

  const [cPassword, setCPassword] = useState('');
  const [nPassword, setNPassword] = useState('');
  const [cnPassword, setCnPassword] = useState('');
  const [errorCPassword, setErrorCPassword] = useState('');
  const [errorNPassword, setErrorNPassword] = useState('');
  const [errorCnPassword, setErrorCnPassword] = useState('');

  const loginUser = () => {
    let errorFound = false;
    var pwdformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    /* eslint-disable */
    /* eslint-enable */

    if (cPassword) {
      if (!cPassword.match(pwdformat)) {
        errorFound = true;
        setErrorCPassword('Current password is not valid');
      }
    }
    if (nPassword) {
      if (!nPassword.match(pwdformat)) {
        errorFound = true;
        setErrorNPassword('New password is not valid');
      }
    }
    if (cnPassword) {
      if (cnPassword != nPassword) {
        errorFound = true;
        setErrorCnPassword(
          'Confirm new password should be same as new password',
        );
      }
    }
    if (!cPassword) {
      errorFound = true;
      setErrorCPassword('Please enter the current password');
    }
    if (!nPassword) {
      errorFound = true;
      setErrorNPassword('Please enter the new password');
    }
    if (!cnPassword) {
      errorFound = true;
      setErrorCnPassword('Please enter the confirm new password');
    }
    if (!errorFound) {
    }
  };

  const addCPassword = (e) => {
    setErrorCPassword('');
    setCPassword(e.target.value);
  };

  const addNPassword = (e) => {
    setErrorNPassword('');
    setNPassword(e.target.value);
  };

  const addCnPassword = (e) => {
    setErrorCnPassword('');
    setCnPassword(e.target.value);
  };

  return (
    <div className={loginPage}>
      <div className={loginBox}>
        <p className={mainHeader}>Generate Password</p>
        <p className={secondHeader}>Choose New Password For Your Account</p>
        <div className={fields}>
          {isFirstLogin == false && <input
            className={textField}
            name="cPassword"
            type="password"
            placeholder="Current Password"
            onChange={(e) => addCPassword(e)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                loginUser();
              }
            }}
          />}
          <div className={errorText}>{errorCPassword}</div>
          <input
            className={textField}
            name="nPassword"
            type="password"
            placeholder="New Password"
            onChange={(e) => addNPassword(e)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                loginUser();
              }
            }}
          />
          <div className={errorText}>{errorNPassword}</div>
          <input
            className={textField}
            name="cnPassword"
            type="password"
            placeholder="Confirm New Password"
            onChange={(e) => addCnPassword(e)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                loginUser();
              }
            }}
          />
          <div className={errorText}>{errorCnPassword}</div>
          <button className={button} type="button">
            Confirm
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePwdForm;
