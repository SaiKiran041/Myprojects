import React, { useContext } from "react";
import { Quizcontext } from "../Utils/Contexts";
import "../App.css";
import { Questions } from "../Utils/QuestionBank";

const EndScreen = () => {
  const { score, setScore, setgameState } = useContext(Quizcontext);
  function RestartGame() {
    setScore(0);
    setgameState("menu");
  }
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {score}/{Questions.length}
      </h3>
      <button onClick={RestartGame}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
