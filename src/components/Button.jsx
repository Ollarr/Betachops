import React from "react";
const Button = (props) => {
  return (
    <button
      className="bg-gradient-to-r from-orange-500 to-orange-300 text-white font-[Poppins] py-2 px-6 space-x-8 rounded hover:bg-indigo-400 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
