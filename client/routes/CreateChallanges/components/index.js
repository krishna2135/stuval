import React, { useState, useEffect } from 'react';
import { verifySignup } from '../actions';
// import AdminHeader from '../Admin/AdminHeader';
import './AdminChallanges.css'

export default function AdminChallanges(props) {


    const [errorTitle, setErrorTitle] = useState('');
    const [errorSignin, setErrorSignin] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const [errorShortDescription, setErrorShortDescription] = useState('');
    const [errorlongDesc, setErrorlongDesc] = useState('');
    const [errorHourprweek, setErrorHourprweek] = useState('');
    const [errorProjectTeam, setErrorProjectTeam] = useState('');
    const [errorDuration, setErrorDuration] = useState('');
    const [errorReimbursment, setErrorReimbursment] = useState('');

    const [title, setTitle] = useState('');
    const [signin, setSignin] = useState('');
    const [description, setDescription] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [longDesc, setlongDesc] = useState('');
    const [hourprweek, setHourprweek] = useState('');
    const [projectTeam, setProjectTeam] = useState('');
    const [duration, setDuration] = useState('');
    const [reimbursment, setReimbursment] = useState('');

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
//getting student type
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

    const createChallange = () => {
        let errorFound = false;
        if (!title) {
            errorFound = true;
            setErrorTitle('Please Enter Title');
        }
        if (!signin) {
            errorFound = true;
            setErrorSignin('Please Enter Deadline For SignIn');
        }
        if (!description) {
            errorFound = true;
            setErrorDescription('Please Enter Description Of Student');
        }

        if (!shortDescription) {
            errorFound = true;
            setErrorShortDescription('Please Enter short Description');
        }

        if (!longDesc) {
            errorFound = true;
            setErrorlongDesc('Please Enter Description');
        }

        if (!hourprweek) {
            errorFound = true;
            setErrorHourprweek('Please Enter Hour Per Week');
        }

        if (!projectTeam) {
            errorFound = true;
            setErrorProjectTeam('Please Enter Project Team');
        }

        if (!duration) {
            errorFound = true;
            setErrorDuration('Please Enter Duration');
        }
        if (!reimbursment) {
            errorFound = true;
            setErrorReimbursment('Please Enter Reimbursment');
        }

        console.log("clicked")
        if (!errorFound) {
            dispatch(
                verifySignup({
                    challengeImage:"",
                    title: title,
                    deadline: signin,
                    studentDesc: description,
                    shortDesc: shortDescription,
                    longDesc: longDesc,
                    googleDriveLink:"https://drive.google.com",
                    hoursPerWeek:hourprweek,
                    duration:duration,
                    reimbursement:reimbursment,
                    projectTeam:projectTeam,
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

    const addTitle = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        setTitle(e.target.value);

    }
    const addDeadline = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        var myDate = new Date(e.target.value);
        var result = myDate.getTime();
        setSignin(result);

    }

    const addDesc = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        setDescription(e.target.value);

    }

    const addShortDesc = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        setShortDescription(e.target.value);

    }

    const addLongDesc = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        setlongDesc(e.target.value);

    }


    const addHourperweak = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        setHourprweek(e.target.value);

    }

    const addProjctteam = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        setProjectTeam(e.target.value);

    }

    const addDuration = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        setDuration(e.target.value);

    }

    const addReimbursement = (e) => {
        setErrorTitle('');
        setErrorSignin('');
        setErrorDescription('');
        setErrorShortDescription('');
        setErrorlongDesc('');
        setErrorHourprweek('');
        setErrorProjectTeam('');
        setErrorDuration('');
        setErrorReimbursment('');
        setReimbursment(e.target.value);

    }
    console.log(signin)
    //console.log(props.graphListData.skillTypeList,"hhhhhhhhhhmmmmmbhe")
    return (
        <>
            {/* <AdminHeader /> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="challange-container">
                            <form>
                                <div className="errorText">{errorTitle}</div>
                                <div >
                                    <input type="text" name="title" id="title" onChange={(e) => addTitle(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                createChallange();
                                            }
                                        }} required />
                                    <label>Title</label>

                                </div>
                                <div className="errorText">{errorSignin}</div>

                                <div className="form-group">
                                    <input type="date" name="signin" id="signin" required
                                        onChange={(e) => addDeadline(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                createChallange();
                                            }
                                        }}
                                    />
                                    <label>Deadline for Sign in</label>

                                </div>
                                <div className="errorText">{errorDescription}</div>
                                <div className="form-group">
                                    <input type="text" name="desc" id="desc"
                                        onChange={(e) => addDesc(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                createChallange();
                                            }
                                        }} required />
                                    <label>Description Of Student</label>

                                </div>
                                <div className="errorText">{errorShortDescription}</div>
                                <div className="form-group">
                                    <input type="textarea" name="shortDesc" id="shortDesc"
                                        onChange={(e) => addShortDesc(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                createChallange();
                                            }
                                        }} required />
                                    <label>Short Description:(Max 150 signs)</label>

                                </div>

                                <div className="errorText">{errorlongDesc}</div>
                                <div className="form-group">
                                    <input type="textarea" name="longDesc" id="longDesc"
                                        onChange={(e) => addLongDesc(e)}
                                        onKeyPress={(event) => {
                                            if (event.key === 'Enter') {
                                                createChallange();
                                            }
                                        }} required />
                                    <label>Description:(Max 3000 signs)</label>

                                </div>
                            </form>
                        </div>
                    </div>
                    {/* potho Start */}
                    <div className="col-md-6">
                    </div>
                    {/* potho end */}
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

                                <div className={`"" ${index == 0 ? " challange-hacker" : index == 1 ? "challange-hipster" : index == 2 ? "challange-hustler" : "challange-visionary"}`} >{student.studentType}</div>
                                <ul style={{ listStyle: "none", padding: "10px" }}>

                                    {student.skillSetList.map((skills, index) => (
                                        <li> <input style={{ height: "14px", width: "20px", margin: "4px" }} type="checkbox" onClick={() => getstudent(skills.skillTitle, skills._id, student.studentType)} />{skills.skillTitle}</li>
                                    ))}

                                </ul>

                            </div>


                        </div>
                    ))}





                </div>
                {/* <NavLink to={{
                    pathname: '/'
                }}> */}
                {/* <button style={{ margin: "10px 0px 10px 0px" }} type="button" class="btn btn-success">
                    Create Challenge</button> */}
                {/* </NavLink> */}
            </div>
            <div className="container">
                <div className="row" style={{ marginTop: "36px" }}>
                    <div className="col-md-12">

                        <div className="challange-container">
                            <form>
                                <div className="d-flex">
                                    <div className="col-md-3">
                                        <div className="errorText">{errorHourprweek}</div>
                                        <input type="text" name="hour" id="hour"
                                            onChange={(e) => addHourperweak(e)}
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                    createChallange();
                                                }
                                            }} required />
                                        <label style={{ marginLeft: "17px" }}>Hours per week</label>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="errorText">{errorProjectTeam}</div>
                                        <input type="text" name="projectTeam" id="projectTeam"
                                            onChange={(e) => addProjctteam(e)}
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                    createChallange();
                                                }
                                            }} required />
                                        <label style={{ marginLeft: "17px" }}>Project Team</label>

                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="challange-container">
                            <form>
                                <div className="d-flex">
                                    <div className="col-md-6">
                                        <div className="errorText">{errorDuration}</div>
                                        <input type="text" name="duration" id="duration" required
                                            onChange={(e) => addDuration(e)}
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                    createChallange();
                                                }
                                            }} />
                                        <label style={{ marginLeft: "17px" }}>Duration</label>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="errorText">{errorReimbursment}</div>
                                        <input type="text" name="reimbursement" id="reimbursement" required
                                            onChange={(e) => addReimbursement(e)}
                                            onKeyPress={(event) => {
                                                if (event.key === 'Enter') {
                                                    createChallange();
                                                }
                                            }} />
                                        <label style={{ marginLeft: "17px" }}>Reimbursement</label>

                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <button style={{ margin: "10px 8px 10px 0px", width: "22%" }} type="button" className="btn btn-success" onClick={() => createChallange()}>Create Challenge</button>
            </div>

        </>
    )
}
