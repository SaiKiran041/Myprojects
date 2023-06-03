import React, { useState, useContext } from "react";
import { Quizcontext } from "../Utils/Contexts";
import { Questions } from "../Utils/QuestionBank";

const Quiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");

  const { score, setScore, gameState, setgameState } = useContext(Quizcontext);

  const nextQuestion = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setcurrentQuestion(currentQuestion + 1);
  };

  const finnishQuiz = () => {
    if (Questions[currentQuestion].asnwer === optionChosen) {
      setScore(score + 1);
    }
    setgameState("endScreen");
  };
  return (
    <div className="Quiz">
      Quiz App
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button
          onClick={() => {
            setoptionChosen("A");
          }}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => {
            setoptionChosen("B");
          }}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => {
            setoptionChosen("C");
          }}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => {
            setoptionChosen("D");
          }}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finnishQuiz}>Finnish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
