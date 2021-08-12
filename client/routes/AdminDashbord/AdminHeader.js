import React from 'react'
import './Admin.css'
import logo from '../../Assets/stuval-logo.png'

export default function AdminHeader() {
    return (

        <div className="container-fluid" >
            {/* <div className="row"> */}

            <div className="row header">
                <div className="col-md-10">
                    <div className="img-fluid ">
                        <img className="header-img" style={{
                            height: "25px",
                            marginTop: "25px"
                        }} src={logo} alt="logo" />
                    </div>
                </div>
                <div className="col-md-2">
                    <h4 className="toptext" style={{ color: "white" }}>Admin</h4>
                </div>
            </div>
            {/* </div> */}


        </div >

    )
}
