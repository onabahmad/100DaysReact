import React, { useState } from "react";
import "./RandomNumberHex.css";
import { useNavigate } from "react-router-dom";

const RandomNumberHex = () => {
  const [number, setnumber] = useState(0);
  const Navigate = useNavigate();
  const handleAdd = () => {
    setnumber((oldnumber) => oldnumber + 1);
  };
  const handleSubstract = () => {
    setnumber((oldnumber) => oldnumber - 1);
  };
  const handleReset = () => {
    setnumber(0);
  };
  const handleRandom = () => {
    setnumber(() => Math.floor(Math.random() * 100));
  };

  const handleRandomcolor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
      color = color + letters[Math.floor(Math.random() * 16)];
    setnumber(color);
  };
  console.log(number);

  const handleNavigate = () => {
    Navigate("/Day2");
  };
  return (
    <div style={{ backgroundColor: number }}>
      <div className="main_container">
        <div className="container">
          <h3 style={{ color: number }} className="heading">
            Random Number & Hex generator
          </h3>
          <div>{number}</div>
          <div className="button_container">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubstract}>Reduce</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleRandom}>Generate</button>
            <button onClick={handleRandomcolor}>Hexcolor</button>
          </div>
        </div>
        <div className="nextbutton_container">
          <button onclic className="NextButton dontdisplay">
            Back
          </button>
          <button className="NextButton" onClick={handleNavigate}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomNumberHex;
