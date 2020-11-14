import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Hero.css';
import me from '../../../Asset/me.png';


const Hero = () => {
  
    return (
        <div className="hero-deep">
        <div className="hero-root">
            <Navbar></Navbar>
            <div className="row hero container mx-auto text-white d-flex align-items-center h-100">
                
                <div className="col-md-7 hero-info">
                    <div className=" w-100 ml-auto">
                        <h1 data-aos="fade-up"><span className="t1">I'm</span> Forhad Sheikh. <span className="t2">A</span> UX/UI Designer</h1>
                        <p data-aos="fade-up" className="hero-description">I’m probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
                        <div className="hero-btn-set">
                            <button data-aos="fade-right" data-toggle="tooltip" data-placement="top" title="Tooltip on right" className="hero-btn-1 mr-4 ">CONTACT ME</button>
                            <button data-aos="fade-left" className="hero-btn-2">VIEW PORTFOLIO</button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left"  className="col-md-5 hero-img hero-image">
                    <div className="img-root">
                    <img className="img h-100 hero-me" src={me} alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;