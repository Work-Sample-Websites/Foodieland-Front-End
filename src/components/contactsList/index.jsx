import { useState } from 'react';
import { contacts } from '../../services/utils/data';
import { icons } from '../../services/utils/icons';
import ContactHeader from './components/contactHeader';
import ContactItem from './components/contactItem';
import ContactTitle from './components/contactTitle';
import './contacts-list.css';

function ContactsList() {
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
    <>
      {/* =============== Pagination ==============*/}
      <div className="select-none p-4 lg:pt-4 lg:pr-4">
        <div className="flex flex-row-reverse items-center">
          <span
            onClick={() => {
              handleNext(setCurrentPage, currentPage, paginationNumbers);
            }}
            className="contacts-arrow bg-lameBlue hover:bg-darkBlue transition-all cursor-pointer text-darkPurple rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]"
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
            className="contacts-arrow bg-lameBlue hover:bg-darkBlue transition-all text-darkPurple cursor-pointer rounded-md border-[1px] border-gray-400 w-[30px] h-[30px] flex justify-center items-center p-[5px]"
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
    </>
  );
}

export default ContactsList;
