import React from "react";

export const Label = ({
  fontColor = "white",
  bgColor = "green",
  text = "Best in UAE",
}) => {
  return (
    <p
      className={`px-5 mr-2  rounded-sm w-fit ${fontColor} ${bgColor} font-bold`}
    >
      {text}
    </p>
  );
};
