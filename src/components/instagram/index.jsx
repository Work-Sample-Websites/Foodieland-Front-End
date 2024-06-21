import React from 'react';
import { foodielandInstagramData } from '../../services/utils/data';
import { icons } from '../../services/utils/icons';
import InstagramCard from './instagramCard';

function FoodieLandInstagram() {
  const instagramIcon = icons.whiteInstagram();

  return (
    <section className="my-12 md:my-20 font-inter">
      <div className="bg-gradient-blueSky">
        <div className="text-center">
          <div className="mb-5 md:mb-10">
            <h2 className="font-semibold text-3xl md:text-5xl">
              Check out @foodieland on Instagram
            </h2>
          </div>
          <div>
            <p className="w-2/3 text-secondary mx-auto text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 xl:gap-8 mt-10 md:mt-16 justify-center w-11/12 lg:w-11/12 mx-auto">
          {foodielandInstagramData.map(({ id, imageUrl, caption, date }) => (
            <InstagramCard
              key={id}
              imageUrl={imageUrl}
              caption={caption}
              date={date}
            />
          ))}
        </div>
        <div className="mt-16 pb-20">
          <button className="text-white bg-black text-xs md:text-base py-4 items-center md:py-5 px-4 md:px-6 mx-auto rounded-2xl flex hover:scale-105 hover:font-semibold transition-all">
            <span>Visit Our Instagram</span>
            <span className="ml-4">{instagramIcon}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default FoodieLandInstagram;
