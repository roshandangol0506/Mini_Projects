"use client";
import { Button } from "@/components/ui/button";
import {
  ChangeColor,
  increaseHeight,
  increaseWidth,
  ChangeCircle,
} from "@/lib/features/box/boxSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Box = () => {
  const { width, height, backgroundColor, circle } = useSelector(
    (state) => state.box
  );
  const dispatch = useDispatch();
  return (
    <div>
      <div
        onClick={() => dispatch(ChangeCircle())}
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        }}
        className={`${circle}`}
      >
        Box
      </div>
      <Button onClick={() => dispatch(increaseHeight())}>Height</Button>
      <Button onClick={() => dispatch(increaseWidth())}>Width</Button>
      <Button onClick={() => dispatch(ChangeColor())}>Color</Button>
    </div>
  );
};

export default Box;
