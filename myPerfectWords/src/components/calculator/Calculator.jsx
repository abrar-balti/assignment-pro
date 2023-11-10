import React, { useState, useEffect } from "react";

import "./Calculator.css";

const Calculator = () => {
  const [page, setPage] = useState(1);
  const [words, setWords] = useState(300);
  const [academicLevel, setAcademicLevel] = useState(12);
  const [deadline, setDeadline] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [documentType, setDocumentType] = useState("");
  
 

  // handle document type
  const handleDocumentType = (e) => {
    setDocumentType(e.target.value);
  };

  // handle academic level
  const handleAcademicLevel = (e) => {
    setAcademicLevel(e.target.value);
  };

  // handle deadline
  const handleDeadline = (e) => {
    setDeadline(e.target.value);
  };

  // Increase handler
  const handlePageNumberIncrease = () => {
    setPage(page + 1);
    setWords(words + 300);
  };

  // Decrease handler
  const handlePageNumberDecrease = () => {
    if (page <= 1) {
      return;
    }
    setPage(page - 1);
    setWords(words - 300);
  };

  // handle calculate price
  const handleCalculatePrice = () => {
    setTotalPrice(page * academicLevel);
  };
   useEffect(() =>{
    handleCalculatePrice();
   }, [page, academicLevel])

  return (
    <>
      <div className=" right-[300px] calculator-wrapper md:w-[330px] py-3 rounded-md mr-6 md:mx-0">
        <div className="main-calculator p-2 bg-white  shadow-2xl border rounded-xl flex flex-col gap-1 text-sm mt-[-25px] mr-[-10px] px-6 py-6">
          <h3 className="bg-[#1176CA] text-white rounded-md text-center py-1 mb-4 font-semibold  ">
            50% Off On All Orders 🔥
            <br />
            (Limited Time Only)
          </h3>
          <label htmlFor="documentType" className="">
            Document Type
          </label>
          <select
            className="block w-full border border-gray-300 p-2 rounded-md bg-[#F5F9FF] px-3 py-2 text-[#1176CA] outline-none hover:border-[#1176CA] focus:border-[#1176CA]"
            onChange={handleDocumentType}
            value={documentType}
          >
            <option value="">What we can do for you?</option>
            <option value="assignment">Assignment</option>
            <option value="essay">Essay</option>
          </select>
          <label htmlFor="academic">Academic Level</label>
          <select
            className="block w-full border border-gray-300 p-2 rounded-md bg-[#F5F9FF] px-3 py-2 text-[#1176CA] outline-none hover:border-[#1176CA] focus:border-[#1176CA]"
            onChange={handleAcademicLevel}
            value={academicLevel}
          >
            <option value="12">High School</option>
            <option value="14">College - Undergraduate</option>
            <option value="16">Masters</option>
            <option value="18">Doctoral</option>
          </select>
          <label htmlFor="deadline">Deadline</label>
          <div className="deadline flex flex-col border rounded-md bg-[#F5F9FF] px-3 py-2 text-[#1176CA] outline-none hover:border-[#1176CA] focus:border-[#1176CA] hover:cursor-pointer">
            <input
              type="date"
              name=""
              id=""
              className="bg-[#F5F9FF] outline-none "
              onChange={handleDeadline}
              value={deadline}
            />
          </div>
          <p>No of pages</p>
          <div className="noOfPages flex justify-around items-center border p-2">
            <div
              className="minus bg-[#E1EDFF] w-6 h-6 rounded-full font-bold text-center hover:cursor-pointer hover:bg-[#1176CA] hover:text-white"
              onClick={handlePageNumberDecrease}
            >
              -
            </div>
            <div className="pages text-[#1176CA]">
              {page}Page ~ {words} words
            </div>
            <div
              className="plus bg-[#E1EDFF] w-6 h-6 rounded-full font-bold text-center hover:cursor-pointer hover:bg-[#1176CA] hover:text-white "
              onClick={handlePageNumberIncrease}
            >
              +
            </div>
          </div>
          <div className="total-price flex justify-between mt-2 items-center">
            <h2 className="font-bold text-[#1176CA] ">Total Price</h2>
            <h1 className="text-black font-extrabold text-3xl">
              ${totalPrice}
            </h1>
          </div>
          <div className="btns flex justify-center my-3">
            <button
              className=" w-full text-white font-semibold border-blue-600 py-[10px] px-[28px] rounded-3xl bg-blue-600 hover:bg-blue-700 text-md"
              onClick={handleCalculatePrice}
            >
              Proceed To Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
