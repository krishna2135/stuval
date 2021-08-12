import React, { useState, useEffect } from 'react';
import './Register.css';
import Header from './Header.js'
import { verifySignup } from '../actions';
import { NavLink } from "react-router-dom";
const sha512 = require('crypto-js/sha512');

export default function Register(props) {
     console.log(props.graphListData.skillTypeList,"hhhhhhhhhh")
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorDob, setErrorDob] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorStudy, setErrorStudy] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setphone] = useState('');
    const [password, setPassword] = useState('');
    const [study, setStudy] = useState('');
    const [about, setAbout] = useState('');
    const [studentType, setStudentType] = useState('');
    const [hackerSkills, sethackerSkills] = useState({
        _id: '',
        skillTitle: ''
    });
    const [hipsterSkills, sethipsterSkills] = useState({
        _id: '',
        skillTitle: ''
    });
    const [hustlerSkills, sethustlerSkills] = useState({
        _id: '',
        skillTitle: ''
    });
    const [visionarySkills, setvisionarySkills] = useState({
        _id: '',
        skillTitle: ''
    });





    // console.log(name, "name")


    const { dispatch } = props;
    const getstudent = (title, id, type) => {

        if (type == "Hacker") {
            sethackerSkills({
                _id: id,
                skillTitle: title
            }
            )

        }
        if (type == "Hipster") {
            sethipsterSkills({
                _id: id,
                skillTitle: title
            }
            )

        }

        if (type == "Hustler") {
            sethustlerSkills({
                _id: id,
                skillTitle: title
            }
            )

        }
        if (type == "Visionary") {
            setvisionarySkills({
                _id: id,
                skillTitle: title
            }
            )

        }
        console.log(visionarySkills, "name")
        // sethackerSkills({
        //     _id: id,
        //     skillTitle: title
        // }

        // )
    }
    const getstudentSkills = (student) => {
        setStudentType(student);
        // console.log(studentType, "radio")

    }
    const signupUser = () => {

        let errorFound = false;
        if (!name) {
            errorFound = true;
            setErrorName('Please Enter your Name');
        }

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email) {

            if (!email.match(mailformat)) {
                errorFound = true;
                setErrorEmail('Email is not valid');
            }
        }
        if (!email) {
            errorFound = true;
            setErrorEmail('Please Enter a Valid Email Address');
        }

        // if (!dob) {
        //     errorFound = true;
        //     setErrorDob('Date of Birth is required');
        // }

        if (!phone) {
            errorFound = true;
            setErrorPhone('Phone Number is required');
        }
        if (!password) {
            errorFound = true;
            setErrorPassword('Phone Number is required');
        }
        if (password.length < 6) {
            errorFound = true;
            setErrorPassword('Password needs to be 6 characters or more');
        }
        if (!study) {
            errorFound = true;
            setErrorStudy('Study is required');
        }

        console.log("clicked!")
        if (!errorFound) {
            const emailId = email;
            const saltedPasswordFromUser = password + emailId;
            const hashedPasswordFromUser = sha512(saltedPasswordFromUser).toString();
            dispatch(
                verifySignup({

                    phoneNumber: phone,
                    name: name,
                    emailId: email,
                    password: hashedPasswordFromUser,
                    study: study,
                    about: about,
                    studentType: studentType,
                    skillSet: [{
                        studentType: "Hacker",
                        skillSetList: [{
                            hackerSkills
                        }

                        ]
                    },
                    {
                        studentType: "Hipster",
                        skillSetList: [{
                            hipsterSkills
                        }]
                    },
                    {
                        studentType: "Hustler",
                        skillSetList: [{
                            hustlerSkills
                        }


                        ]
                    },
                    {
                        studentType: "Visionary",
                        skillSetList: [{
                            visionarySkills
                        }


                        ]
                    },

                    ]


                }),
            );
        }
    }



    const addName = (e) => {
        setErrorName('');
        setErrorEmail('');
        setErrorDob('');
        setErrorPhone('');
        setErrorPassword('');
        setErrorStudy('');
        setName(e.target.value);
        // dispatch(resetErrorForLogin());
    };

    const addEmail = (e) => {
        setErrorName('');
        setErrorEmail('');
        setErrorDob('');
        setErrorPhone('');
        setErrorPassword('');
        setErrorStudy('');
        setEmail(e.target.value);
        // dispatch(resetErrorForLogin());
    };

    const addDob = (e) => {
        setErrorName('');
        setErrorEmail('');
        setErrorDob('');
        setErrorPhone('');
        setErrorPassword('');
        setErrorStudy('');
        setDob(e.target.value);
        // dispatch(resetErrorForLogin());
    };

    const addPhone = (e) => {
        setErrorName('');
        setErrorEmail('');
        setErrorDob('');
        setErrorPhone('');
        setErrorPassword('');
        setErrorStudy('');
        setphone(e.target.value);
        // dispatch(resetErrorForLogin());
    };

    const addPassword = (e) => {
        setErrorName('');
        setErrorEmail('');
        setErrorDob('');
        setErrorPhone('');
        setErrorPassword('');
        setErrorStudy('');
        setPassword(e.target.value);
        // dispatch(resetErrorForLogin());
    };
    const addStudy = (e) => {
        setErrorName('');
        setErrorEmail('');
        setErrorDob('');
        setErrorPhone('');
        setErrorPassword('');
        setErrorStudy('');
        setStudy(e.target.value);
        // dispatch(resetErrorForLogin());
    };
    const addAbout = (e) => {
        setErrorName('');
        setErrorEmail('');
        setErrorDob('');
        setErrorPhone('');
        setErrorPassword('');
        setErrorStudy('');
        setAbout(e.target.value);
        // dispatch(resetErrorForLogin());
    };

    console.log(props.graphListData.message, "propdata")
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="box signup-container">
                            <h3 className="signup"> Sign Up</h3>
                            <form>
                                <div className="errorText">{errorName}</div>
                                <div >

                                    <input type="text" name="username"
                                        id="username"
                                        required
                                        onChange={(e) => addName(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                signupUser();
                                            }
                                        }} />
                                    <label>Name*</label>

                                </div>

                                <div className="errorText">{errorEmail}</div>

                                <div className="form-group">
                                    <input type="email" name="email"
                                        id="email"

                                        onChange={(e) => addEmail(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                signupUser();
                                            }
                                        }}
                                        required />
                                    <label>Email*</label>

                                </div>
                                <div className="errorText">{errorDob}</div>
                                <div className="form-group">
                                    {/* <input type="date" id="date" name="date" /> */}
                                    <input type="date" name="date"
                                        id="date"
                                        onChange={(e) => addDob(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                signupUser();
                                            }
                                        }}
                                        required />
                                    <label>Date of Birth*</label>

                                </div>
                                <div className="errorText">{errorPhone}</div>
                                <div className="form-group">
                                    <input type="text" name="phone"
                                        id="phone"
                                        onChange={(e) => addPhone(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                signupUser();
                                            }
                                        }}
                                        required />
                                    <label>Phone*</label>

                                </div>
                                <div className="errorText">{errorPassword}</div>
                                <div className="form-group">
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        onChange={(e) => addPassword(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                signupUser();
                                            }
                                        }}
                                        required />
                                    <label>Password*</label>

                                </div>
                                <div className="errorText">{errorStudy}</div>
                                <div className="form-group">
                                    <input type="text"
                                        name="study"
                                        id="study"
                                        onChange={(e) => addStudy(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                signupUser();
                                            }
                                        }}
                                        required />
                                    <label>Study*</label>

                                </div>

                                <div className="form-group">
                                    <input type="text" name="about"
                                        onChange={(e) => addAbout(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                signupUser();
                                            }
                                        }}
                                        required />

                                    <label>About You</label>

                                </div>
                            </form>
                        </div>

                    </div>
                    {/* <div className="col-md-1 orimage">
                        <img src={orline} alt="orline" />
                    </div> */}
                    {/* <div className="col-md-4">
                        <div class="left">
                            <div class="bts">
                                <h6>Already have an account? Sign in </h6>

                                <a href="#" className="gplogin"><i className="fa fa-google-plus"></i><span>Sign in with Google</span></a>
                                <a href="#" className="fblogin"><i className="fa fa-facebook"></i><span>Sign in with Facebook</span></a>
                                <a href="#" className="twlogin"><i className="fa fa-twitter"></i><span>Sign in with Linkdin</span></a>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div >
            <div className="container">
                <div className="row">
                    <div className="col-md-12" >
                        <h5 className="mb-3">Types of Student</h5>
                        {props.graphListData.graphTypeList.map((data, index) => (



                            <div className="button-container" >
                                <button className={`btn ${index == 0 ? "btn hacker" : index == 1 ? "btn hipster" : index == 2 ? "btn hustler" : "btn visionary"}`}
                                    onClick={() => getstudentSkills(data._id)}><input style={{ height: "14px", width: "20px", margin: "4px" }} type="radio" name="student" id="studentType" value="studentType" />{data.typeTitle}</button>
                                <label className="ml-2">{data.typeDescription}</label>
                            </div>



                        ))}


                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="mb-3 mt-2">Skills</h5>
                    </div>
                    {props.graphListData.skillTypeList.map((student, index) => (
                        <div className="col-md-3">

                            <div class="card  mb-3">

                                <div className={`"" ${index == 0 ? " card-hacker" : index == 1 ? "card-hipster" : index == 2 ? "card-hustler" : "card-visionary"}`} >{student.studentType}</div>
                                <ul style={{ listStyle: "none", padding: "10px" }}>

                                    {student.skillSetList.map((skills, index) => (
                                        <li> <input style={{ height: "14px", width: "20px", margin: "4px" }} type="checkbox" onClick={() => getstudent(skills.skillTitle, skills._id, student.studentType)} />{skills.skillTitle}</li>
                                    ))}
                                    {/* <li> <input style={{ height: "14px", width: "20px", margin: "4px" }} type="checkbox" />Robotics Programming</li>
                                <li> <input style={{ height: "14px", width: "20px", margin: "4px" }} type="checkbox" />Process Engineering</li>
                                <li> <input style={{ height: "14px", width: "20px", margin: "4px" }} type="checkbox" />ICT Skills</li> */}
                                </ul>

                            </div>


                        </div>
                    ))}



                </div>

                <button style={{ margin: "10px 0px 10px 0px", width: "252px" }} type="button" class="btn btn-success" onClick={() => signupUser()}>
                    SIGN UP</button>

            </div>

        </>
    )
}
