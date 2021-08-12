import React from 'react'
import AdminHeader from './AdminHeader'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import arrow from '../../Assets/arrow.png'


export default function AdminDashbord() {
    return (
        <>
            <AdminHeader />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            <li> <img className="arrow-img" src={arrow} alt="arrow" />New Challenge</li>
                            <li><img className="arrow-img" src={arrow} alt="arrow" /> All Challenges</li>
                            <li> <img className="arrow-img" src={arrow} alt="arrow" />New Activites</li>
                            <li> <img className="arrow-img" src={arrow} alt="arrow" />All Activites</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li> <img className="arrow-img" src={arrow} alt="arrow" />Skills</li>
                            <li> <img className="arrow-img" src={arrow} alt="arrow" />Community</li>

                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}


