import React from 'react';
import { chefsData } from '../../services/utils/data';
import ChefCard from './components/chefCard';

function Chefs() {
  return (
    <section>
      <div className="font-inter my-28">
        <div className="my-16">
          <h2 className="font-semibold text-4xl sm:text-5xl">
            Our Professional Chefs
          </h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between gap-16  lg:gap-20">
          {chefsData.map(({ id, name, role, imageUrl }) => (
            <ChefCard key={id} name={name} role={role} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Chefs;
