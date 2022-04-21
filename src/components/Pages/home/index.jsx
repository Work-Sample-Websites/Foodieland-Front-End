import React from "react";
import Carousel from "../../BasicComponents/Carousel/Carousel";
import Recipe from "../../BasicComponents/recipe";
import Cooker from "../../BasicComponents/cooker";
import MoreRecipe from "../../BasicComponents/moreRecipe";
import SubscribeCard from "../../BasicComponents/subscribeCard"
import Categories from "../../BasicComponents/Categories/Categories";
import FoodieLandInstagram from "../../BasicComponents/Instagram/FoodieLandInstagram";

function Home() {
  return (
    <>
      <Carousel />
      <Categories />
      <Recipe />
      <Cooker />
      <MoreRecipe />
      <FoodieLandInstagram />
      <SubscribeCard />
    </>
  );
}

export default Home;