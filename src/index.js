/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
import React, { useState } from "react"
import ReactDOM from "react-dom"
function Counter() {
  const [counterState, setCounterState] = useState(0)
  const [doubleCounter, setDCounterState] = useState(0)
  const increment = () => {
    setCounterState(prev => prev + 1)
  }
  const doubleCount = () => {
    setDCounterState(prev => prev + 2)
  }
  return (
    <div>
      <button onClick={increment}>{counterState}</button>
      <button onClick={doubleCount}>{doubleCounter}</button>
      <button
        onClick={() => {
          setCounterState(0)
          setDCounterState(0)
        }}
      >
        Reset
      </button>
    </div>
  )
}
ReactDOM.render(<Counter />, document.getElementById("root"))
/*
//week2 class exercises solution
import "./App.css";
import { React, useEffect, useState } from "react";
function WatchCount() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return => {
      clearTimeOut(timer);
    }
  });
  const handleChange = () => setCount((prev) => prev - 1);
  const inputValue = (event) => {
    const value = event.target.value;
    setInput(value);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleChange}>Click</button>
      <button onClick={() => setCount(0)}>Rest</button>
      <input type="text" onChange={inputValue} />
      <h4>{input}</h4>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <WatchCount />
    </div>
  );
}
export default App;

//extra exercises added in previous code
import "./App.css";
import { React, useEffect, useState } from "react";
function WatchCount({ cssClassName }) {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(1);
  const [input, setInput] = useState("");
  const inputValue = (event) => {
    const value = event.target.value;
    return setInput(value);
  };
  useEffect(() => {
    const time = setTimeout(() => {
      setCount((prev) => prev + decrement);
    }, input);
    return () => {
      clearTimeout(time);
    };
  });
  const handleChange = () => setDecrement(-1);
  const rest = () => {
    setDecrement(-1);
    setCount(0);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleChange}>Pause</button>
      <button onClick={rest}>Rest</button>
      <input type="text" onChange={inputValue} />
      <h4 style={{ color: "white", backgroundColor: "green" }}>
        your speed now: {input}
      </h4>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <WatchCount />
    </div>
  );
}
export default App;


*/
