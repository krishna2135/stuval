import React from 'react';
import logo from '@assets/logo.png';
import { bool } from 'prop-types';
import bell from '../../Assets/notification.png';
//import '@assets/styles/styles.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './StudentDashboard.css';

const logout = () => {
    console.log(sessionStorage, 'aaaaaaaaaaaaaa')
    localStorage.removeItem("authToken");

    sessionStorage.removeItem('authToken');
    sessionStorage.clear();
    // // console.log(this.props);
    // this.props.props.history.push('/')
    window.location.assign('/');
};
const Header = (props) => {
    const { commonHeader, lang, emailId } = props;

    return (
        <div className="">
            {/** ************** Start Navigation Code ***************** */}
            {!commonHeader ? (
                <div> </div>
            ) : (
                    <div className="container-fluid" >

                        <div className="row header" >
                            <div className="col-md-4 img-fluid ">
                                <img className="header-img" src={logo} alt="logo" />

                            </div>
                            <div className="col-md-4 middlePart">
                                <a href="challanges"><span>Challenges</span></a>|
                <a href="community"><span>Community</span></a>|
                <a href="yourProject"><span>Your Projects</span></a>|
                                <a
                                    className="logout"
                                    href="#"
                                    onClick={() => logout()}>
                                    <span>Logout</span>
                                </a>
                            </div>


                            <div className="col-md-4">
                                {/* <div >
                    <img src={bell} style={{ marginTop: "10px" }}></img>
                </div> */}
                                <div>


                                    <div className="col-md-4">
                                        <div >
                                            <img src={bell} style={{ marginTop: "15px", height: "40px", width: "40px", marginLeft: "50%" }}></img>
                                            {/* <a
                                                className="logout"
                                                href="#"
                                                onClick={() => logout()}>
                                                Logout
                            </a> */}
                                        </div>

                                        <div>

                                        </div>
                                        <div>
                                            <img>

                                            </img>
                                        </div>


                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                )}
            {/** ************** End Navigation Code ***************** */}
        </div>
    );
};

Header.propTypes = {
    commonHeader: bool.isRequired,
};

export default Header;
