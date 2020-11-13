import React from 'react';
import './Companies.css';

const Companies = () => {
    return (
        <div className="companies-root bg-c-gray">
            <div className="container py-5">
                <p className="text-c-gray mt-3"><small>WORK EXPERIENCE</small></p>
                <h2 className="text-c-darkblue w-50 mb-4 line-height">Companies I have worked for in the past</h2>
                <div className="companies-info">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className=" mx-1 px-4 mb-5 mt-3 shadow companies-card">
                                <div className="work-date-section">
                                    <p>01</p>
                                    <small className="text-c-lightblue">jan 17- jun 18</small>
                                </div>

                                <h5><span className="text-c-green">Branding bite,</span> UI Designer</h5>
                                <p className="text-c-gray line-height">I currently am the lead designer on the user interface design team for visualizer.</p>
                                <button className="view-my-roll bg-c-gray text-c-lightblue px-4 py-3">VIEW MY ROLL</button>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className=" mx-1 px-4 mb-5 mt-3 shadow companies-card">
                                <div className="work-date-section">
                                    <p>02</p>
                                    <small className="text-c-lightblue">jan 17- jun 18</small>
                                </div>

                                <h5><span className="text-c-darkblue">Digital Hub,</span> UI Designer</h5>
                                <p className="text-c-gray line-height">I’ve worked on a wide variety of user research and interection designer over the past 1 years.</p>
                                <button className="view-my-roll bg-c-gray text-c-lightblue px-4 py-3">VIEW MY ROLL</button>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className=" mx-1 px-4 mb-5 mt-3 shadow companies-card">
                                <div className="work-date-section">
                                    <p>03</p>
                                    <small className="text-c-lightblue">jan 17- jun 18</small>
                                </div>

                                <h5><span className="text-c-primary">LEDP at ICT Division,</span> Tainer</h5>
                                <p className="text-c-gray line-height">I started my design career with LEDP project. creating student career for the platform. </p>
                                <button className="view-my-roll bg-c-gray text-c-lightblue px-4 py-3">VIEW MY ROLL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Companies;