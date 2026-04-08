import { useState } from "react";
import Home from "./components/Home";
import Game from "./components/Game";

export default function App() {
  const [level, setLevel] = useState(null);

  return (
    <>
      {!level ? (
        <Home setLevel={setLevel} />
      ) : (
        <Game level={level} setLevel={setLevel} />
      )}
    </>
  );
}