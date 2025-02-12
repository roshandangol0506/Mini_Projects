'use client'
import React, { useEffect, useState } from 'react'
const cardOptions = [
    'A' , '2' , '3' , '4' , '5' , '6' ,'7' ,'8','9','10','J','Q','K'
]

const faceConfigId = {
    'Q': 12,
    'K': 13,
    'J': 11,
    'A': 14
}
const number = 13;
 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      debugger;
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }
const shuffledCards = shuffleArray(cardOptions)

const Card = () => {
    const [selectedCards, setselectedCards]= useState(null)
    const [selectedCardvalue, setselectedCardvalue]= useState(null)
    const [computerselect, setcomputerselect]= useState(null)
    const [computerselectvalue, setcomputerselectvalue]= useState(null)

    useEffect(()=>{
        if(selectedCards) {
            setselectedCardvalue(selectedCards)
            const randomNum = Math.floor(Math.random() * (14 - 2 + 1)) + 2;
            setcomputerselectvalue(randomNum) 
        }
    },[selectedCards])

    useEffect(() => {
        setcomputerselect(computerselectvalue)
        for (let key in faceConfigId) {
           if (faceConfigId[key] === computerselectvalue) {
            setcomputerselect(key);
            }
            if (key === selectedCardvalue) {
                setselectedCardvalue(faceConfigId[key]);
                } 
          }
    }, [computerselectvalue]);
    

  return (
    <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-3xl font-bold mb-4 animate-pulse">Card Battle</h1>

    <div className="m-10 flex gap-4 flex-wrap justify-center">
        {shuffledCards.map((item, id) => (
            <div
                onClick={() => setselectedCards(item)}
                className={`flex justify-center items-center w-16 h-24 text-xl font-bold border-2 rounded-lg cursor-pointer transition-transform duration-300 ${
                    selectedCards === item
                        ? "bg-yellow-400 text-black scale-110 shadow-lg shadow-yellow-400/50"
                        : "bg-blue-500 hover:bg-blue-600 hover:scale-105 shadow-lg shadow-blue-400/50"
                }`}
                key={id}
            >
                {selectedCards === item && item}
            </div>
        ))}
    </div>

    <div className="text-xl font-semibold p-4 bg-gray-800 rounded-lg shadow-lg shadow-gray-700/50">
        Computer Selected:{" "}
        <span className="text-yellow-400 animate-bounce">{computerselect}</span>
    </div>

    <div
        className={`text-2xl font-bold px-6 py-3 rounded-lg shadow-lg shadow-gray-600/50 ${
            selectedCardvalue > computerselectvalue
                ? "bg-green-500 text-white animate-pulse"
                : selectedCardvalue === computerselectvalue
                ? "bg-gray-500 text-white"
                : "bg-red-500 text-white"
        }`}
    >
        {selectedCardvalue > computerselectvalue
            ? "🎉 You Win!"
            : selectedCardvalue === computerselectvalue
            ? "🤝 Draw"
            : "💀 You Lose"}
    </div>
</div>

  )
}

export default Card