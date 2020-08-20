import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {
  const { show } = useAlert();
  return (
    <>
      <h1>Привет это пример Context</h1>
      <button
        onClick={() => show("Текст из Main.js!!!")}
        className={"btn btn-success"}
      >
        Показать alert
      </button>
    </>
  );
}
