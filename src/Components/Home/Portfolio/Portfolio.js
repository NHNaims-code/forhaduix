import React from 'react';
import './Portfolio.css';
import pt1 from '../../../Asset/portfolio1.png'
import pt2 from '../../../Asset/portfolio2.png'
import pt3 from '../../../Asset/portfolio3.png'
import pt4 from '../../../Asset/portfolio4.png'
import pt5 from '../../../Asset/portfolio5.png'
import pt6 from '../../../Asset/portfolio6.png'

const Portfolio = () => {
    return (
        <div className="container mx-auto mt-5 pt-4">
            <p>PORTFOLIOS</p>
            <div className="d-flex justify-content-between">
                <h1>All Creative Works!</h1>
                <div className="d-flex align-items-center">
                    <p className="new p-1 mr-3">New</p>
                    <p>Explore all project on <span className="text-c-primary">Dribble</span></p>
                </div>
            </div>
            <div className="d-flex mt-4">
                <button className="btn-c-primary-outline">Mobile apps</button>
                <button className="btn-c-primary-outline">Mobile apps</button>
                <button className="btn-c-primary-outline">Mobile apps</button>
                <button className="btn-c-primary-outline">Mobile apps</button>
                <button className="btn-c-primary-outline">Mobile apps</button>
            </div>
            <div className="row">
                <div className="col-md-4 mt-5">
                    <div>
                        <img className="m-1" src={pt1} alt=""/>
                        <img className="m-1" src={pt2} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <div>
                        <img className="m-1" src={pt3} alt=""/>
                        <img className="m-1" src={pt4} alt=""/>
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <div>
                        <img className="m-1" src={pt5} alt=""/>
                        <img className="m-1" src={pt6} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;