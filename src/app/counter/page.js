"use client";
import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/lib/features/counter/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(decrement())}>decrement</Button>
      {value}
      <Button onClick={() => dispatch(increment())}>increment</Button>
    </div>
  );
};

export default Counter;
