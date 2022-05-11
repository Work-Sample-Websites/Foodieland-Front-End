import React, { useState } from "react";
import PanelLayout from "../../../layout/panelLayout";
import ContactHeader from "./components/contactHeader";
import ContactTitle from "./components/contactTitle";
import ContactItem from "./components/contactItem";
import contacts from "./components/data";
import { icons } from "../../../../utils/icons";

const Contacts = () => {
  const [FormData, setFormData] = useState(contacts);
  const [currentPage, setCurrentPage] = useState(1);
  const [contactPerPage] = useState(4);
  const paginationNumbers = Math.ceil(FormData.length / contactPerPage);
  const indexOfLastContact = currentPage * contactPerPage;
  const indexOfFirstContact = indexOfLastContact - contactPerPage;
  const slicedData = FormData.slice(indexOfFirstContact, indexOfLastContact);

  const handlePrev = (setCurrentPage, currentPage) => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = (setCurrentPage, currentPage, paginationNumbers) => {
    if (currentPage < paginationNumbers) setCurrentPage(currentPage + 1);
    
  };

  return (
    <PanelLayout>
      {/* =============== Pagination ==============*/}
      <div className="select-none pt-4 pr-4">
        <div className="flex flex-row-reverse items-center">
          <span
            onClick={() => {
              handleNext(setCurrentPage, currentPage, paginationNumbers);
            }}
            className="bg-gray-300 cursor-pointer text-darkPurple rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]"
          >
            {icons.arrowRight()}
          </span>
          <div className="mx-[5px]">
            <span>page </span>
            <input
              className="w-[30px] h-[30px] rounded-md border-[1px] border-gray-400 text-center"
              type="text"
              value={currentPage}
              onChange={(e) => {
                setCurrentPage(e.target.value);
              }}
            ></input>
            <span>{` from ${paginationNumbers}`}</span>
          </div>
          <span
            onClick={() => {
              handlePrev(setCurrentPage, currentPage, paginationNumbers);
            }}
            className="bg-gray-300 text-darkPurple cursor-pointer rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]"
          >
            {icons.arrowLeft()}
          </span>
        </div>
      </div>

      {/* =============== Pagination ==============*/}

      <ContactHeader />
      <section className="p-4 font-inter">
        <ContactTitle />
        {slicedData.map(({ id, email, subject, role, message }) => (
          <ContactItem
            key={id}
            email={email}
            role={role}
            message={message}
            subject={subject}
          />
        ))}
      </section>
    </PanelLayout>
  );
};

export default Contacts;
