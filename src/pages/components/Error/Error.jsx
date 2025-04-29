import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="text-center text-white px-6 py-8 rounded-lg shadow-lg bg-white/10 backdrop-blur-lg max-w-md">
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6 text-lg">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-indigo-600 font-bold py-2 px-6 rounded-full shadow-md hover:bg-indigo-100 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
