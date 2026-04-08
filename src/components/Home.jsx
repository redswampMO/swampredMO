import { useState, useEffect } from "react";

export default function Home({ setLevel }) {
  const [showMoveOn, setShowMoveOn] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMoveOn(true), 800);
  }, []);

  return (
    <div className="home">
      <h1 className="title-red">RedSwamp</h1>
      {showMoveOn && <h2 className="title-sub">Move On</h2>}

      <div className="buttons">
        <button onClick={() => setLevel("easy")}>Easy</button>
        <button onClick={() => setLevel("medium")}>Medium</button>
        <button onClick={() => setLevel("hard")}>Hard</button>
      </div>
    </div>
  );
}