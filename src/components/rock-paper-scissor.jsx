'use client'
import { Cuboid, Hand, LucideRocket, Scissors } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Rock_paper_scissor = () => {
    const [currentUserDetails, setCurrentUserDetails] = useState(null);
    const [currentComputerDetails, setCurrentComputerDetails] = useState(null);
    const [currentWinorLose, setWinorLose]=useState("");


    const faceConfigId = {
        'Q': 11,
        'K': 12,
        'J': 10,
        'A': 13
    }
    
    const items=[{
        name:"rock",
        icon:<Cuboid/>,
    },{
        name:"paper",
        icon:<Hand/>,
    },{
        name:"scissor",
        icon:<Scissors/>,
    }]

    function handleUserDetails(name) {
        setCurrentUserDetails(name);

        const randomNum = Math.floor(Math.random() * items.length);
        setCurrentComputerDetails(items[randomNum].name);
    }

    useEffect(() => {
        if (currentUserDetails && currentComputerDetails) {
            handleWinorLose();
        }
    }, [currentUserDetails, currentComputerDetails]);

    const handleWinorLose = () => {
        if (
            (currentUserDetails === "scissor" && currentComputerDetails === "paper") ||
            (currentUserDetails === "rock" && currentComputerDetails === "scissor") ||
            (currentUserDetails === "paper" && currentComputerDetails === "rock")
        ) {
            setWinorLose("You Won");
        } else if (
            (currentUserDetails === "rock" && currentComputerDetails === "paper") ||
            (currentUserDetails === "scissor" && currentComputerDetails === "rock") ||
            (currentUserDetails === "paper" && currentComputerDetails === "scissor")
        ) {
            setWinorLose("You Lose");
        } else {
            setWinorLose("Draw");
        }
    };
  return (
            <div className="w-[50%] bg-white bg-opacity-10 backdrop-blur-lg shadow-2xl border border-white/20 rounded-xl p-10">
                <div className="flex items-center justify-center gap-10">
                    <div className="m-4 p-4 flex flex-col gap-4">
                        {items.map((item, id) => (
                            <div
                                key={id}
                                onClick={() => handleUserDetails(item.name)}
                                className="w-20 h-20 flex items-center justify-center bg-red-500 border-none rounded-full text-white cursor-pointer hover:bg-red-700 hover:scale-110 transition-transform duration-300 shadow-lg"
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>

                    {/* User Choice */}
                    <div className="text-2xl font-bold text-gray-600">{currentUserDetails || "?"}</div>

                    {/* VS Text */}
                    <div className="text-3xl font-extrabold text-yellow-500 animate-bounce">VS</div>

                    {/* Computer Choice */}
                    <div className="text-2xl font-bold text-gray-600">{currentComputerDetails || "?"}</div>
                </div>

                {/* Win or Lose Message */}
                <div
                    className={`mt-5 text-3xl text-center justify-center font-bold transition-all duration-500 ${
                        currentWinorLose === "You Won"
                            ? "text-green-700 animate-pulse"
                            : currentWinorLose === "You Lose"
                            ? "text-red-500 animate-shake"
                            : "text-yellow-500"
                    }`}
                >
                    {currentWinorLose}
                </div>
            </div>
    );
};

export default Rock_paper_scissor