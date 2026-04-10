import React from 'react';

const HomePage = () => {
    return (
      <div>
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto ">
          <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-20">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Book to freshen up <br /> your bookself</h1>
              <button className="btn btn-success mt-8 "> View the List </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomePage;