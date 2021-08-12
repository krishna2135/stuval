import React, { useEffect } from 'react';
import { shape, func } from 'prop-types';
import { connect } from 'react-redux';
import { graphListReducer } from './reducer';
import { studentListReducer } from './reducer';
import graphListSaga from './saga';
import TemplateComponent from './components';
import { useInjectReducer } from '../../reducers/injectReducer';
import { useInjectSaga } from '../../saga/injectSaga';
import { getGraphList, getStudentSkillList } from './actions';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
//import { loaderContainer } from '../ScanListing/components/style';

const GraphteList = (props) => {
    const { graphListData, dispatch } = props;
    const lang = localStorage.getItem('lang');
    console.log(graphListData, "kkkkkkllllllll")

    useInjectReducer({
        key: 'graphListReducer',
        reducer: graphListReducer,
    });
    useInjectSaga({ key: 'graphListSaga', saga: graphListSaga });

    useEffect(() => {
        dispatch(getGraphList({}));
        dispatch(getStudentSkillList({}));
    }, []);

    return (
        <div>
            {graphListData && graphListData.graphTypeList.length ? (
                <TemplateComponent {...props} lang={lang} dispatch={dispatch} />
            ) : (

                    <div className="loaderContainer">
                        {/* <Loader
              type="Bars"
              color="#3566cc"
              height={100}
              width={100}
              radius={30}
            /> */}
                    </div>

                )}
        </div>
    );
};

GraphteList.propTypes = {
    dispatch: func.isRequired,
    graphListData: shape({}).isRequired,
};

function mapStateToProps(props) {
    return {
        graphListData: props.graphListReducer,
    };
}






export default connect(mapStateToProps)(GraphteList);
// export default connect(mapStateToProps)(StudentSkillsList);


