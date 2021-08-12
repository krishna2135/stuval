import React, { useState, useEffect, Fragment } from 'react';
import SHA512 from 'crypto-js/sha512';
import {
    loginPage,
    loginBox,
    fields,
    button,
    textField,
    mainHeader,
    secondHeader,
    errorText,
} from '../../Login/components/styles';
import { reqNewPassword } from '../actions';
import './styles.css'

const GeneratePwdForm = (props) => {
    var isFirstLogin = localStorage.getItem("isFirstLogin")
    const { loginData, dispatch } = props;

    const [cPassword, setCPassword] = useState('');
    const [nPassword, setNPassword] = useState('');
    const [cnPassword, setCnPassword] = useState('');
    const [errorCPassword, setErrorCPassword] = useState('');
    const [errorNPassword, setErrorNPassword] = useState('');
    const [errorCnPassword, setErrorCnPassword] = useState('');

    useEffect(() => {
        if (loginData.authToken) {
            localStorage.setItem('authToken', loginData.authToken);
            localStorage.setItem('isFirstLogin', false);

            setTimeout(() => {
                window.location.assign('/home');
            }, 0);
        }

        if (loginData.errorMessage) {

        }
    }, [loginData]);

    const loginUser = () => {
        let errorFound = false;
        var pwdformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        /* eslint-disable */
        /* eslint-enable */

        if (isFirstLogin == false) {
            if (cPassword) {
                if (!cPassword.match(pwdformat)) {
                    errorFound = true;
                    setErrorCPassword('Current password is not valid');
                }
            }

            if (!cPassword) {
                errorFound = true;
                setErrorCPassword('Please enter the current password');
            }
        }

        if (nPassword) {
            if (!nPassword.match(pwdformat)) {
                errorFound = true;
                setErrorNPassword('Password must contain at least 8 characters, including UPPER/lowercase and numbers.');
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

        if (!nPassword) {
            errorFound = true;
            setErrorNPassword('Please enter the new password');
        }
        if (!cnPassword) {
            errorFound = true;
            setErrorCnPassword('Please enter the confirm new password');
        }

        if (!errorFound) {

            var securePass = SHA512(nPassword).toString();
            dispatch(
                reqNewPassword({
                    newPassword: securePass
                })
            );
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
                    {isFirstLogin == false && <Fragment>
                        <input
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
                        />
                        <div className={errorText}>{errorCPassword}</div>
                    </Fragment>}
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
                    <button className={button} type="button" onClick={() => loginUser()}>
                        Confirm
                    </button>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default GeneratePwdForm;
