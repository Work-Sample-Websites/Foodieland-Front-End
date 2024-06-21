import React from 'react';

const SubscribeCard = () => {
  return (
    <div className=" w-full  mx-auto overflow-hidden rounded-[60px] text-center bg-[#E7F9FD] my-10">
      <div className="text-black flex flex-col items-center">
        <div className="w-11/12 sm:w-[589px] sm:tracking-[-0.04em] mb-3 ">
          <h2 className="font-medium text-3xl sm:text-4xl md:text-5xl mt-5 sm:mt-10 lg:mt-20 mb-3 md:mb-6 sm:leading-[58px]">
            Deliciousness to your inbox
          </h2>
        </div>
        <div className="w-11/12 md:w-[620px]  text-center font-normal text-secondary text-sm md:text-base">
          <p className="sm:leading-[28px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
        </div>
      </div>
      <div className="  flex justify-between items-center relative">
        <form className="flex justify-center items-center w-11/12 sm:w-[480px]  sm:h-20 relative my-10 sm:mt-16 sm:mb-20 mx-auto rounded-3xl	bg-white">
          <input
            type="email"
            name="email"
            placeholder="Your Email Address ..."
            className="placeholder:text-sm md:placeholder:text-base w-full h-full pl-4 sm:pl-8 py-4 sm:py-8 rounded-2xl text-[17px] tracking-[-0.02em] leading-[17px] text-[rgba(0,0,0,0.4)]"
          />
          <button className="w-28 sm:w-40 h-[45px] sm:h-[60px] rounded-2xl bg-black text-white absolute top-auto right-0 my-1 sm:my-2.5 mr-2.5 hover:scale-105 hover:font-semibold transition-all">
            {' '}
            subscribe
          </button>
        </form>
        <div className="absolute bottom-0 -left-16 lg:left-0 ">
          <img
            src="./images/kisspng-salad-salad-fresh-food.png"
            alt="salad"
            className="hidden md:block md:w-3/5 lg:w-4/5 xl:w-full"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            src="./images/Photo-plate.png"
            alt="plate"
            className="hidden md:block  ml-auto md:w-2/3 lg:w-4/5 xl:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeCard;
