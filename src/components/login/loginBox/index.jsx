import React, { useState } from "react";
import Button from "../components/button";
import { icons } from "../../../services/utils/icons";
import { Link, useNavigate } from "react-router-dom";
import LoginLogo from "../components/loginLogo";
import LoginHeader from "../components/loginHeader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, setUserPassword } from "../../../features/auth/authSlice";
import Spinner from "../components/spinner";

function LoginBox() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [showError, setShowError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const user = { email: enteredEmail, password: enteredPassword };
      const { data } = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDoO53wWZ6YAcN8zZ4aQ_dh0LmRj6IDAoc",
        JSON.stringify(user)
      );

      let expirationTime = new Date().getTime() + 3600000;

      dispatch(
        login({
          token: data.idToken,
          expirationTime,
          userPhot: data.profilePicture,
        })
      );
      dispatch(setUserPassword({ userPassword: enteredPassword }));
      setIsLoading(false);
      navigate("/panel/posts", { replace: true });
    } catch (error) {
      setIsLoading(false);
      setShowError(true);
    }
  };

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex sm:mx-4 bg-white h-full sm:h-auto w-full justify-center rounded-md flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <LoginLogo />
          <LoginHeader
            title={"Welcome To Foodieland!"}
            text={" Please sign-in to your account and start the adventure"}
          />
          <form className="w-[85%] mx-6 my-4" onSubmit={submitHandler}>
            <div className="mb-3">
              <input
                className="w-full border-2 rounded-md p-3 outline-none"
                placeholder="email"
                value={enteredEmail}
                onChange={(event) => setEnteredEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="w-full border-2 rounded-md p-3 outline-none"
                placeholder="password"
                value={enteredPassword}
                onChange={(event) => setEnteredPassword(event.target.value)}
              />
              {showError && (
                <p className="pl-1 text-left text-red-500 text-sm font-medium ">
                  your email or password is not correct
                </p>
              )}
            </div>
            <div className="flex justify-between w-full mb-1">
              <label className="cursor-pointer select-none">
                <input className="mx-2" type="checkbox" />
                <span className="text-slate-600">Remember Me</span>
              </label>
              <Link to="/panel/login/forget-password">
                <span className="text-mainBlue cursor-pointer">
                  Forgot Password?
                </span>
              </Link>
            </div>
            <Button type="submit">{isLoading ? <Spinner /> : "login"}</Button>
          </form>
          <div className="text-center my-2 w-[85%] sm:w-full">
            <div className="w-full flex justify-between sm:justify-evenly">
              <span className="text-gray text-gray-500">
                New on our platform?
              </span>
              <span className="text-mainBlue cursor-pointer">
                <Link to="/panel/register">Create an account</Link>
              </span>
            </div>
            <div className="my-4 mx-6 relative mb-6">
              <hr />
              <span className="text-gray-600 absolute left-[45%] top-[-14px] w-10 text-left pl-3 bg-white">
                or
              </span>
            </div>
            <div className="flex justify-center text-2xl mb-4 w-full">
              <span className="mx-4 cursor-pointer">
                {icons.facebookBlue()}
              </span>
              <span className="mx-4 cursor-pointer">{icons.twitterBlue()}</span>
              <span className="mx-4 cursor-pointer">{icons.github()}</span>
              <span className="mx-4 cursor-pointer">{icons.google()}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginBox;
