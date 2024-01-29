import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RandomNumberHex from "./Component/Day1/RandomNumberHex";
import ModalPopup from "./Component/Day2/ModalPopup";
import PalindromeChecker from "./Component/Day3/PalindromeChecker";
import ClicktoCopy from "./Component/Day4/ClicktoCopy";
import QuizApp from "./Component/Day5/QuizApp";
import QuizMaker from "./Component/Day5/QuizMaker";
import Quizset from "./Component/Day5/Quizset";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RandomNumberHex />} />
        <Route path="/Day2" element={<ModalPopup />} />
        <Route path="/Day3" element={<PalindromeChecker />} />
        <Route path="/Day4" element={<ClicktoCopy />} />
        <Route path="/Day5" element={<QuizApp />} />
        <Route path="/Day5/makeQuiz" element={<QuizMaker />} />
        <Route path="/Day5" element={<Quizset />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
