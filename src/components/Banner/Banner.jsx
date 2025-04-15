import React from 'react';
import { ReactTyped } from 'react-typed';
import backgroundImg from './esther-jiao-ADv0GiMBlmI-unsplash.jpg'; // ✅ Import local image

const Banner = () => {
  // Function to scroll to Services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white">
        <div className="max-w-max">
          <ReactTyped
            strings={[
              'Hello folks !',
              'Unlock Your Career Potential !',
              'Personalized Career Guidance',
              'Land Your Dream Job!',
              'Explore Exciting Opportunities',
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
            className="mb-5 text-7xl font-bold"
          />
          <br />
          <button className="btn btn-primary mt-5" onClick={scrollToServices}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
