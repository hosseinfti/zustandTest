import React from "react";
import "./App.css";
import useStore from "./store/useStore";

function App() {
  const { count, increament, decreament } = useStore();
  return (
    <div className="App">
      <div className="count">{count}</div>
      <div className="btn-container">
        <button onClick={increament}>increament</button>
        <button onClick={decreament}>decreament</button>
      </div>
    </div>
  );
}

export default App;
