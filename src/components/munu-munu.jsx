'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const MunuMunu = () => {
    const [yesSize, setYesSize] = useState(1);
    const [buttonText, setButtonText] = useState("No");
    const [usegif, setusegif] = useState("dan.gif");
    const [usepara, setusepara] = useState("Will You be My Valentine Munu Munu");
    const [currentbgcolor, setcurrentbgcolor] = useState("bg-lime-300");
    const [hearts, setHearts] = useState([]);

    const handleNoClick = () => {
        setYesSize((prevSize) => prevSize + 1);
        const responses = [
            "Are you sure?", "What if I ask you 1000 times...", "Please Preya",
            "Do you wanna go out with me?", "Ok Fine then i will go out with you",
            "What if I asked really nicely?", "With a chocolate rice cake on top", "What about a matcha frostie",
            "I am going to die",
            "Lol I am dead", "ok ur talking to nathan's ghost", "PLEASE POOKIE",
            ":((((", "PRETTY PLEASE", "No"
        ];
        const currentIndex = responses.indexOf(buttonText);
        setButtonText(responses[(currentIndex + 1) % responses.length]);
    };

    const handleYesClick = () => {
        setusegif("kiss.gif");
        setusepara("Yes, I love you my nasty slut, I knew it!");
        setcurrentbgcolor('bg-red-200');

        const newHearts = Array.from({ length: Math.floor(Math.random() * 10) + 10 }, () => ({
            id: Math.random(),
            left: Math.random() * 100,
            size: Math.random() * 40 + 20, 
        }));

        setHearts((prevHearts) => [...prevHearts, ...newHearts]);

        setTimeout(() => {
            setHearts((prevHearts) => prevHearts.slice(newHearts.length));
        }, 4000);

        if (yesSize === 1) {
            setYesSize(1);
        } else {
            setYesSize(1); 
        }
    };

    return (
        <div className={`relative flex flex-col items-center justify-center h-screen text-white text-3xl font-bold ${currentbgcolor} overflow-hidden`}>
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: -500 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 4 }}
                    style={{
                        position: "absolute",
                        left: `${heart.left}%`,
                        bottom: "-50px",
                        fontSize: `${heart.size}px`,
                    }}
                >
                    ❤️
                </motion.div>
            ))}

            <img 
                src={`/${usegif}`}
                alt="Valentine GIF" 
                className="w-64 h-64 object-contain"
            />
            <p className="text-lg text-red-600">{usepara}</p>
            <div className="relative flex gap-7 mt-5">
                <p 
                    onClick={handleYesClick}
                    style={{ transform: `scale(${yesSize})` }} 
                    className="transition-transform duration-300 bg-slate-900 border-none rounded-xl p-3 cursor-pointer z-0"
                >
                    Yes
                </p>

                <p 
                    onClick={handleNoClick} 
                    className="bg-red-500 border-none rounded-xl p-3 cursor-pointer z-10"
                >
                    {buttonText} 
                </p>
            </div>
        </div>
    );
};

export default MunuMunu;
