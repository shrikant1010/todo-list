import React from "react";
import { LuListTodo } from "react-icons/lu";
import { CiLight } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = ({ changeMode }) => {
  return (
    <div className="header">
      <div className="left">
        <LuListTodo color="purple" />
        <p> My To-Do-List</p>
      </div>
      <div className="right">
        <button onClick={() => changeMode("light")}>
          <CiLight color="black" size={15} />
        </button>
        <button onClick={() => changeMode("dark")}>
          <MdOutlineDarkMode color="black" size={15} />
        </button>
      </div>
    </div>
  );
};

export default Header;
