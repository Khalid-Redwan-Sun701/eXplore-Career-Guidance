import React from 'react';

const Blog = ({ blog }) => {
  const {
    title,
    author,
    author_img,
    date,
    category,
    image,
    excerpt,
    reading_time,
  } = blog;

  return (
    <div className="h-full transform transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      <div className="card h-full flex flex-col overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-xl border border-gray-800 hover:border-indigo-500 hover:shadow-indigo-900/20 hover:shadow-2xl rounded-lg">
        {/* Blog Image Section with Overlay */}
        <figure className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-60"></div>
        </figure>

        {/* Blog Content */}
        <div className="card-body bg-[#161616] relative z-10 flex flex-col flex-grow p-5">
          {/* Category Tag with Gradient and Shadow */}
          <div className="absolute -top-12 right-4 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-1 px-4 rounded-full text-sm font-bold shadow-lg shadow-indigo-900/30">
            {category}
          </div>

          {/* Blog Title with Gradient Hover */}
          <h2 className="card-title text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400">
            {title}
          </h2>

          {/* Author and Date with Avatar */}
          <div className="flex items-center gap-3 text-gray-400 mb-4">
            {/* Avatar */}
            <div className="avatar">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={author_img}
                  alt={author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-sm font-medium">
              <span className="text-indigo-400">{author}</span> • {date}
            </p>
          </div>

          {/* Blog Excerpt */}
          <p className="text-lg text-gray-300 flex-grow mb-4">{excerpt}</p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-3"></div>

          {/* Reading Time */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2 text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 4.707a1 1 0 10-1.414 1.414L15.586 9H12a1 1 0 100 2h3.586l-4.293 4.293a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414l-6-6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-indigo-400">{reading_time}</p>
            </div>
          </div>

          {/* Button with Gradient Hover */}
          <div className="card-actions mt-4">
            <button className="btn bg-gradient-to-r from-indigo-700 to-indigo-600 hover:from-indigo-600 hover:to-indigo-500 text-white border-none w-full shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/40 transition-all duration-300 py-3 font-medium">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
