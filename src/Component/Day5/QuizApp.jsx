import React from "react";
import "./QuizApp.css";
import { useNavigate } from "react-router-dom";

const QuizApp = () => {
  return (
    <div className="main_container">
      <h2>Start Quiz</h2>
      <button>Take a Quiz</button>
      <button>Make your own Quiz</button>
    </div>
  );
};

export default QuizApp;
