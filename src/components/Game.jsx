import { useState } from "react";
import { getRandomNumber } from "../utils/random";
import { truths } from "../data/truths";
import { dares } from "../data/dares";

export default function Game({ level, setLevel }) {
  const [number, setNumber] = useState(null);
  const [hasStarted, setHasStarted] = useState(false); // only once
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  // 🔥 Toss happens only once
 const toss = (prediction) => {
  const num = getRandomNumber(true);
  setNumber(num);
  setHasStarted(true);
};

  const pickTruth = () => {
    const list = truths[level];
    setMessage(list[Math.floor(Math.random() * list.length)]);
  };

  const pickDare = () => {
    const list = dares[level];
    setMessage(list[Math.floor(Math.random() * list.length)]);
  };

  // 🔥 Only resets question, NOT toss
  const nextRound = () => {
    setMessage("");
  };

  const hiddenLevelSwitch = () => {
  const order = ["easy", "medium", "hard"];
  const next = order[(order.indexOf(level) + 1) % 3];
  setLevel(next);
};
  return (
    <div className="game-container">

      {/* 🟢 SHOW ONLY AT START */}
      {!hasStarted && (
        <div className="card">
          <h2>Pick Odd or Even</h2>
          <div className="btn-group">
            <button onClick={() => toss("odd")}>Odd</button>
            <button onClick={() => toss("even")}>Even</button>
          </div>
        </div>
      )}

      {/* 🔴 MAIN GAME LOOP */}
      {hasStarted && (
        <div className="card">
          <h1 className="number">{number}</h1>
          

          {/* Truth/Dare */}
          {!message && (
            <div className="btn-group">
              <button onClick={pickTruth}>Truth</button>
              <button onClick={pickDare}>Dare</button>
            </div>
          )}

          {/* Question */}
          {message && (
            <>
              <p className="message">{message}</p>
              <button className="next-btn" onClick={nextRound}>
                Next →
              </button>
            </>
          )}
        </div>
      )}

     <div
  className={`secret-dot ${level}`}
  onClick={hiddenLevelSwitch}
></div>
    </div>
  );
}