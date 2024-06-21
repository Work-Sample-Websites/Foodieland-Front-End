import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { fetchRecipes } from '../../features/recipe/recipeSlice';
import { chefsData } from '../../services/utils/data';
import Spinner from '../login/components/spinner';
import UploadMedia from './uploadMedia';

function NewRecipeForm() {
  const { recipes } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadPoster, setUploadPoster] = useState('');
  const [uploadVideo, setUploadVideo] = useState('');
  const [cookTime, setCookTime] = useState(0);
  const [prepTime, setPrepTime] = useState(0);
  const [selectedChef, setSelectedChef] = useState('Marcellus H. Waddell');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();

    setIsLoading(true);
    const [selectedChefData] = chefsData.filter(
      (item) => item.name === selectedChef,
    );

    const recipe = {
      id: uuidv4(),
      title,
      description,
      img: uploadPoster,
      video: uploadVideo,
      cook_time: cookTime,
      prep_time: prepTime,
      chef: selectedChef,
      banner: '',
      chefImg: selectedChefData.imageUrl,
      category: selectedCategory,
      uploadDate: new Date().toISOString(),
      nutrition: {
        calories: '219 kcal',
        total_fat: '10.7 g',
        protein: '7.9 g',
        carbohydrate: '22.3 g',
        cholesterol: '37.4 mg',
      },
      liked: 0,
      comments: [],
    };

    const newRecipes = [...recipes];
    newRecipes.push(recipe);
    try {
      const { data } = await axios.put(
        'http://localhost:3001/recipes.json',
        JSON.stringify(newRecipes),
      );
      setIsLoading(false);

      dispatch(fetchRecipes(data));
      navigate('/', { replace: true });
    } catch (error) {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="title" className="pb-2 pl-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            className={` md:w-[60%] lg:w-[40%] border border-gray-500  rounded-2xl py-2 px-6 `}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="" className="pb-2 pl-2">
            Description
          </label>
          <textarea
            className="p-4 border border-gray-500  rounded-2xl h-32"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <UploadMedia
          setUploadVideo={setUploadVideo}
          setUploadPoster={setUploadPoster}
        />
        <div className="flex justify-between flex-wrap my-3">
          <div className="flex flex-col mt-4 basis-full md:basis-[30%]">
            <label htmlFor="" className="pb-2 pl-2">
              cook time (m)
            </label>
            <input
              type="number"
              defaultValue={0}
              min={0}
              className="border border-gray-500  rounded-2xl py-2 px-6"
              onChange={(e) => setCookTime(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-4 basis-full md:basis-[30%]">
            <label htmlFor="" className="pb-2 pl-2">
              prep time (m)
            </label>
            <input
              type="number"
              defaultValue={0}
              min={0}
              className=" border border-gray-500  rounded-2xl py-2 px-6"
              onChange={(e) => setPrepTime(e.target.value)}
            />{' '}
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col mt-4 basis-full md:basis-[40%]">
            <label htmlFor="" className="pb-2 pl-2">
              chef
            </label>
            <select
              id="chef"
              name="chef"
              className="border border-gray-500  rounded-2xl py-2 px-6  "
              onChange={(e) => setSelectedChef(e.target.value)}
            >
              <option value="Marcellus H. Waddell">Marcellus H. Waddell</option>
              <option value="Ronald W. Robison">Ronald W. Robison</option>
              <option value="Kenneth B. Deshazo">Kenneth B. Deshazo</option>
              <option value="Robert H. Houston">Robert H. Houston</option>
            </select>
          </div>
          <div className="flex flex-col mt-4 basis-full md:basis-[40%]">
            <label htmlFor="" className="pb-2 pl-2">
              category
            </label>
            <select
              id="category"
              name="category"
              className="border border-gray-500  rounded-2xl py-2 px-6"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="breakfast">breakfast</option>
              <option value="vegan">vegan</option>
              <option value="meat">meat</option>
              <option value="dessert">dessert</option>
              <option value="lunch">lunch</option>
              <option value="chocolate">chocolate</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-mainBlue hover:bg-darkerBlue text-white py-2 basis-full md:basis-[14%] rounded-xl cursor-pointer mr-2 w-full sm:w-auto"
          >
            {isLoading ? <Spinner /> : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRecipeForm;
