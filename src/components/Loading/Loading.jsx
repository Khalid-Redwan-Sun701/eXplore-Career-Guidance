import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex gap-2">
        <span className="loading loading-bars loading-xs text-white"></span>
        <span className="loading loading-bars loading-sm text-white"></span>
        <span className="loading loading-bars loading-md text-white"></span>
        <span className="loading loading-bars loading-lg text-white"></span>
        <span className="loading loading-bars loading-xl text-white"></span>
      </div>
      <p className="mt-6 text-white text-lg font-bold animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
