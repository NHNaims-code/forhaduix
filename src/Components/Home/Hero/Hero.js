import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';
import me from '../../../Asset/me.png';

const Hero = () => {
    return (
        <div className="hero-deep">
        <div className="hero-root">
            <Navbar></Navbar>
            <div className="row p-0 m-0 hero container mx-auto text-white d-flex align-items-center h-100">
                <div className="col-md-5 hero-img h-75">
                    {/* <img className="img h-100 hero-me" src={me} alt=""/> */}
                </div>
                <div className="col-md-7 hero-info">
                    <div className="text-left w-100 ml-auto">
                        <h1>I'm Forhad Sheikh.</h1>
                        <h1>A UX/UI Designer</h1>
                        <p className="hero-line-height">I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
                        <div className="text-right mt-5 pt-5">
                            <button className="btn-c-primary px-4 py-3 ">CONTACT ME</button>
                            <button className="btn-c-primary text-c-gray bg-white px-4 py-3 ml-5">VIEW PORTFOLIO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;