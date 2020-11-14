import React from 'react';
import logo from '../../../Asset/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
            <div className="my-nav  fixed-top shadow-sm">
                <nav class="navbar navbar-root navbar-expand-lg navbar-light py-4 container">
            <a data-aos="fade-right" class="navbar-brand" href="#">
                <img src={logo} alt=""/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul data-aos="fade-left" class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Work</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Case study</a>
                </li>
                <li class="nav-item">
                    <button className="btn btn-c-primary py-2 px-4">Contact</button>
                </li>
                </ul>
            
            </div>
            </nav>
            </div>
    );
};

export default Navbar;