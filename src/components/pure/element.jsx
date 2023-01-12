import React, { useState, useEffect } from "react";
import "../../styles/element.scss";

const Element = () => {

  const [newColor, setNewColor] = useState("rgb(0, 0, 0)");

  function changeBackgroundColor(e) {
    e.preventDefault();
    console.log("Vamos a cambiar el color");
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    setNewColor(`rgb(${red}, ${green}, ${blue})`);
  }

  return (
    <div className="element-container">
      <div
        className="element"
        style={{ backgroundColor: `${newColor}` }}
        onMouseOver={changeBackgroundColor}
      ></div>
    </div>
  );
};

export default Element;
