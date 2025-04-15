import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperSlider = () => {
  return (
    <div className="w-4/5 md:w-2/5 mx-auto text-center bg-black py-8">
      {' '}
      {/* Tailwind for container */}
      <h1 className="text-3xl mb-8 text-white font-bold ">eXplore Gallery</h1>
      <Swiper
        spaceBetween={30} // Space between slides
        centeredSlides={true} // Centers the slides
        autoplay={{
          delay: 3500, // Auto play delay in ms
          disableOnInteraction: false, // Keep autoplaying even after interaction
        }}
        pagination={{
          clickable: true, // Makes pagination clickable
        }}
        navigation={true} // Enable navigation arrows
        modules={[Autoplay, Pagination, Navigation]} // Use necessary modules
        className="mySwiper" // Custom class for swiper container
      >
        <SwiperSlide>
          <img
            className="w-full h-64 md:h-96 object-cover rounded-lg filter brightness-100 transition duration-500 ease-in-out" // Tailwind classes for image styling
            src="https://i.ibb.co.com/ynQ80LsG/istockphoto-2120816452-612x612.jpg"
            alt="Flower 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 md:h-96 object-cover rounded-lg filter brightness-100 transition duration-500 ease-in-out" // Tailwind classes for image styling
            src="https://i.ibb.co.com/Y7kLQ5Nt/istockphoto-1132126199-612x612.jpg"
            alt="Flower 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 md:h-96 object-cover rounded-lg filter brightness-100 transition duration-500 ease-in-out"
            src="https://i.ibb.co.com/CKnSk2jC/istockphoto-637867656-612x612.jpg"
            alt="Flower 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 md:h-96 object-cover rounded-lg filter brightness-100 transition duration-500 ease-in-out"
            src="https://i.ibb.co.com/fds89zn9/istockphoto-2187408419-612x612.jpg"
            alt="Flower 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 md:h-96 object-cover rounded-lg filter brightness-100 transition duration-500 ease-in-out"
            src="https://i.ibb.co.com/Z1HkHhzY/istockphoto-2163189358-612x612.jpg"
            alt="Flower 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 md:h-96 object-cover rounded-lg filter brightness-100 transition duration-500 ease-in-out"
            src="https://i.ibb.co.com/39nLq2nR/istockphoto-1482843873-612x612.jpg"
            alt="Flower 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-64 md:h-96 object-cover rounded-lg filter brightness-100 transition duration-500 ease-in-out"
            src="https://i.ibb.co.com/fdh8McFt/istockphoto-2195283836-612x612.jpg"
            alt="Flower 2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
