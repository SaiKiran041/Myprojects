import { useState, useContext } from "react";
import "./App.css";
import Mainmenu from "./Components/Mainmenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { Quizcontext } from "./Utils/Contexts";

function App() {
  const [gameState, setgameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>Quiz app</h1>
      <Quizcontext.Provider
        value={{ gameState, setgameState, score, setScore }}
      >
        {gameState === "menu" && <Mainmenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </Quizcontext.Provider>
    </div>
  );
}

export default App;
