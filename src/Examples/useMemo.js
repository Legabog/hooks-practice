import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false)
  
  const styles = useMemo(() => ({
    color: colored ? "darkred" : "black"
  }), [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]) 

  useEffect(() => {
    console.log("Styles changed!!")
  }, [styles])

  return (
    <>
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => ++prev)}
      >
        Добавить
      </button>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => --prev)}
      >
        Убрать
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Изменить
      </button>
    </>
  );
}

export default App;
