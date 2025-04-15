import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Blogs = () => {
  const blogData = useLoaderData();

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
      <h1 className="mt-20 text-5xl text-white">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-30">
        {blogData.map((blog, index) => (
          <div data-aos="fade-up" key={index}>
            <Blog blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
