import React from 'react';
import './StudentProfile.css';


export default function studentProfile(props) {
    return(
        <>
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
        <div className="profile-head">
        <div className="profile-container">

        </div>
        <div className="bio-container">
      <span className="txtbold">Name:</span>Florian Beerta<br/>
      <span className="txtbold">Age:</span>20 Years.<br/>
      <span className="txtbold">Study:</span>Industrial Management and ngineering.<br/>
      <span className="txtbold">Bio:</span>Engineer Mechanics Electrical Engineering ICT.
        </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}