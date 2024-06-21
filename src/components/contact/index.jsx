import { useState } from "react";

import Input from "./ContactInput/Input";
import Select from "./ContactInput/Select";
import TextArea from "./ContactInput/TextArea";

const options = [
  { id: "Advertising", name: "Advertising" },
  { id: "Commercials", name: "Commercial" },
  { id: "Support", name: "Support" },
];

const Contact = (props) => {
  const [inputValue, setInputValue] = useState({});
  const [selectValue, setSelectValue] = useState({});
  const [submitError, setSubmitError] = useState(false);

  const inputChangeHandler = (data) => {
    setInputValue((prevState) => {
      return {
        ...prevState,
        [data.id]: {
          value: data.value,
          isValid: data.isValid,
        },
      };
    });
  };

  const selectChangeHandler = (data) => {
    setSelectValue((prevState) => {
      return {
        ...prevState,

        [data.id]: {
          value: data.value,
        },
      };
    });
  };

  const formIsValid = () => {
    let isValid = true;
    for (let key in inputValue) {
      if (!inputValue[key].isValid) {
        isValid = false;
      }
    }
    return isValid;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid()) {
      setSubmitError(true);
      return;
    }
  };

  return (
    <>
      <div className="flex justify-center lg:grid lg:grid-cols-3 w-full my-20">
        <h2 className="text-6xl font-semibold tracking-tight col-start-2">
          Contact us
        </h2>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 mb-44">
        <img
          src="./images/cooker/Cook-contact.png"
          alt="Cook"
          className="mb-16 justify-self-center self-center lg:h-5/6 ml-3"
        />
        <form
          onSubmit={formSubmitHandler}
          className=" flex flex-col px-2  lg:grid lg:grid-cols-2 lg:grid-rows-4 gap-x-10 lg:col-span-2 lg:px-5  "
        >
          <Input
            onSubmit={submitError}
            onChange={inputChangeHandler}
            id="name"
            label="NAME"
            type="text"
            placeholder="Enter your name..."
          />
          <Input
            onSubmit={submitError}
            onChange={inputChangeHandler}
            id="email"
            label="EMAIL ADDRESS"
            type="text"
            placeholder="Enter your email..."
          />
          <Input
            onSubmit={submitError}
            onChange={inputChangeHandler}
            id="subject"
            label="SUBJECT"
            type="text"
            placeholder="Enter subject..."
          />

          <Select
            onChange={selectChangeHandler}
            id="category"
            label="ENQUIRY TYPE"
            options={options}
          />
          <TextArea
            onSubmit={submitError}
            onChange={inputChangeHandler}
            id="message"
            label="MESSAGES"
            placeholder="Enter your Messages..."
          />
          <button className="flex justify-center items-center w-36 md:w-[180px] h-12 md:h-[60px] bg-black text-white rounded-2xl font-semibold hover:bg-gray-900 transition-all">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
