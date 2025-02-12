import Rock_paper_scissor from "@/components/rock-paper-scissor";
import React from "react";

const layout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-white to-gray-400 text-white p-5">
      <Rock_paper_scissor />
    </div>
  );
};

export default layout;
