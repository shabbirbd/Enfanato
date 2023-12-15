import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Products from '../components/Products';

const Home = () => {
    return (
        <div className='border-2 border-red-500 bg-white'>
            <HeroSlider/>
            <Products/>
        </div>
    );
};

export default Home;