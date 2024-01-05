import React, { useState } from "react";
import "./ModalPopup.css";
import { useNavigate } from "react-router-dom";

const ModalPopup = () => {
  const [show, setShow] = useState(null);
  const [modalPage, setModalPage] = useState("true");
  const Navigate = useNavigate();
  const handlePopup = () => {
    setShow(!show);
    setModalPage(!modalPage);
  };
  const RemoveModal = () => {
    setShow(null);
    setModalPage(!modalPage);
  };
  const handleNavigate = () => {
    Navigate("/Day3");
  };
  const handleNavigateback = () => {
    Navigate("/");
  };
  return (
    <div className={modalPage ? "modal_page" : "modal_page_background"}>
      <div className={show ? "Popup_container" : "DontShow"}>
        <div>
          <h4>Modal</h4>
          <button className="" onClick={RemoveModal}>
            X
          </button>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="modal_Create">
        <h1>Lets Create a Modal !!!</h1>

        <h4>Click button below</h4>
        <button onClick={handlePopup}>Modal</button>
      </div>
      <div className="nextbutton_container">
        <button className="NextButton" onClick={handleNavigateback}>
          Back
        </button>
        <button className="NextButton" onClick={handleNavigate}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ModalPopup;
