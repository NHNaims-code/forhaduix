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
        <div className="portfolio-root container mx-auto mt-5 pt-4">
            <p data-aos="fade-up" className="portfolio-text">PORTFOLIOS</p>
            <div className="d-flex justify-content-between">
                <h1 data-aos="fade-left">All Creative Works!</h1>
                <div className="d-flex align-items-center new-root">
                    <p data-aos="fade-up" className="new px-2 py-1">New</p>
                    <p data-aos="fade-up" className="new-right">Explore all project on <span className="text-c-primary">Dribble</span></p>
                </div>
            </div>
            <div className="d-flex option-bar">
                <button data-aos="fade-up" className="py-1 px-2">Mobile apps</button>
                <button data-aos="fade-up" className="py-1 px-2">Mobile apps</button>
                <button data-aos="fade-up" className="py-1 px-2">Mobile apps</button>
                <button data-aos="fade-up" className="py-1 px-2">Mobile apps</button>
                <button data-aos="fade-up" className="py-1 px-2">Mobile apps</button>
            </div>
            <div className="row portfolio-images">
                <div className="col-md-4 ">
                    <div>
                        <img data-aos="fade-up" className="portfolio-image" src={pt1} alt=""/>
                        <img data-aos="fade-up" className="portfolio-image" src={pt2} alt=""/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="portfolio-image-row">
                        <img data-aos="fade-up" className="portfolio-image" src={pt4} alt=""/>
                        <img data-aos="fade-up" className="portfolio-image" src={pt3} alt=""/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>
                        <img data-aos="fade-up" className="portfolio-image" src={pt5} alt=""/>
                        <img data-aos="fade-up" className="portfolio-image" src={pt6} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;