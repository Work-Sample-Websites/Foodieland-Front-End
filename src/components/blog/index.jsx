import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { articleData, recipeData } from '../../services/utils/data';
import OtherRecipes from '../ingredients/components/otherRecipes';
import SubscribeCard from '../subscribeCard';
import BlogCard from './components/blogCard';
import BlogHeader from './components/blogHeader';
import BlogSearchBox from './components/blogSearchBox';
import Pagination from './pagination';

const Blog = () => {
  const { articles } = useSelector((state) => state.articles);
  const [posts, setPosts] = useState(articles);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostPerPage] = useState(6);

  const indexOfLastPost = currentPage * PostPerPage;
  const indexOfFirstPost = indexOfLastPost - PostPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const searchHandler = (event) => {
    let keyword = event.target.value;
    let data = articleData.filter((item) => {
      return item.title.toLowerCase().includes(keyword);
    });
    setPosts(data);
  };

  return (
    <>
      <BlogHeader />
      <BlogSearchBox
        searchHandler={searchHandler}
        placeholder={'search for recipes'}
      />
      <div className="">
        <section className="w-11/12 xl:w-full mx-auto flex flex-wrap lg:flex-nowrap gap-10 font-inter my-10 lg:my-20  ">
          <div className=" basis-[100%] lg:basis-[66%] relative ">
            <div>
              {currentPosts.map(
                ({
                  id,
                  title,
                  description,
                  img,
                  created_date,
                  author,
                  profile,
                }) => (
                  <BlogCard
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    img={img}
                    createdDate={created_date}
                    author={author}
                    profile={profile}
                  />
                ),
              )}
            </div>
            <div className="w-auto">
              <Pagination
                postPerPage={PostPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
          <OtherRecipes
            RecipeData={recipeData}
            number={3}
            title={'Tasty Recipes'}
          />
        </section>
        <SubscribeCard />
      </div>
    </>
  );
};

export default Blog;
