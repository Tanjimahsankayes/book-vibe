import React from 'react';
import BannerImg from '../../assets/Banner-book.png'

const HomePage = () => {
    return (
      <div>
        <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto ">
          <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between px-20">
            <img className="w-70 h-70" src={BannerImg} />
            <div>
              <h1 className=" text-3xl text-center md:text-left md:text-5xl font-bold">
                Book to freshen up <br /> your bookself
              </h1>
              <div className='flex justify-center md:justify-start ' >
                <button className="btn btn-success mt-8 text-white ">
                  View the List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomePage;