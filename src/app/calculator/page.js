"use client";
import React, { useEffect, useState } from "react";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = ["*", "/", "+", "-"];

const page = () => {
  const [selecteditems, setselecteditems] = useState("");
  const [firstselect, setfirstselect] = useState(null);
  const [selectedoperation, setselectedoperation] = useState(null);
  const [result, setresult] = useState(null);

  useEffect(() => {
    if (selectedoperation && selecteditems) {
      setfirstselect(Number(selecteditems));
      setselecteditems("");
    }
    if (selectedoperation && selecteditems === "") {
      setfirstselect(result);
    }
  }, [selectedoperation]);

  function test() {
    if (selectedoperation) {
      if (selectedoperation == "+") {
        setresult(firstselect + Number(selecteditems));
      } else if (selectedoperation == "-") {
        setresult(firstselect - Number(selecteditems));
      } else if (selectedoperation == "*") {
        setresult(firstselect * Number(selecteditems));
      } else {
        setresult(firstselect / Number(selecteditems));
      }
      setselecteditems("");
      setselectedoperation("");
      setfirstselect("");
    } else {
      alert("Please select an operation first!");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      {/* Display Area */}
      <div className="w-64 h-20 bg-gray-800 text-3xl font-mono text-right p-4 rounded-lg shadow-lg shadow-gray-700 mb-6">
        {firstselect} {selectedoperation} {selecteditems}
        <br /> {result || "0"}
      </div>

      {/* Number Buttons */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {numbers.map((item, id) => (
          <div
            key={id}
            onClick={() => setselecteditems(selecteditems + item)}
            className="w-16 h-16 flex justify-center items-center border-none rounded-full bg-blue-500 hover:bg-blue-600 text-xl font-bold cursor-pointer transition-all duration-300 shadow-lg shadow-blue-400/50"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Operation Buttons */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {operations.map((item, id) => (
          <div
            key={id}
            onClick={() => setselectedoperation(item)}
            className="w-16 h-16 flex justify-center items-center border-none rounded-lg bg-pink-500 hover:bg-pink-600 text-2xl font-bold cursor-pointer transition-all duration-300 shadow-lg shadow-pink-400/50"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Equals Button */}
      <div
        onClick={test}
        className="w-32 h-16 flex justify-center items-center border-none rounded-lg bg-green-500 hover:bg-green-600 text-2xl font-bold cursor-pointer transition-all duration-300 shadow-lg shadow-green-400/50"
      >
        =
      </div>
    </div>
  );
};

export default page;
