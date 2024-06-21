import React from 'react';
import { useSelector } from 'react-redux';
import { ingredientsData } from '../../services/utils/data';
import IngredientCard from './components/ingredientCard';
import OtherRecipes from './components/otherRecipes';
import './ingredients.css';

function Ingredients() {
  const recipes = useSelector((state) => state.recipes.recipes);
  return (
    <section>
      <div className="w-11/12 xl:w-full mx-auto flex flex-wrap lg:flex-nowrap gap-10 font-inter my-10 lg:my-20">
        <div className="basis-[100%] lg:basis-[66%]">
          <div className="mb-14">
            <h2 className="font-semibold text-3xl md:text-4xl">Ingredients</h2>
          </div>
          <div className=" mb-14">
            <h2 className="font-semibold mb-4 text-xl md:text-2xl">
              For main dish
            </h2>
            {ingredientsData.map(({ id, text }) => (
              <IngredientCard key={id} id={id} text={text} />
            ))}
          </div>
          <div className="mb-14">
            <h2 className="font-semibold mb-4 text-xl md:text-2xl">
              For the sauce
            </h2>
            {ingredientsData.map(({ id, text }) => (
              <IngredientCard key={id} id={id} text={text} />
            ))}
          </div>
        </div>
        <OtherRecipes RecipeData={recipes} number={3} title={'Other Recipes'} />
      </div>
    </section>
  );
}

export default Ingredients;
