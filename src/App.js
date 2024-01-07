import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomNumberHex from "./Component/Day1/RandomNumberHex";
import ModalPopup from "./Component/Day2/ModalPopup";
import PalindromeChecker from "./Component/Day3/PalindromeChecker";
import googleLinkGenerator from "./Component/Day4/googleLinkGenerator";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RandomNumberHex />} />
        <Route path="/Day2" element={<ModalPopup />} />
        <Route path="/Day3" element={<PalindromeChecker />} />
        <Route path="/Day4" element={<googleLinkGenerator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
