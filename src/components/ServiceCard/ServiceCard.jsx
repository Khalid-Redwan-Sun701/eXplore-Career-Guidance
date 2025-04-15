import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const {
    id,
    image,
    service_name,
    category,
    pricing,
    counselor,
    description,
    rating,
  } = service;

  return (
    <div className="h-full transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      <div className="card h-full flex flex-col overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl border border-gray-800 hover:border-purple-500 hover:shadow-purple-900/20 hover:shadow-2xl rounded-lg">
        {/* Image Section with Overlay */}
        <figure className="relative overflow-hidden">
          <img
            src={image}
            alt={service_name}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60"></div>

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-yellow-500 text-black py-1 px-3 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {rating}
          </div>
        </figure>

        {/* Card Body with Gradient Text */}
        <div className="card-body bg-[#161616] relative z-10 flex flex-col flex-grow p-5">
          {/* Category Tag with Glow */}
          <div className="absolute -top-12 right-4 bg-gradient-to-r from-purple-700 to-purple-500 text-white py-1 px-4 rounded-full text-sm font-bold shadow-lg shadow-purple-900/30">
            {category}
          </div>

          {/* Service Name with Gradient Hover */}
          <h2 className="card-title text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400">
            {service_name}
          </h2>

          {/* Description with Slightly Larger Font */}
          <p className="text-lg text-gray-300 flex-grow mb-4">{description}</p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-3"></div>

          {/* Counselor & Pricing with Icons */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-300 text-lg">
                <span className="text-purple-300 font-medium">{counselor}</span>
              </p>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-green-400 text-xl font-bold">${pricing}</p>
            </div>
          </div>

          {/* Button with Gradient Hover */}
          <NavLink to={`/detailsService/${id}`}>
            <div className="card-actions mt-4">
              <button className="btn w-full  bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white border-none  shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 transition-all duration-300 py-3 font-medium">
                Learn More
              </button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
