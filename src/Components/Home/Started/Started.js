import React from 'react';
import './Started.css';

const Started = () => {
    return (
        <div className="my-5 py-5">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-c-lightblue mb-4">Let's get started</h1>
                        <p>Now that you know a lot about me, let me know if you are interested to work with me.</p>
                        <div className="avater mt-5">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <label for="name">Name</label>
                        <input className="c-input form-control mb-4" type="text" name="name" id="name"/>
                        <label for="name">Email</label>
                        <input className="c-input form-control mb-4" type="text" name="name" id="name"/>
                        <label for="name">Message</label>
                        <textarea rows="5" className="c-input form-control" name="name" id="name"/>
                        <button className="get-started form-control mt-5">LET'S GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Started;