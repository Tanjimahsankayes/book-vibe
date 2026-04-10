import React from "react";
import { Link, useRouteError } from "react-router";


const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/50 text-white px-4">
      <div className="text-center space-y-6">
        <h1 className="text-7xl font-extrabold">Oops!</h1>
        <p className="text-xl font-medium">Something went wrong 😢</p>
        <p className="text-sm opacity-80">
          {error?.statusText || error?.message}
        </p>
        <Link to="/">
          <button className="mt-4 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
