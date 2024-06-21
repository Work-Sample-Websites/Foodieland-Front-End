import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../login/components/button";
import { icons } from "../../services/utils/icons";
import LoginLogo from "../login/components/loginLogo";
import LoginHeader from "../login/components/loginHeader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import Spinner from "../login/components/spinner";

function RegisterBox() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const usernameRegex = /^[a-zA-Z0-9]+$/;
  const usernameIsValid = usernameRegex.test(enteredUsername);

  const emailRegex = /^\S+@\S+\.\S+$/;
  const emailIsValid = emailRegex.test(enteredEmail);

  let passwordError = ["password should contain at least"];
  let passwordIsValid = true;

  if (!/[a-zA-Z0-9]{6,}/.test(enteredPassword)) {
    passwordError.push(" 6 characters");
    passwordIsValid = false;
  }
  if (!/(?=.*[A-Z])/.test(enteredPassword)) {
    passwordError.push(" one uppercase");
    passwordIsValid = false;
  }
  if (!/(?=.*\d)/.test(enteredPassword)) {
    passwordError.push(" one digit");
    passwordIsValid = false;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!usernameIsValid && !emailIsValid && !passwordIsValid) {
      return;
    }
    setIsLoading(true);
    try {
      const user = { email: enteredEmail, password: enteredPassword };
      const { data } = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDoO53wWZ6YAcN8zZ4aQ_dh0LmRj6IDAoc",
        JSON.stringify(user),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let expirationTime = new Date().getTime() + 3600000;

      dispatch(login({ token: data.idToken, expirationTime,enteredPassword }));
      setIsLoading(false);
      navigate("/panel/posts", { replace: true });
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="h-full flex justify-center items-center">
        <div className="flex  bg-white h-full sm:h-auto w-full rounded-md justify-center flex-col z-10 items-center sm:w-[400px] text-center shadow-lg">
          <LoginLogo />
          <LoginHeader
            title={"Adventure starts here"}
            text={"Make your app management easy and fun!"}
          />

          <form className="w-[85%] mx-6 my-3  " onSubmit={submitHandler}>
            <div className="mb-2">
              <input
                className="w-full border-2 rounded-md p-3 outline-none"
                placeholder="username"
                value={enteredUsername}
                onChange={(event) => setEnteredUsername(event.target.value)}
                onBlur={() => setUsernameTouched(true)}
              />
              {!usernameIsValid && usernameTouched && (
                <p
                  className={`pl-1 text-left text-red-500 text-sm font-medium `}
                >
                  Please enter a valid username
                </p>
              )}
            </div>
            <div className="mb-2">
              <input
                className="w-full border-2 rounded-md p-3 outline-none"
                placeholder="email"
                value={enteredEmail}
                onChange={(event) => setEnteredEmail(event.target.value)}
                onBlur={() => setEmailTouched(true)}
              />
              {!emailIsValid && emailTouched && (
                <p
                  className={`pl-1 text-left text-red-500 text-sm font-medium `}
                >
                  Please enter a valid email
                </p>
              )}
            </div>
            <div className="mb-2">
              <input
                className="w-full border-2 rounded-md p-3 outline-none"
                placeholder="password"
                value={enteredPassword}
                onChange={(event) => setEnteredPassword(event.target.value)}
                onBlur={() => setPasswordTouched(true)}
              />
              {!passwordIsValid && passwordTouched && (
                <p
                  className={`pl-1 text-left text-red-500 text-sm font-medium `}
                >
                  {passwordError.join(" ")}
                </p>
              )}
            </div>

            <div className="flex justify-between mb-4 w-full">
              <label className="cursor-pointer select-none">
                <input className="mx-2" type="checkbox" />
                <span className="text-slate-600">
                  i Agree to privacy policy & terms
                </span>
              </label>
            </div>
            <Button type="submit">{isLoading ? <Spinner /> : "sign up"}</Button>
          </form>
          <div className="text-center my-2  w-[85%] sm:w-full">
            <div className="w-full flex justify-between sm:justify-evenly">
              <span className="text-gray  text-gray-500">
                Already have an account?
              </span>
              <span className="text-mainBlue cursor-pointer">
                <Link to="/panel/login">Sign in instead</Link>
              </span>
            </div>
            <div className="my-4 mx-6 relative mb-4">
              <hr />
              <span className="text-gray-600 absolute left-[45%] top-[-14px] w-10 text-left pl-3 bg-white">
                or
              </span>
            </div>
            <div className="flex justify-center text-2xl mb-2 w-full">
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

export default RegisterBox;
