import React from 'react';
import './Case.css';

const Case = () => {
    return (
        <div className="case-root">
            <div className="container">
                <div className="div">
                    <h1 data-aos="fade-down" className="text-c-lightblue">Case study</h1>
                    <p data-aos="fade-down" className="w-50 case-description">Now that you know a lot about me, let me know if you are interested to work with me.</p>
                    <div className="row">
                        <div data-aos="fade-down" className="col-md-4">
                            <div className="case-card ">
                                <div className="case-img">

                                </div>
                                <div className="case-info p-2">
                                    <h5><span className="text-c-green">Branding bite,</span> UI Design</h5>
                                    <p>I currently am the lead designer on the user interface design team for visualizer.</p>
                                    <button>VIEW MY ROLL</button>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-md-4">
                            <div className="case-card ">
                                <div className="case-img">

                                </div>
                                <div className="case-info p-2">
                                    <h5><span className="text-c-green">Branding bite,</span> UI Design</h5>
                                    <p>I currently am the lead designer on the user interface design team for visualizer.</p>
                                    <button>VIEW MY ROLL</button>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="col-md-4">
                            <div className="case-card ">
                                <div className="case-img">

                                </div>
                                <div className="case-info p-2">
                                    <h5><span className="text-c-green">Branding bite,</span> UI Design</h5>
                                    <p>I currently am the lead designer on the user interface design team for visualizer.</p>
                                    <button>VIEW MY ROLL</button>
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