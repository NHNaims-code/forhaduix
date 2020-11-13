import React from 'react';
import './Case.css';

const Case = () => {
    return (
        <div className="my-5 py-5">
            <div className="container">
                <div className="div">
                    <h1 className="text-c-lightblue">Case study</h1>
                    <p className="w-50 my-4">Now that you know a lot about me, let me know if you are interested to work with me.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="case-card shadow-sm">
                                <div className="case-img">

                                </div>
                                <div className="case-info p-2">
                                    <h5><span className="text-c-green">Branding bite,</span> UI Design</h5>
                                    <p>I currently am the lead designer on the user interface design team for visualizer.</p>
                                    <h6 className="text-c-lightblue">VIEW MY ROLL</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="case-card shadow-sm">
                                <div className="case-img">

                                </div>
                                <div className="case-info p-2">
                                    <h5><span className="text-c-green">Branding bite,</span> UI Design</h5>
                                    <p>I currently am the lead designer on the user interface design team for visualizer.</p>
                                    <h6 className="text-c-lightblue">VIEW MY ROLL</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="case-card shadow-sm">
                                <div className="case-img">

                                </div>
                                <div className="case-info p-2">
                                    <h5><span className="text-c-green">Branding bite,</span> UI Design</h5>
                                    <p>I currently am the lead designer on the user interface design team for visualizer.</p>
                                    <h6 className="text-c-lightblue">VIEW MY ROLL</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Case;