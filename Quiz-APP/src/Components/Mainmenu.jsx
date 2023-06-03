import React, { useContext } from "react";
import { Quizcontext } from "../Utils/Contexts";
import "../App.css";

const Mainmenu = () => {
  const { gameState, setgameState } = useContext(Quizcontext);

  return (
    <div className="Menu">
      <button onClick={() => setgameState("quiz")}>Start Quiz</button>
    </div>
  );
};

export default Mainmenu;
