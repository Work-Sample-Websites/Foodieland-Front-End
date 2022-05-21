import OtherRecipeCard from "./otherRecipeCard";

function OtherRecipes({ RecipeData, number, title }) {
  let len = Math.ceil(Math.random() * RecipeData.length);
  if (len < 3) {
    len = 3;
  }

  return (
    <div className="basis-[100%] lg:basis-[33%]">
      <div className="mb-10">
        <h2 className="font-semibold text-3xl md:text-4xl">{title}</h2>
      </div>
      <div>
        {RecipeData.slice(len - number, len).map(({ id, img, title, chef }) => (
          <OtherRecipeCard
            key={id}
            id={id}
            img={img}
            title={title}
            chef={chef}
          />
        ))}
      </div>

      <div className="relative hidden lg:block bg-green-900 mt-20 bg-contain bg-no-repeat">
        <p className="font-lobster text-2xl text-white absolute top-3 xl:top-6 left-[30px] xl:left-[100px]  2xl:left-[120px] w-4/5 xl:w-1/2 text-center">
          Don’t forget to eat healthy food
        </p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/others%2FStar-1.png?alt=media&token=0102d12b-4979-44a8-935e-4a77a4ae9e1f"
          alt="star"
          className="w-full"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/foodieland-3b1ed.appspot.com/o/others%2Ffood-21.png?alt=media&token=34db4470-fd11-4a69-aee7-74db142b94a7"
          alt="chicken"
          className="absolute top-16 xl:top-20 xl:left-8 2xl:top-28 2xl:left-16 z-10"
        />

        <span className="text-gray-400 text-center text-sm absolute bottom-4 left-[75px] xl:left-[140px] 2xl:left-[180px]">
          www.foodieland.com
        </span>
      </div>
    </div>
  );
}

export default OtherRecipes;
