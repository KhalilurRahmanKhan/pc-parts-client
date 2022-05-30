import React from 'react';

const Banner = () => {
    return (
        <div className="hero h-[90vh]"  style={{ 
            backgroundImage: `url("https://i.ibb.co/k0dMGgy/jyIrm7A.jpg")` 
          }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcome to the best place to find your favourite tools for personal computer.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;