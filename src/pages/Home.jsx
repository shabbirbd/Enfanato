import React from 'react';
import Blogs from '../components/Blogs';
import HeroSlider from '../components/HeroSlider';
import Products from '../components/Products';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <div className='bg-white py-5'>
            <HeroSlider/>
            <Products/>
            <Reviews/>
            <Blogs/>
        </div>
    );
};

export default Home;