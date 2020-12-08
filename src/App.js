import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [status, setStatus] = useState("não");

  return (
    <div className="App">
      <p>O botão foi clicado? {status}</p>
      <button
        onClick={() => {
          setStatus("Sim");
        }}
      >
        Clique
      </button>
    </div>
  );
}
