import React from 'react';
import './Skillset.css';
import sqr from '../../../Asset/squ.svg';
import pen from '../../../Asset/pen.png';
import play from '../../../Asset/play.svg';
import camera from '../../../Asset/camera.png';

const Skillset = () => {
    return (
        <div>
            <div className="skillset container my-5 py-5">
                <div className="row ">
                    <div className="col-md-4">
                        <div className="p-2">
                            <h1 className="text-c-darkblue">Skillset</h1>
                            <p className="my-4">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
                            <button className="btn btn-c-primary px-4 py-3 mt-5">HIRE ME</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="px-1 py-2">
                            <img className="mb-4" src={sqr} alt=""/>
                            <h4 className="text-c-darkblue my-3">User Experience Design</h4>
                            <p>Working at Facebook has taught me a lot about how to understand users, solve problems and build great products.</p>
                        </div>
                        <div className="px-1 py-2 mt-4">
                            <img className="mb-4" src={play} alt=""/>
                            <h4 className="text-c-darkblue my-3">User Interface Design</h4>
                            <p>I started my design journey with motion design in my college days. Motion is something that really fascinates me because of the flexibility of story telling. </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="px-1 py-2">
                            <img className="mb-4" src={pen} alt=""/>
                            <h4 className="text-c-darkblue my-3">Visual Design</h4>
                            <p>My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout and the whole package.</p>
                        </div>
                        <div className="px-1 py-2 mt-4">
                            <img className="mb-4" src={camera} alt=""/>
                            <h4 className="text-c-darkblue my-3">Graphic Design</h4>
                            <p>Clicking pictures really brings out the creative in me. Phtography really makes you look and percieve things in a different way. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skillset;