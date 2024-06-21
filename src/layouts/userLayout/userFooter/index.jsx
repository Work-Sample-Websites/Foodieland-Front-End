import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../services/utils/icons";

const UserFooter = () => {
  const manu = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Recipes",
      to: "/recipes",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Contact",
      to: "/contact",
    },
    {
      name: "About Us",
      to: "/aboutUs",
    },
  ];

  return (
    <div className="md:mx-[80px]">
      <div className="flex lg:flex-row flex-col lg:justify-between mb-[30px] sm:mb-[45px] mt-[100px] lg:mt-[171px]  ">
        <div className="flex flex-col lg:items-start  items-center  ">
          <Link
            to="/"
            className="flex flex-row items-center justify-center font-lobster font-normal text-[24px] sm:mb-[10px]  cursor-pointer"
          >
            Foodieland.
          </Link>
          <p className="flex justify-start text-center text-sm md:text-base lg:text-left mb-5 md:mb-[40px]">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
          </p>
        </div>
        <ul className="flex flex-row justify-center items-center font-medium font-inter sm:right-[120px]">
          {manu.map(({ name, to }, index) => {
            return (
              <Link
                key={index}
                to={`${to}`}
                className="flex text-center text-xs sm:text-sm md:text-base lg:w-[80px] lg:ml-[10px] lg:py-[0px]  ml-[0px]  py-[20px]   w-[250px] justify-center hover:text-blue-500 transition-all "
              >
                {name}{" "}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex md:flex-row flex-col md:mb-[10px] h-[150px] justify-around  items-center border-t-[1px] border-gray-300">
        <p className="flex items-center justify-center font-eudoxus font-normal lg:mb-0 sm:mx-auto text-[0.8rem] sm:text-lg">
          © 2020 Flowbase. Powered by {"  "}
          <span className="text-red-300">Foodieland</span>{"  "}
        </p>
        <div className="flex items-center justify-center md:flex-row text-[19.36px] sm:mb-[0px] mb-[40px]">
          <span className="flex justify-center header-icon cursor-pointer">
            {icons.instagram()}
          </span>
          <span className="flex justify-center ml-[40px] header-icon cursor-pointer">
            {icons.twitter()}
          </span>
          <span className="flex justify-center ml-[40px] header-icon cursor-pointer">
            {icons.facebook()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserFooter;
