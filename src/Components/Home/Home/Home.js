import React from 'react';
import Case from '../Case/Case';
import Companies from '../Companies/Companies';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import Portfolio from '../Portfolio/Portfolio';
import Skillset from '../Skillset/Skillset';
import Started from '../Started/Started';

const Home = () => {
    return (
        <div>
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