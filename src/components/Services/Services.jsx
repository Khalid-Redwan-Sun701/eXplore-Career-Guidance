import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { authContext } from '../AuthProvider/AuthProvider';

const Services = () => {
  const services = useLoaderData();
  // const contextValue = useContext(authContext);
  // console.log(contextValue);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // If true, the animation will only happen once
    });
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      <h1 className="mt-20 text-5xl text-white">All Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-30">
        {services.map((service, index) => (
          <div data-aos="fade-up" key={index}>
            {' '}
            {/* Add data-aos attribute for animation */}
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
