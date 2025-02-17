"use client";

import React, { useEffect, useRef, useState } from "react";

const Monkey_Type = () => {
  const [texttotype, settexttotype] = useState(
    "group this around change because most mean get state those lead where high another run down such late"
  );
  const [userInput, setuserInput] = useState("");
  const inputRef = useRef(null);
  const [isFinished, setisFinished] = useState(false);
  const [startTime, setstartTime] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [error, seterror] = useState(0);
  const [textColors, setTextColors] = useState(
    Array(texttotype.length).fill("text-black")
  );

  const handleTyping = (e) => {
    if (!startTime) setstartTime(Date.now());

    const input = e.target.value;
    setuserInput(input);

    let newColors = [...textColors];

    input.split("").forEach((char, id) => {
      if (char !== texttotype[id]) {
        newColors[id] = "text-red-600";
        seterror(error + 1);
      }
      if (char === texttotype[id]) {
        newColors[id] = "text-green-400";
      }
    });

    setTextColors(newColors);
  };

  useEffect(() => {
    setTimeTaken((Date.now() - startTime) / 1000);
  }, [userInput]);

  const calculateWPM = () => {
    if (timeTaken !== 0)
      return (texttotype.length / 18 / (timeTaken / 60)).toFixed(2);
  };

  return (
    <div className="m-10">
      <br />
      {texttotype.split("").map((char, id) => (
        <span key={id} className={`${textColors[id]}`}>
          {char}
        </span>
      ))}
      <textarea
        ref={inputRef}
        value={userInput}
        onChange={handleTyping}
        className="w-full p-2 border rounded-md mt-2"
        placeholder="Start typing here..."
      />
      Time Taken: {timeTaken}
      Error: {error}
      Speed: {calculateWPM()} word per minute
    </div>
  );
};

export default Monkey_Type;
