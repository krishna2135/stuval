import React from 'react';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { loginReducer } from './reducer';
import loginSaga from './saga';
import LoginForm from './components/LoginForm';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const Login = (props) => {
  const { loginData, dispatch } = props;
  useInjectReducer({ key: 'loginReducer', reducer: loginReducer });
  useInjectSaga({ key: 'loginSaga', saga: loginSaga });

  return loginData ? (
    <LoginForm loginData={loginData} dispatch={dispatch} />
  ) : (
    <div> Loading</div>
  );
};
Login.propTypes = {
  loginData: shape({}).isRequired,
  dispatch: func.isRequired,
};

function mapStateToProps(props) {
  return {
    loginData: props.loginReducer,
  };
}
export default connect(mapStateToProps)(Login);
