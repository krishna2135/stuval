import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { func, shape } from 'prop-types';
import {
    loginbg,
    loginPage,
    loginBox,
    fields,
    button,
    mainHeader,
    textField,
    linkText,
    checkBoxTxt,
    errorText,
} from './styles';
import './styles.css'
import { verifyLogin, resetErrorForLogin } from '../actions';

const sha512 = require('crypto-js/sha512');

const LoginForm = (props) => {
    const [disableLogin, updateDisableState] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState('');

    const [errorPassword, setErrorPassword] = useState('');

    const[ loginType,setLogintype]=useState('');

    const { loginData, dispatch } = props;
 
    // console.log(loginType,"krishna")
    useEffect(() => {
        if (loginData.authToken) {
            updateDisableState(false);
            localStorage.setItem('authToken', loginData.token);
            localStorage.setItem('emailAfterLogin', email);
            localStorage.setItem('lang', loginData.language);
            localStorage.setItem('isFirstLogin', loginData.isFirstTime);
            userId
            if (loginData.userId == 0) {
                setTimeout(() => {
                    window.location.assign('/admin-dashbord');
                }, 0);
            }
            if (loginData.userId == 1) {
                setTimeout(() => {
                    window.location.assign('/home');
                }, 0);
            }
            if (loginData.isFirstTime) {
                setTimeout(() => {
                    window.location.assign('/generate-password');
                }, 0);
            }
            if (loginData.isFirstTime == false) {
                setTimeout(() => {
                    window.location.assign('/home');
                }, 0);
            }
        }
        if (loginData.errorMessage) {
            updateDisableState(false);
        }
    }, [loginData]);

    const loginUser = () => {
        dispatch(resetErrorForLogin());
        let errorFound = false;
        /* eslint-disable */
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //var pwdformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        /* eslint-enable */
        if (email) {
            // const { checkValidity } = validateEmail();
            if (!email.match(mailformat)) {
                errorFound = true;
                setErrorEmail('Email is not valid');
            }
        }

        if (!email) {
            errorFound = true;
            setErrorEmail('Please Enter a Valid Email Address');
        }
        if (!password) {
            errorFound = true;
            setErrorPassword('Please Enter The Password');
        }
        if (!errorFound) {
            updateDisableState(true);
            const emailId = email;
            const saltedPasswordFromUser = password + emailId;
            const hashedPasswordFromUser = sha512(saltedPasswordFromUser).toString();
            dispatch(
                verifyLogin({
                    emailId: email,
                    password: hashedPasswordFromUser,
                    userId: loginType
                }),
            );
        }
    };

    const addEmail = (e) => {
        setErrorEmail('');
        setErrorPassword('');
        setEmail(e.target.value);
        dispatch(resetErrorForLogin());
    };

    const addPassword = (e) => {
        setErrorEmail('');
        setErrorPassword('');
        setPassword(e.target.value);
        dispatch(resetErrorForLogin());
    };

    let inlineStyle = {};
    if (disableLogin) {
        inlineStyle = {
            opacity: '0.5',
        };
    }
    console.log(props);
    return (
        <div className="container-fluid">
            {/* 
            <div className={loginbg}> */}
            <div className="loginLogo">
                <img src={logo} alt="img logo" />
            </div >
            <div className={loginPage}>
                <div className={loginBox}>
                    <p className={mainHeader}>Sign in</p>
                    <div className={fields}>

                        <input

                            className={textField}
                            name="email"
                            id="email"
                            onChange={(e) => addEmail(e)}
                            type="email"
                            placeholder="Email"
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    loginUser();
                                }
                            }}
                        />
                        <div className={errorText}>{errorEmail}</div>
                        <input
                            className={textField}
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => addPassword(e)}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    loginUser();
                                }
                            }}
                        />
                        <div className={errorText}>{errorPassword}</div>
                        <div>
                        <select class="form-control" onChange={(e) => setLogintype(e.target.value)}>
        <option>Select Login Type</option>
        <option value="0">Admin</option>
        <option value="1">Student</option>
        

      </select>
      </div>
                        <div className={errorText}>{loginData.errorMessage}</div>
                        <button
                            className={button}
                            disabled={!!disableLogin}
                            type="button"
                            style={inlineStyle}
                            onClick={() => loginUser()}>
                            LOG IN
          </button>
                        <div className={linkText}>
                            <span style={{ color: "black" }}>Don't have an account? </span>  <a href="/register" ><span style={{ color: "red" }}>Sign up</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

LoginForm.propTypes = {
    dispatch: func.isRequired,
    loginData: shape({}).isRequired,
};

export default LoginForm;
