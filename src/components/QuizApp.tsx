import { useState } from "react";
import { IQuestion } from "../models/IQuestion";
import { Questions } from "./Questions";
import { quizQuestions } from "../services/questions";

export const Quizapp = () => {
  const [points, setPoints] = useState(0);
  const [whatQuestion, setWhatQuestion] = useState(0);
  const [frontPage, setFrontPage] = useState(true);
  const questions: IQuestion[] = quizQuestions;

  return (
    <>
      {!frontPage ? (
        <Questions
          questions={questions}
          whatQuestion={whatQuestion}
          setWhatQuestion={setWhatQuestion}
          points={points}
          setPoints={setPoints}
        />
      ) : (
        <>
          <h1>
            Ett quizzz för att personer med rizzz<span>(emili)</span>
          </h1>
          <button onClick={() => setFrontPage(false)}>Starta Quizzettt</button>
        </>
      )}
    </>
  );
};
