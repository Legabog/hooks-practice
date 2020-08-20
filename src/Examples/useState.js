import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some calculations...");
  return Math.trunc(Math.random() * 20);
}

function App() {
  // let [counterState, setCounter] = useState(0)
  // let [counterState, setCounter] = useState(computeInitialCounter())
  let [counterState, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  const [state, setState] = useState({
    title: "Счетчик",
    date: Date.now(),
  });

  const increment = () => {
    // -----Res
    // setCounter(++counterState)
    // setCounter(++counterState)

    // -----Result +2
    setCounter((prevCounter) => {
      return ++prevCounter;
    });

    setCounter((prev) => {
      return ++prev;
    });
  };

  const dicrement = () => {
    setCounter(--counterState);
  };

  const updateTitle = () => {
    setState((prev) => {
      return {
        ...prev,
        title: "Новое название"
      }
    })
    setState({ ...state, title: "Новое название" });
  }

  return (
    <div>
      <h1>Счётчик: {counterState}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={dicrement} className="btn btn-danger">
        Убрать
      </button>
      <button
        onClick={updateTitle}
        className="btn btn-default"
      >
        Изменить название
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;