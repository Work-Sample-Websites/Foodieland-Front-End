import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {
  AboutUs,
  Blog,
  BlogPost,
  Contact,
  Home,
  NotFound,
  Recipe,
  Recipes,
} from "./routes/user";

import {
  Contacts,
  Login,
  NewPost,
  Notice,
  Posts,
  Register,
  Settings,
  Statistic,
} from "./routes/panel";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "./features/article/articleSlice";
import { checkIsLogged } from "./features/auth/auth-actions";
import { fetchRecipes } from "./features/recipe/recipeSlice";
import { ForgotPassword, LoginBox, ResetPassword } from "./routes/components";
import PrivateRoute from "./routes/privateRoute";

function App() {
  const { idToken, expirationTime, isLogged } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkIsLogged(idToken, expirationTime));
  }, [dispatch, idToken, expirationTime]);

  useEffect(() => {
    async function fetchData() {
      try {
        const recipeResponse = await axios.get(
          "http://localhost:3001/recipes.json"
        );
        const articleResponse = await axios.get(
          " "
        );

        dispatch(fetchRecipes(recipeResponse.data));
        dispatch(fetchArticles(articleResponse.data));
      } catch (error) {
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogPost/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="panel/posts/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Posts />
              </PrivateRoute>
            }
          />
          <Route
            path="panel/newPost/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <NewPost />
              </PrivateRoute>
            }
          />
          <Route path="panel/notice" element={<Notice />} />
          <Route
            path="panel/settings/"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Settings />
              </PrivateRoute>
            }
          />

          <Route
            path="panel/statistic"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Statistic />
              </PrivateRoute>
            }
          />
          <Route
            path="panel/contact"
            element={
              <PrivateRoute isLogged={isLogged}>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="panel/login/*" element={<Login />}>
            <Route path="" element={<LoginBox />} />
            <Route path="forget-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="panel/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
