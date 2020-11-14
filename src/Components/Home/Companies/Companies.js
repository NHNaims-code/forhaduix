import React from 'react';
import './Companies.css';

const Companies = () => {
    return (
        <div className="companies-root bg-c-gray">
            <div className="container">
                <p data-aos="fade-up" className="text-c-gray work-experience"><small>WORK EXPERIENCE</small></p>
                <h2 data-aos="fade-left" className="text-c-darkblue w-50 line-height">Companies I have worked for in the past</h2>
                <div className="companies-info">
                    <div className="row ">
                        <div className="col-md-4 card-1">
                            <div data-aos="fade-up" className="companies-card">
                                <div className="companies-card-img ">
                                    <p>01</p>
                                    <small className="text-c-lightblue company-date">jan 17- jun 18</small>
                                </div>

                                <div className="p-4">
                                    <h5><span className="text-c-green">Branding bite,<br/></span> UI Designer</h5>
                                    <p className="text-c-gray line-height mt-3">I currently am the lead designer on the user interface design team for visualizer.</p>
                                    <button className="view-my-roll bg-c-gray text-c-lightblue py-2 px-4">VIEW MY ROLL</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 card-2">
                            <div data-aos="fade-up" className=" companies-card">
                                <div className="companies-card-img ">
                                    <p>02</p>
                                    <small className="text-c-lightblue company-date">jan 17- jun 18</small>
                                </div>

                                <div className="p-4">
                                    <h5><span className="text-c-darkblue">Digital Hub,<br/></span> UI Designer</h5>
                                    <p className="text-c-gray line-height">I’ve worked on a wide variety of user research and interection designer over the past 1 years.</p>
                                    <button className="view-my-roll bg-c-gray text-c-lightblue py-2 px-4">VIEW MY ROLL</button>                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 card-3">
                            <div data-aos="fade-up" className=" companies-card">
                                <div className="companies-card-img">
                                    <p>03</p>
                                    <small className="text-c-lightblue company-date">jan 17- jun 18</small>
                                </div>

                                <div className="p-4">
                                    <h5><span className="text-c-primary">LEDP at ICT Division,<br/></span> Tainer</h5>
                                    <p className="text-c-gray line-height">I started my design career with LEDP project. creating student career for the platform. </p>
                                    <button className="view-my-roll bg-c-gray text-c-lightblue py-2 px-4">VIEW MY ROLL</button>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;