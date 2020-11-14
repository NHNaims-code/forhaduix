import React from 'react';
import './Started.css';

const Started = () => {
    return (
        <div className="started-root">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 data-aos="fade-up" className="text-c-lightblue">Let's get started</h1>
                        <p data-aos="fade-up">Now that you know a lot about me, let me know if you are interested to work with me.</p>
                        <div data-aos="fade-up" className="avater">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <label data-aos="fade-up" for="name" className="label-name-first">Name</label>
                        <input data-aos="fade-up" className="form-control" type="text" name="name" id="name"/>
                        <label data-aos="fade-up" for="name" className="label-name">Email</label>
                        <input data-aos="fade-up" className="form-control" type="text" name="name" id="name"/>
                        <label data-aos="fade-up" for="name" className="label-name">Message</label>
                        <textarea data-aos="fade-up" rows="5" className="form-control" name="name" id="name"/>
                        <button data-aos="fade-up" className="form-control">LET'S GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Started;