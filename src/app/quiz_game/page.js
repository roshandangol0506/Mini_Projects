"use client";
import React, { useEffect, useRef, useState } from "react";

const quizQuestions = [
  {
    question: "What is the primary purpose of useState in React?",
    options: [
      "A) To fetch data from an API",
      "B) To manage component state",
      "C) To define routes in an application",
      "D) To create global styles",
    ],
    answer: "B) To manage component state",
  },
  {
    question:
      "Which JavaScript method is used to convert a string to an integer?",
    options: [
      "A) parseInt()",
      "B) toInteger()",
      "C) Number()",
      "D) stringToInt()",
    ],
    answer: "A) parseInt()",
  },
  {
    question:
      "What does the typeof operator return for an array in JavaScript?",
    options: ["A) 'array'", "B) 'object'", "C) 'list'", "D) 'string'"],
    answer: "B) 'object'",
  },
  {
    question: "Which of the following is NOT a React hook?",
    options: ["A) useEffect", "B) useContext", "C) useReducer", "D) useFetch"],
    answer: "D) useFetch",
  },
  {
    question:
      "In CSS, which property is used to change the text color of an element?",
    options: ["A) text-color", "B) color", "C) font-color", "D) text-style"],
    answer: "B) color",
  },
  {
    question: "What does localStorage do in JavaScript?",
    options: [
      "A) Stores data permanently until manually cleared",
      "B) Stores data for a session and clears it on browser close",
      "C) Stores files on the user's device",
      "D) Saves data only for form inputs",
    ],
    answer: "A) Stores data permanently until manually cleared",
  },
  {
    question: "Which of the following is a relational database?",
    options: ["A) MongoDB", "B) MySQL", "C) Firebase", "D) Neo4j"],
    answer: "B) MySQL",
  },
  {
    question:
      "In JavaScript, which loop is best suited for iterating over object properties?",
    options: [
      "A) for loop",
      "B) forEach loop",
      "C) for...in loop",
      "D) while loop",
    ],
    answer: "C) for...in loop",
  },
  {
    question: "What does NaN stand for in JavaScript?",
    options: [
      "A) Not a Name",
      "B) Not a Null",
      "C) Not a Number",
      "D) None at Node",
    ],
    answer: "C) Not a Number",
  },
  {
    question: "Which command is used to initialize a new Git repository?",
    options: ["A) git start", "B) git create", "C) git init", "D) git new"],
    answer: "C) git init",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledQuestions = shuffleArray(quizQuestions);

const Quiz = () => {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [rightanswer, setrightanswer] = useState("");
  const [selectoption, setselectoption] = useState("");
  const [score, setscore] = useState(0);
  const [rightorwrong, setrightorwrong] = useState("");
  const [hasAttemptedWrong, setHasAttemptedWrong] = useState(false);
  const [prevQuestionIndex, setprevQuestionIndex] = useState(0);

  useEffect(() => {
    if (selectoption && rightanswer) {
      if (selectoption === rightanswer) {
        setrightorwrong("You are Right!");
        setcurrentQuestionIndex(currentQuestionIndex + 1);
        if (!hasAttemptedWrong) {
          setscore(score + 1);
          setTimeout(() => {
            setselectoption("");
          }, 1000);
        }
      } else {
        setrightorwrong("You are Wrong!");
        setHasAttemptedWrong(true);
      }
    }
  }, [selectoption]);

  useEffect(() => {
    if (currentQuestionIndex > prevQuestionIndex) {
      setHasAttemptedWrong(false);
    }
    if (currentQuestionIndex < prevQuestionIndex) {
      setHasAttemptedWrong(true);
    }
    setprevQuestionIndex(currentQuestionIndex);
  }, [currentQuestionIndex]);

  const handleselectoption = (index) => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setselectoption(shuffledQuestions[currentQuestionIndex]?.options[index]);
      setrightanswer(shuffledQuestions[currentQuestionIndex]?.answer);
    } else {
      console.log("Quiz Completed!");
    }
  };

  const handleNextQuestion = () => {
    setcurrentQuestionIndex(currentQuestionIndex + 1);
    setrightorwrong("");
    setselectoption("");
    setrightanswer("");
  };
  return (
    <div className="m-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg w-auto">
      {/* Score & Feedback */}
      <div className="text-center text-lg font-semibold mb-4">
        <span className="text-green-400">Score: {score}</span>
        <p
          className={`mt-2 text-lg ${
            rightorwrong === "You are Right!"
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {rightorwrong}
        </p>
        {rightorwrong === "You are Wrong!" && (
          <p className="text-gray-300 text-sm">Correct Answer: {rightanswer}</p>
        )}
      </div>

      {/* Question */}
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6 text-orange-400">
          {shuffledQuestions[currentQuestionIndex].question}
        </h2>

        {/* Options Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {shuffledQuestions[currentQuestionIndex].options.map(
            (option, index) => (
              <div
                key={index}
                onClick={() => handleselectoption(index)}
                className={`p-3 rounded-lg text-center font-medium cursor-pointer transition-all 
          ${
            selectoption === option
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-gray-700 hover:bg-gray-600 hover:scale-105 text-white"
          }`}
              >
                {option}
              </div>
            )
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setcurrentQuestionIndex(currentQuestionIndex - 1)}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
