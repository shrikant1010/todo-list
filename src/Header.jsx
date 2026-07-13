import React from "react";
import { LuListTodo } from "react-icons/lu";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({ changeMode, mode }) => {
  return (
    <div className="header">
      <div className="left">
        <LuListTodo color="purple" />
        <p> My To-Do-List</p>
      </div>
      <div className="right">
        <button
          onClick={() => changeMode("light")}
          className={mode === "dark" ? "bg-gray-500" : "bg-gray-200"}
        >
          {mode === "dark" ? (
            <CiLight color="white" size={15} />
          ) : (
            <CiLight color="black" size={15} />
          )}
        </button>
        <button
          onClick={() => changeMode("dark")}
          className={mode === "dark" ? "bg-gray-500" : "bg-gray-200"}
        >
          {mode === "dark" ? (
            <MdOutlineDarkMode color="white" size={15} />
          ) : (
            <MdOutlineDarkMode color="black" size={15} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
