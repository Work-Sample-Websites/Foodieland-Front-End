import React from "react";
import Carousel from "./components/BasicComponents/Carousel/Carousel";
import Recipe from "./components/BasicComponents/recipe";
import Cooker from "./components/BasicComponents/cooker";
import MoreRecipe from "./components/BasicComponents/moreRecipe"

function App() {
  return (
    <div>
      <Carousel />
      <Recipe />
      <Cooker />
      <MoreRecipe />
    </div>
  );
}

export default App;
