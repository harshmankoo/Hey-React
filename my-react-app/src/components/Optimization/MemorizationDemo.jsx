// (React.memo + useMemo)

import { useState, useMemo } from "react";
import SlowComponent from "./slowComponent";

function MemoizationDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo = (() => {}, [])
  const expensiveCalculation = useMemo(() => {
    console.log("Re-rendered: Expensive Calculations !!");
    return text.split("").reverse().join("");
  }, [text]);

  function handleCounter()
  {
    setCount(c => c + 1);
    console.log("Counter Re-rendered !!");
  }
  return (
    <div>
      <h3>React.memo & useMemo</h3>

      <p>{expensiveCalculation}</p>

      <input
        placeholder="Type Something"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleCounter}>
        Count: {count}
      </button>

      <SlowComponent name="Static Data" />
    </div>
  );
}

export default MemoizationDemo;