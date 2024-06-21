import React from 'react';
import { directionsData } from '../../services/utils/data';
import DirectionCard from './directionCard';
import './directions.css';
function Directions() {
  return (
    <section className="my-16 md:my-24 flex w-11/12 mx-auto xl:w-full font-inter">
      <div className="basis-[100%] lg:basis-[66%]">
        <div className="my-12">
          <h2 className="font-semibold text-3xl md:text-4xl">Directions</h2>
        </div>
        <div>
          {directionsData.map(
            ({ id, title, description, imageUrl, imageDesc }, index) => (
              <DirectionCard
                key={id}
                title={title}
                description={description}
                number={index}
                imageUrl={imageUrl}
                imageDesc={imageDesc}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Directions;
