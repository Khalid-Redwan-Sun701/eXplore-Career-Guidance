import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(authContext);
  const [error, setError] = useState('');
  const location = useLocation();
  console.log(location);

  // navigate will be used inside a function, thats why it should be used by naviagte/ useNavigate
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    setError('');
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    handleLogin(email, password)
      .then((res) => {
        navigate(location.state?.from || '/'); // after login redirect to wherever it wanted to go
      })
      .catch((error) => setError(error.message));
  };

  const googleLoginHandler = () => {
    handleGoogleLogin().then((res) => navigate(location.state?.from || '/'));
  };

  return (
    <div className="w-[80%] mx-auto text-white min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md relative">
        {/* Background glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-red-700 via-red-600 to-orange-500 rounded-lg opacity-20 blur-xl animate-pulse"></div>

        <div className="relative bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
          {/* Top decorative bar */}
          <div className="h-2 bg-gradient-to-r from-red-700 via-red-600 to-orange-500"></div>

          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-red-400 via-red-300 to-orange-300 text-transparent bg-clip-text">
              Welcome Back
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  placeholder="your@email.com"
                  name="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  placeholder="••••••••"
                  name="password"
                  required
                />
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-red-400 hover:text-red-300 transition-colors duration-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="cursor-pointer  relative w-full py-3 font-bold text-white text-lg rounded-lg 
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
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    ></path>
                  </svg>
                  Login
                </span>
              </button>
            </form>
            {error && (
              <p className="text-red-500 mt-6 font-bold ">
                {error.match(/\(([^)]+)\)/)?.[1]}
              </p>
            )}

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={googleLoginHandler}
                  className=" cursor-pointer  relative w-full bg-gray-800 py-3 px-4 rounded-lg border border-gray-700 
                            flex items-center justify-center text-white 
                            hover:bg-gray-700 transition-all duration-300
                            hover:shadow-lg hover:shadow-red-500/20 transform hover:scale-105"
                >
                  <span className="absolute inset-0 rounded-lg  opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Login with Google
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Don't have an account?
                <NavLink
                  to="/register"
                  className="ml-1 font-medium text-red-400 hover:text-red-300 transition-colors duration-300"
                >
                  Sign up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
