import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cup from '/cup.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'test@example.com' && password === 'password123') {
      navigate('/dashboard/overview');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  const handleGuestLogin = () => {
    navigate('/dashboard/overview');
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="hidden md:flex w-1/2 justify-center items-center bg-emerald-100 pt-20">
        <img
          src={cup}
          alt="Eco Cup"
          className="w-3/4 animate-fadeIn"
        />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <img
              src={cup} 
              alt="Eco Cup"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h2 className="text-2xl font-bold">Sign In</h2>
          </div>

          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm">
                <a href="#" className="text-emerald-600 hover:text-emerald-800">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <a href="/signup" className="text-emerald-600 hover:text-emerald-800">Sign up</a>
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={handleGuestLogin}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
            >
              Login as Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
