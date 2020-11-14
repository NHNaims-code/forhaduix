import React, { useEffect } from 'react';
import './Home.css';
import Case from '../Case/Case';
import Companies from '../Companies/Companies';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import Skillset from '../Skillset/Skillset';
import Started from '../Started/Started';
import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className="home-root">
            <Hero></Hero>
            <Companies></Companies>
            <Skillset></Skillset>
            <Portfolio></Portfolio>
            <Started></Started>
            <Case></Case>
            <Footer></Footer>
        </div>
    );
};

export default Home;