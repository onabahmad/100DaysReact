import React, { useState } from "react";
import "./ClicktoCopy.css";

const ClicktoCopy = () => {
  const [textInput, setTextInput] = useState("ZinoTrust123");

  const handleInput = (e) => {
    setTextInput(e.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard
      .writeText(textInput)
      .then(() => {
        const btnCopied = document.getElementById("copied");
        const btnCopy = document.getElementById("copy");
        btnCopied.style.display = "inline";
        btnCopy.style.display = "none";
        setTimeout(() => {
          btnCopied.style.display = "none";
          btnCopy.style.display = "inline";
        }, 1500);
      })
      .catch((error) => {
        console.log("Error copying text", error);
      });
  };

  console.log(textInput);
  return (
    <div className="main_container click_copy">
      <div className="click_copy_container">
        <h2>Get 25% Discount with this coupon</h2>
        <div className="clickCopy_inputbutton">
          <input type="text" value={textInput} onChange={handleInput} />
          <button
            className="click_copy_buttonCopy"
            id="copy"
            onClick={handleCopy}
          >
            Copy
          </button>
          <button
            className="click_copy_buttonCopied"
            id="copied"
            style={{ display: "none" }}
          >
            Copied!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClicktoCopy;
