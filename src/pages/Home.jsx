import React from 'react';
import Blogs from '../components/Blogs';
import HeroSlider from '../components/HeroSlider';
import Products from '../components/Products';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <div className='border-2 border-red-500 bg-white '>
            <HeroSlider/>
            <Products/>
            <Reviews/>
            <Blogs/>
        </div>
    );
};

export default Home;