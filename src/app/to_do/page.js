"use client";
import { Calendar } from "@/components/ui/calendar";
import { format, parse } from "date-fns";
import { Trash, Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const [todo, settodo] = useState([]);
  const [date, setdate] = useState(new Date());
  const [time, setTime] = useState("");
  const [filterselect, setfilterselect] = useState("");
  const inputRef = useRef(null);
  const assigneeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = format(now, "yyyy-MM-dd");
      const formattedTime = format(now, "hh:mm a");

      todo.forEach((item) => {
        if (item.date === formattedDate && item.time === formattedTime) {
          alert(`Reminder: ${item.assignee} - ${item.task}`);
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [todo]);

  const handleAddToDo = () => {
    if (inputRef.current.value && date && time && assigneeRef.current.value) {
      settodo([
        ...todo,
        {
          assignee: assigneeRef.current.value,
          task: inputRef.current.value,
          date: format(date, "yyyy-MM-dd"),
          time: format(parse(time, "HH:mm", new Date()), "hh:mm a"),
        },
      ]);
      inputRef.current.value = "";
      assigneeRef.current.value = "";
      setTime("");
    }
  };

  const handleDeleteToDo = (id) => {
    settodo((prevTodos) => prevTodos.filter((_, idx) => idx !== id));
  };

  const handleDeleteAll = () => {
    settodo([]);
  };

  const handleSelect = (event) => {
    setfilterselect(event.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
        To-Do List
      </h1>
      <div className="space-y-3">
        <input
          name="Assignee"
          type="text"
          placeholder="Enter Name"
          ref={assigneeRef}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="to_do"
          type="text"
          placeholder="Enter Task"
          ref={inputRef}
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setdate}
          className="rounded-md border bg-white p-2"
        />
        <input
          type="time"
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          onClick={handleAddToDo}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Add To-Do
        </button>
      </div>
      <div>
        {todo.length > 0 && (
          <select className="w-20 h-20" onChange={handleSelect}>
            <option className="w-20 h-20">All</option>
            {todo.map((item, id) => (
              <option key={id} className="w-20 h-20">
                {item.assignee}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="mt-6 space-y-4">
        {todo.map((item, id) => (
          <div>
            {filterselect === item.assignee ? (
              <div
                key={id}
                className="flex items-center justify-between bg-white p-3 rounded-md shadow-md border-l-4 border-blue-500"
              >
                <div>
                  <p className="text-lg font-semibold">{item.assignee}</p>
                  <p className="text-gray-700">{item.task}</p>
                  <p className="text-sm text-gray-500">
                    {item.date} at {item.time}
                  </p>
                </div>

                <Trash2
                  onClick={() => handleDeleteToDo(id)}
                  className="text-red-500 cursor-pointer hover:text-red-600"
                />
              </div>
            ) : filterselect === "All" ? (
              <div
                key={id}
                className="flex items-center justify-between bg-white p-3 rounded-md shadow-md border-l-4 border-blue-500"
              >
                <div>
                  <p className="text-lg font-semibold">{item.assignee}</p>
                  <p className="text-gray-700">{item.task}</p>
                  <p className="text-sm text-gray-500">
                    {item.date} at {item.time}
                  </p>
                </div>
                <Trash2
                  onClick={() => handleDeleteToDo(id)}
                  className="text-red-500 cursor-pointer hover:text-red-600"
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>
      {todo.length > 0 && (
        <button
          onClick={handleDeleteAll}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition flex items-center justify-center gap-2"
        >
          <Trash /> Delete All
        </button>
      )}
    </div>
  );
};

export default Page;
