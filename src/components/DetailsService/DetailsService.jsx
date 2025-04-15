import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsService = () => {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  const {
    id,
    image,
    service_name,
    category,
    description,
    pricing,
    duration,
    counselor,
    rating,
    full_description,
  } = serviceDetails;

  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`star-${i}`}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half-star"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="half-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-gradient)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg
          key={`empty-star-${i}`}
          className="w-5 h-5 text-gray-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="bg-black min-h-screen text-white relative  ">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/5 to-black pointer-events-none"></div>

      {/* Animated particles/stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `twinkle ${
                Math.random() * 10 + 5
              }s ease-in-out infinite alternate`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto py-16 px-4 relative z-10 max-w-6xl">
        {/* Header with service name and category */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 text-purple-400 mb-4 backdrop-blur-sm border border-purple-500/20">
            {category}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            {service_name}
          </h1>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>

        {/* Hero Section with Image and Basic Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div
            className={`relative group transform transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-16'
            }`}
          >
            {/* Main image */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl transform rotate-3 scale-105 opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-500/10">
              <img
                src={image}
                alt={service_name}
                className="w-full h-96 object-cover object-center transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  {renderStars(rating)}
                  <span className="ml-2 text-gray-300">({rating})</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm border border-gray-700/30">
                  {duration}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          <div
            className={`flex flex-col justify-center transform transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-16'
            }`}
          >
            <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-gray-800/50 shadow-xl">
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-black/60 p-4 rounded-xl border border-gray-800/60 group hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-green-400 mr-2 group-hover:text-green-300 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-gray-400 text-sm">Pricing</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    $ {pricing}
                  </span>
                </div>

                <div className="bg-black/60 p-4 rounded-xl border border-gray-800/60 group hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <svg
                      className="w-5 h-5 text-blue-400 mr-2 group-hover:text-blue-300 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    <span className="text-gray-400 text-sm">Counselor</span>
                  </div>
                  <span className="text-xl font-medium text-white">
                    {counselor}
                  </span>
                </div>
              </div>

              <button className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-pink-600 w-full py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-10 transition-all duration-700 rtl:translate-x-full ease-out bg-gradient-to-r from-white via-white to-white"></div>
                <div className="relative flex items-center justify-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="font-bold">Book Session Now</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Full Description Section */}
        <div
          className={`mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="relative">
            <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
            <div className="flex items-center justify-center my-8">
              <div className="bg-black px-4">
                <h2 className="my-8  text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Full Service Description
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl shadow-purple-500/10 border border-gray-800/50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>

            <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed relative z-10">
              {full_description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          <div className="group bg-gradient-to-br from-gray-900/80 to-black p-px rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="bg-gradient-to-br from-gray-900 to-black/80 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-900/95 group-hover:to-black/95">
              <div className="p-4 bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-400">
                Have questions about this service? View our comprehensive FAQ
                section.
              </p>
              <button className="mt-6 text-purple-400 font-semibold flex items-center group-hover:text-purple-300 transition-colors duration-300">
                View FAQ
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-gray-900/80 to-black p-px rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="bg-gradient-to-br from-gray-900 to-black/80 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-900/95 group-hover:to-black/95">
              <div className="p-4 bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Watch Demo Session
              </h3>
              <p className="text-gray-400">
                See what a typical session looks like with our professional
                counselors.
              </p>
              <button className="mt-6 text-purple-400 font-semibold flex items-center group-hover:text-purple-300 transition-colors duration-300">
                Watch Video
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-gray-900/80 to-black p-px rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="bg-gradient-to-br from-gray-900 to-black/80 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-900/95 group-hover:to-black/95">
              <div className="p-4 bg-purple-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg
                  className="w-8 h-8 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Schedule a Call
              </h3>
              <p className="text-gray-400">
                Have specific questions? Get in touch with our support team
                directly.
              </p>
              <button className="mt-6 text-purple-400 font-semibold flex items-center group-hover:text-purple-300 transition-colors duration-300">
                Contact Us
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations - add to your global CSS or page */}
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default DetailsService;
