import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div className="home">
            <Banner></Banner>
            <Courses></Courses>
        </div>
    );
};

export default Home;