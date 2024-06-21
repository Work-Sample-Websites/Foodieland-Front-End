function Cooker() {
  return (
    <div className="flex lg:justify-between lg:flex-row 2sm:flex-col justify-center md:items-center">
      <div className="flex flex-col mb-24 md:mb-40 justify-center items-center lg:items-start">
        <h1 className="font-inter font-semibold text-4xl lg:text-4xl xl:text-5xl w-auto lg:w-[450px] xl:w-[526px]  tracking-tighter mb-[24px] text-center lg:text-left">
          Everyone can be a chef in their own kitchen
        </h1>
        <p className="font-inter font-normal text-secondary text-sm md:text-base w-auto lg:w-[400px] xl:w-[500px] mb-[72px] text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </p>
        <button className="flex justify-center items-center w-36 md:w-[180px] h-12 md:h-[60px] bg-black text-white rounded-2xl hover:scale-105  hover:font-semibold transition-all">
          Learn More
        </button>
      </div>
      <div className="w-auto md:w-[651px] h-[600px] lg:h-[500px] xl:h-[600px] bg-gradient-to-b from-white to-blue-50 relative rounded-3xl">
        <img
          className="absolute object-cover bottom-0  h-[597px] lg:h-[500px] xl:h-[600px] W-[660px]"
          src="\./images/cooker/image-220.png"
          alt="cooker"
        />
        <img
          className="absolute w-10 sm:w-12 top-80 md:right-[626px] lg:right-[520px] xl:right-[626px]"
          src="\./images/cooker/image-27.png"
          alt="tomato"
        />
        <img
          className="absolute w-16 sm:w-20 top-[70px] right-[36px]"
          src="\./images/cooker/image-20.png"
          alt="lettuce"
        />
        <img
          className="absolute w-20 sm:w-24 left-10 md:right-[510px]"
          src="\./images/cooker/image-21.png"
          alt="meat"
        />
        <img
          className="absolute w-11 md:w-16 right-28 sm:right-36 md:right-[180px] lg:right-[120px] xl:right-[180px]"
          src="\./images/cooker/image-28.png"
          alt="onion"
        />
      </div>
    </div>
  );
}

export default Cooker;
