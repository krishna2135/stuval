import React, { useEffect } from 'react';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { homeReducer } from './reducer';
import homeSaga from './saga';
import StudentDashboard from './components/index';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';
import { getAdminDetails } from './actions';
import logo from '@assets/logo.png';

const Challanges = (props) => {
    const { homeData, dispatch } = props;
    // const { adminDoetails } = hmeData;
    useInjectReducer({ key: 'homeReducer', reducer: homeReducer });
    useInjectSaga({ key: 'homeSaga', saga: homeSaga });

    // useEffect(() => {
    //     sessionStorage.setItem('headerBgColor', '#0066cc');
    //     sessionStorage.setItem('headerLogo', logo);
    //     sessionStorage.setItem('headerTxtColor', '#fff');
    //     dispatch(getAdminDetails({

    //     }));
    // }, []);

    return (
        <>
            <StudentDashboard {...props} />
        </>
    );
};

Challanges.propTypes = {
    // homeData: shape({}).isRequired,
    dispatch: func.isRequired,
};

function mapStateToProps(props) {
    return {
        homeData: props.homeReducer,
    };
}
export default connect(mapStateToProps)(Challanges);
