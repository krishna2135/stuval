import React from 'react'
import './Register.css'
import logo from '../../../Assets/logo.png';

export default function Herder() {
    return (
        <div className="container" >
            <div className="col-md-12 header" >
                <div className="img-fluid ">
                    <img className="header-imgages" style={{
                        height: "25px !important",
                        marginTop: "25px !important"
                    }} src={logo} alt="logo" />
                </div>

            </div>

        </div >
    )
}
