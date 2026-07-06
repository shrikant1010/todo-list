import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
const App = () => {
  const [mode, setMode] = useState(true);
  function changeMode(value) {
    setMode(value);
  }
  return (
    <div className={`card ${mode === "dark" ? "dark" : ""}`}>
      <Header changeMode={changeMode} />
      <Content />
    </div>
  );
};

export default App;
