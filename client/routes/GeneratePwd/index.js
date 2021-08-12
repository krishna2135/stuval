import React from 'react';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { newPswdReducer } from './reducer';
import newPswdSaga from './saga';
import GeneratePswdForm from './components/index';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';

const GenerateNewPswd = (props) => {
    const { loginData, dispatch } = props;
    useInjectReducer({ key: 'newPswdReducer', reducer: newPswdReducer });
    useInjectSaga({ key: 'newPswdSaga', saga: newPswdSaga });

    return loginData ? (
        <GeneratePswdForm loginData={loginData} dispatch={dispatch} />
    ) : (
            <div> Loading</div>
        );
};

GenerateNewPswd.propTypes = {
    loginData: shape({}).isRequired,
    dispatch: func.isRequired,
};

function mapStateToProps(props) {
    return {
        loginData: props.newPswdReducer,
    };
}
export default connect(mapStateToProps)(GenerateNewPswd);
