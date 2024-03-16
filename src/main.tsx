import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Quizapp } from "./components/QuizApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Quizapp />
  </React.StrictMode>
);
