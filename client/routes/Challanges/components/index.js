import React from 'react';


import img from '../../../assets/build.jpg';
import pre from '../../../assets/Left-Arrow.jpg';
import next from '../../../assets/Right-Arrow.jpg';
//mport CarouselSlider from 'react-carousel-slider';

export default function StudentDashboard() {
    return (
        <div>
            <section class="pt-5 pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3 style={{ lineHeight: "1.2", fontSize: "1.3rem" }} class="challengeLine">Challenges</h3>
                        </div>

                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            {/* <div className="col-md-1" style={{marginTop:"150px"}}>
                        <a href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <img src={pre}></img>
            </a>
            </div> */}

                                            <div class="col-md-4 mb-3">
                                                <div class="card boxes" style={{ width: "22rem" }}>

                                                    <img class="img-fluid" alt="100%x280" src={img} />
                                                    <div class="card-body middle">

                                                        <h4 class="card-title">Be Safec!</h4>
                                                        <p className="tag">Deadline for enlist: 11-11-2020</p>
                                                        <div>
                                                            <p className="midHeading">Design for a safety feature for bicycles</p>
                                                            <p className="dsc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#e88993" }}>Product Design</button>
                                                            <button type="button" class="btn studentButton spaceIB" style={{ backgroundColor: "#fbde72" }}>Marketing</button>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#9bbfde" }}>Engineering</button>
                                                        </div>
                                                    </div>
                                                    <div className="lowerPart" >
                                                        <p style={{ marginLeft: "20px" }}>
                                                            Hours per week: 12 Hours<br />
                                            Duration: 10weeks<br />
                                            Project team: 5 Students + 1 Mentor<br />
                                            Reimbursement: $ 12,50
                                            </p>

                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-4 mb-3">
                                                <div class="card boxes" style={{ width: "22rem" }}>

                                                    <img class="img-fluid" alt="100%x280" src={img} />
                                                    <div class="card-body middle">

                                                        <h4 class="card-title">Be Safec!</h4>
                                                        <p className="tag">Deadline for enlist: 11-11-2020</p>
                                                        <div>
                                                            <p className="midHeading">Design for a safety feature for bicycles</p>
                                                            <p className="dsc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#e88993" }}>Product Design</button>
                                                            <button type="button" class="btn studentButton spaceIB" style={{ backgroundColor: "#fbde72" }}>Marketing</button>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#9bbfde" }}>Engineering</button>
                                                        </div>
                                                    </div>
                                                    <div className="lowerPart" >
                                                        <p style={{ marginLeft: "20px" }}>
                                                            Hours per week: 12 Hours<br />
                                            Duration: 10weeks<br />
                                            Project team: 5 Students + 1 Mentor<br />
                                            Reimbursement: $ 12,50
                                            </p>

                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-4 mb-3">
                                                <div class="card boxes" style={{ width: "22rem" }}>

                                                    <img class="img-fluid" alt="100%x280" src={img} />
                                                    <div class="card-body middle">

                                                        <h4 class="card-title">Be Safec!</h4>
                                                        <p className="tag">Deadline for enlist: 11-11-2020</p>
                                                        <div>
                                                            <p className="midHeading">Design for a safety feature for bicycles</p>
                                                            <p className="dsc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#e88993" }}>Product Design</button>
                                                            <button type="button" class="btn studentButton spaceIB" style={{ backgroundColor: "#fbde72" }}>Marketing</button>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#9bbfde" }}>Engineering</button>
                                                        </div>
                                                    </div>
                                                    <div className="lowerPart" >
                                                        <p style={{ marginLeft: "20px" }}>
                                                            Hours per week: 12 Hours<br />
                                            Duration: 10weeks<br />
                                            Project team: 5 Students + 1 Mentor<br />
                                            Reimbursement: $ 12,50
                                            </p>

                                                    </div>



                                                </div>
                                            </div>
                                            {/* <div className="col-md-1" style={{marginTop:"150px"}}>
                        <a href="#carouselExampleIndicators2" role="button" data-slide="next">
                <img src={next}></img>
            </a>
            </div> */}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="pt-5">
                <div class="container">
                    <div class="row">
                        {/* <div class="col-md-12">
                            <h3 style={{ lineHeight: "1.2", fontSize: "1.3rem" }} class="challengeLine">Challenges</h3>
                        </div> */}

                        <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            {/* <div className="col-md-1" style={{marginTop:"150px"}}>
                        <a href="#carouselExampleIndicators2" role="button" data-slide="prev">
                <img src={pre}></img>
            </a>
            </div> */}

                                            <div class="col-md-4 mb-3">
                                                <div class="card boxes" style={{ width: "22rem" }}>

                                                    <img class="img-fluid" alt="100%x280" src={img} />
                                                    <div class="card-body middle">

                                                        <h4 class="card-title">Be Safec!</h4>
                                                        <p className="tag">Deadline for enlist: 11-11-2020</p>
                                                        <div>
                                                            <p className="midHeading">Design for a safety feature for bicycles</p>
                                                            <p className="dsc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#e88993" }}>Product Design</button>
                                                            <button type="button" class="btn studentButton spaceIB" style={{ backgroundColor: "#fbde72" }}>Marketing</button>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#9bbfde" }}>Engineering</button>
                                                        </div>
                                                    </div>
                                                    <div className="lowerPart" >
                                                        <p style={{ marginLeft: "20px" }}>
                                                            Hours per week: 12 Hours<br />
                                            Duration: 10weeks<br />
                                            Project team: 5 Students + 1 Mentor<br />
                                            Reimbursement: $ 12,50
                                            </p>

                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-4 mb-3">
                                                <div class="card boxes" style={{ width: "22rem" }}>

                                                    <img class="img-fluid" alt="100%x280" src={img} />
                                                    <div class="card-body middle">

                                                        <h4 class="card-title">Be Safec!</h4>
                                                        <p className="tag">Deadline for enlist: 11-11-2020</p>
                                                        <div>
                                                            <p className="midHeading">Design for a safety feature for bicycles</p>
                                                            <p className="dsc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#e88993" }}>Product Design</button>
                                                            <button type="button" class="btn studentButton spaceIB" style={{ backgroundColor: "#fbde72" }}>Marketing</button>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#9bbfde" }}>Engineering</button>
                                                        </div>
                                                    </div>
                                                    <div className="lowerPart" >
                                                        <p style={{ marginLeft: "20px" }}>
                                                            Hours per week: 12 Hours<br />
                                            Duration: 10weeks<br />
                                            Project team: 5 Students + 1 Mentor<br />
                                            Reimbursement: $ 12,50
                                            </p>

                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-4 mb-3">
                                                <div class="card boxes" style={{ width: "22rem" }}>

                                                    <img class="img-fluid" alt="100%x280" src={img} />
                                                    <div class="card-body middle">

                                                        <h4 class="card-title">Be Safec!</h4>
                                                        <p className="tag">Deadline for enlist: 11-11-2020</p>
                                                        <div>
                                                            <p className="midHeading">Design for a safety feature for bicycles</p>
                                                            <p className="dsc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#e88993" }}>Product Design</button>
                                                            <button type="button" class="btn studentButton spaceIB" style={{ backgroundColor: "#fbde72" }}>Marketing</button>
                                                            <button type="button" class="btn studentButton" style={{ backgroundColor: "#9bbfde" }}>Engineering</button>
                                                        </div>
                                                    </div>
                                                    <div className="lowerPart" >
                                                        <p style={{ marginLeft: "20px" }}>
                                                            Hours per week: 12 Hours<br />
                                            Duration: 10weeks<br />
                                            Project team: 5 Students + 1 Mentor<br />
                                            Reimbursement: $ 12,50
                                            </p>

                                                    </div>



                                                </div>
                                            </div>
                                            {/* <div className="col-md-1" style={{marginTop:"150px"}}>
                        <a href="#carouselExampleIndicators2" role="button" data-slide="next">
                <img src={next}></img>
            </a>
            </div> */}


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>









        </div>



    )
}
