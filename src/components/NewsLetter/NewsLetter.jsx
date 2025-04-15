import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className="my-20">
      <h1 className="text-4xl font-bold text-center text-white mb-4">
        Join Our Newsletter
      </h1>
      <div className="flex justify-center p-6">
        {/* Container with animated gradient border */}
        <div className="border-2 border-gray-800 p-6 rounded-lg flex gap-2 w-full max-w-md md:w-[500px] lg:w-[600px] relative overflow-hidden bg-gray-900 ">
          <div className="flex-1">
            <label className="input flex items-center border border-gray-300 rounded-md p-2 w-full">
              <svg
                className="h-[1em] opacity-50 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className="w-full text-black outline-none bg-transparent font-bold"
              />
            </label>
            <div className="validator-hint hidden text-red-500 text-sm">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral min-w-[120px] px-4 py-2">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
