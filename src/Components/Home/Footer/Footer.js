import React from 'react';
import './Footer.css';
import logo from '../../../Asset/logo2.png';

const Footer = () => {
    return (
        <div data-aos="slide-up" className="footer-root">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-6 footer-left">
                        <div>
                        <img src={logo} alt=""/>
                        <p className="w-50">I currently am the lead designer on the user interface design team for visualizer.</p>
                        <div><i class="fa fa-twitter twitter" aria-hidden="true"></i>
                        <i class="fa fa-dribbble dribble" aria-hidden="true"></i>
                        <i class="fa fa-linkedin linkedin" aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='row footer-right'>
                            <div className="col-md-6 ">
                                <div>
                                    <ul>
                                        <li><a href="#" className="text-secondary">Home</a></li>
                                        <li><a href="#" className="text-secondary">About</a></li>
                                        <li><a href="#" className="text-secondary">Work</a></li>
                                        <li><a href="#" className="text-secondary">Process</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <ul>
                                        <li><a href="#" className="text-secondary">Store</a></li>
                                        <li><a href="#" className="text-secondary">Blog</a></li>
                                        <li><a href="#" className="text-secondary">Reading List</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center copyright">Not Copyright 2020 • Robin Williams. Webflow cloneable</p>
        </div>
    );
};

export default Footer;