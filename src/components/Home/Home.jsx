import React, { useEffect } from 'react';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import Banner from '../Banner/Banner';
import { NavLink, useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';
import NewsLetter from '../NewsLetter/NewsLetter';
import Blog from '../Blog/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  const services = useLoaderData();
  const { serviceData, blogData } = services;

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // If true, the animation happens only once
    });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Banner Section */}
      <div data-aos="fade-down">
        <Banner />
      </div>

      {/* Services Section */}
      <div className="w-[80%] mx-auto">
        <h1
          id="services-section"
          className="text-5xl font-bold my-10"
          data-aos="fade-right"
        >
          Services
        </h1>
        {/* Add an ID here for smooth scrolling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.slice(0, 8).map((service, index) => (
            <div data-aos="zoom-in" key={index}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
        <div className="flex justify-center" data-aos="fade-up">
          <NavLink to="/services">
            <button
              className="cursor-pointer w-[200px] my-10 relative px-5 py-3 font-bold text-white text-lg rounded-lg 
                 overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-500
                 shadow-lg transition-all duration-500 ease-in-out transform 
                 hover:scale-110 hover:shadow-red-500/70 hover:brightness-125"
            >
              <span className="absolute inset-0 bg-red-600 opacity-25 blur-2xl rounded-lg"></span>
              <span className="relative z-10">See All Services</span>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Blog Section */}
      <div className="w-[80%] mx-auto">
        <h1 className="text-5xl font-bold my-10" data-aos="fade-left">
          BLOGS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogData.slice(0, 8).map((blog, index) => (
            <div data-aos="fade-up" key={index}>
              <Blog blog={blog} />
            </div>
          ))}
        </div>
        <div className="flex justify-center" data-aos="fade-up">
          <NavLink to="/blogs">
            <button
              className="cursor-pointer w-[200px] my-10 relative px-5 py-3 font-bold text-white text-lg rounded-lg
        overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-600
        shadow-xl transition-all duration-500 ease-in-out transform 
        hover:scale-110 hover:shadow-indigo-500/70 hover:brightness-125"
            >
              <span className="absolute inset-0 bg-indigo-600 opacity-25 blur-2xl rounded-lg"></span>
              <span className="relative z-10">More Blogs</span>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Other Sections */}
      <div data-aos="flip-up">
        <SwiperSlider />
      </div>

      <div data-aos="zoom-in">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
