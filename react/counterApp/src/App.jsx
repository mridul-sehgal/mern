import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      return;
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  }
  return (
    <>
      <h1>Mridul Sehgal</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
