"use client";
import React, { useEffect, useState } from "react";

const items = [
  "👩‍🚀",
  "😱",
  "🐵",
  "🐸",
  "🧞‍♂️",
  "👊",
  "💂",
  "🧑‍🦼",
  "🕶️",
  "🌞",
  "👩‍🚀",
  "😱",
  "🐵",
  "🐸",
  "🧞‍♂️",
  "👊",
  "💂",
  "🧑‍🦼",
  "🕶️",
  "🌞",
  "👩‍🚀",
  "😱",
  "🐵",
  "🐸",
  "🧞‍♂️",
  "👊",
  "💂",
  "🧑‍🦼",
  "🕶️",
  "🌞",
  "👩‍🚀",
  "😱",
  "🐵",
  "🐸",
  "🧞‍♂️",
  "👊",
  "💂",
  "🧑‍🦼",
  "🕶️",
  "🌞",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffleditems = shuffleArray(items);

const page = () => {
  const [firstselectitem, setfirstselectitem] = useState(null);
  const [secondselectitem, setsecondselectitem] = useState(null);

  useEffect(() => {
    if (firstselectitem !== null && secondselectitem === null) {
      setsecondselectitem(firstselectitem);
      setfirstselectitem(null);
    }
    if (firstselectitem !== null && secondselectitem !== null) {
      if (firstselectitem === secondselectitem) {
        setfirstselectitem(null);
        setsecondselectitem(null);
        return;
      }
      setTimeout(() => {
        if (
          shuffleditems[firstselectitem] === shuffleditems[secondselectitem]
        ) {
          shuffleditems[firstselectitem] = "";
          shuffleditems[secondselectitem] = "";
          setfirstselectitem(null);
          setsecondselectitem(null);
        } else {
          setfirstselectitem(null);
          setsecondselectitem(null);
        }
      }, 1000);
    }
  }, [firstselectitem]);

  return (
    <div className="min-h-screen flex justify-center bg-slate-300">
      <div className="m-10 grid grid-cols-5 gap-8">
        {shuffleditems.map((item, id) => {
          return (
            <div
              key={id}
              onClick={() => setfirstselectitem(id)}
              className={
                shuffleditems[id] === ""
                  ? "w-20 h-20 flex justify-center items-center border-none"
                  : "w-20 h-20 flex justify-center items-center border-none rounded-lg bg-green-700 hover:bg-green-800 text-xl font-bold cursor-pointer transition-all duration-300 shadow-lg shadow-gray-600/100"
              }
            >
              {(firstselectitem === id && item) ||
                (secondselectitem === id && item)}
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

export default page;
