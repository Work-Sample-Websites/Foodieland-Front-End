import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetCategories } from '../../features/recipe/recipeSlice';
import { categoriesData } from '../../services/utils/data';
import BlogSearchBox from '../blog/components/blogSearchBox';
import Pagination from '../blog/pagination';
import MoreRecipeCard from '../moreRecipe/components/moreRecipeCard';
import CategoryFilter from './categoryFilter';
import './recipe-list.css';

function RecipeList() {
  const recipesList = useSelector((state) => state.recipes.recipes);
  const categories = useSelector((state) => state.recipes.categories);

  const [recipes, setRecipes] = useState(recipesList);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(8);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categoryChecked, setCategoryChecked] = useState(categories);

  const location = useLocation();
  const dispatch = useDispatch();

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const searchHandler = (event) => {
    let keyword = event.target.value;
    let data = recipesList.filter((item) => {
      return item.title.toLowerCase().includes(keyword);
    });
    setRecipes(data);
  };

  const checkHandler = (name) => {
    let categories = [...selectedCategories];
    let indexOfCategory = categories.indexOf(name);

    if (indexOfCategory > -1) {
      categories.splice(indexOfCategory, 1);
    } else {
      categories.push(name);
    }

    let filteredRecipes = [];
    for (let cat of categories) {
      filteredRecipes.push(
        ...recipesList.filter((recipe) => recipe.category === cat),
      );
    }

    if (filteredRecipes.length === 0) {
      filteredRecipes = [...recipesList];
    }
    setCategoryChecked((prevCat) => ({ ...prevCat, [name]: !prevCat[name] }));
    setSelectedCategories(categories);
    setRecipes(filteredRecipes);
  };

  useEffect(() => {
    const update = () => {
      const params = new URLSearchParams(location.search);
      const categoryId = params.get('category');

      if (categoryId) {
        dispatch(resetCategories());
        checkHandler(categoryId);
      }
    };
    update();
  }, [location]);

  return (
    <div className="mt-16 mb-32 font-inter">
      <div className="mb-14">
        <h2 className="font-semibold text-center text-4xl lg:text-5xl mb-[24px]">
          Simple and tasty recipes
        </h2>
      </div>
      <BlogSearchBox
        searchHandler={searchHandler}
        placeholder={'search for recipes'}
      />
      <div className="flex gap-8 flex-col lg:flex-row">
        <div className="basis-[20%]">
          <div className="flex flex-col items-center lg:items-start justify-between cursor-pointer ">
            <h2 className="font-semibold text-2xl md:text-4xl mb-4">
              Categories
            </h2>
            <ul className="flex flex-row lg:flex-col w-3/5 md:w-full justify-center items-start gap-4 lg:gap-0 flex-wrap  ">
              {categoriesData.map(({ id, name }) => (
                <CategoryFilter
                  key={id}
                  name={name}
                  id={id}
                  checkHandler={checkHandler}
                  checked={categoryChecked[name]}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="basis-[80%] flex gap-6 justify-center w-[70%] mx-auto xl:justify-start items-center md:w-full flex-wrap min-h-[600px]">
          {currentRecipes
            .slice(0, 12)
            .map(({ img, title, category, id, cook_time }) => (
              <MoreRecipeCard
                key={id}
                id={id}
                img={img}
                title={title}
                category={category}
                cookTime={cook_time}
              />
            ))}
        </div>
      </div>
      <div className="w-auto">
        {recipes.length / recipesPerPage > 1 && (
          <Pagination
            postPerPage={recipesPerPage}
            totalPosts={recipes.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

export default RecipeList;
