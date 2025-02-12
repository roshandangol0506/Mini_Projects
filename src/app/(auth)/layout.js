import HeroIcon from "@/components/hero-icon";
import React from "react";
//HOC: HIgher order component

const layout = ({ children }) => {
  return (
    <div className=" p-40 border shadow-xl m-40">
      <HeroIcon width={100} />
      {children}
    </div>
  );
};

export default layout;
