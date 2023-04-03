import React from "react";

const SkeletonHomeUI = () => {
  return (
    <div className="font-work font-[300] flex-col flex-1 flex-shrink-0 w-[25%] max-w-[24%] mb-10 cursor-pointer animate-pulse">
      <div className="items-center self-center flex relative bg-gray-200">
        <div className="w-[50vw] h-[25vw] pb-[75%]"></div>
      </div>
      <div className="flex flex-col justify-between h-16 w-fit"></div>
    </div>
  );
};

export default SkeletonHomeUI;
