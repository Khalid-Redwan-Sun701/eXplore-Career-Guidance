import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
  const { handleRegister, handleUpdateProfile } = useContext(authContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const image = event.target.image.value;

    // Password match check
    if (password !== confirmPassword) {
      setError('Passwords do not match !!');
      return;
    }

    // Password validation regex
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        'Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return;
    }

    handleRegister(email, password)
      //here we can use .then just because we did return in handleRegister in AuthProvider
      .then((response) => {
        handleUpdateProfile(name, image);
        navigate('/');
      });
  };

  return (
    <div className="w-[80%] mx-auto text-white min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-lg relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-red-700 via-red-600 to-orange-500 rounded-lg opacity-20 blur-xl animate-pulse"></div>

        <div className="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="h-2 bg-gradient-to-r from-red-700 via-red-600 to-orange-500"></div>

          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-400 via-red-300 to-orange-300 text-transparent bg-clip-text">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  name="name"
                  required
                />
              </div>

              {/* Image URL Field */}
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">
                  Profile Image URL
                </label>
                <input
                  type="text"
                  placeholder="https://example.com/your-image.jpg"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  name="image"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  name="email"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  name="password"
                  required
                />
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border "
                  name="confirmPassword"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative w-full py-3 mt-6 font-bold text-white text-lg rounded-lg 
                          overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-500
                          shadow-lg transition-all duration-500 ease-in-out transform 
                          hover:scale-105 hover:shadow-red-500/70 hover:brightness-125"
              >
                <span className="absolute inset-0 bg-white opacity-10 hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center">
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
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    ></path>
                  </svg>
                  Create Account
                </span>
              </button>
            </form>

            {error && (
              <p className="text-red-600 mt-5 font-bold text-center">{error}</p>
            )}

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?
                <NavLink
                  to="/login"
                  className="ml-1 font-medium text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  Sign in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
