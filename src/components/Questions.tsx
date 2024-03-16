import { useState } from "react";
import { IQuestion } from "../models/IQuestion";
import video from "../assets/confetti.mp4";

interface IQuestionsProps {
  questions: IQuestion[];
  whatQuestion: number;
  setWhatQuestion: (number: number) => void;
  points: number;
  setPoints: (number: number) => void;
}

export const Questions = ({
  questions,
  whatQuestion,
  setWhatQuestion,
  points,
  setPoints,
}: IQuestionsProps) => {
  const [complete, setComplete] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const guessed = (answer: string) => {
    if (answer === questions[whatQuestion].correctAnswer) {
      setPoints(points + 1);
    }
    if (whatQuestion >= questions.length - 1) {
      setComplete(true);
      return;
    } else setWhatQuestion(whatQuestion + 1);
  };

  if (showAnswers)
    return (
      <div className="center">
        <button
          className="goagain"
          onClick={() => {
            setPoints(0);
            setWhatQuestion(0);
            setComplete(false);
            setShowAnswers(false);
          }}
        >
          Go Again
        </button>
        {questions.map((question) => (
          <div key={question.question}>
            <h2>{question.question}</h2>
            {question.code?.map((line, index) => (
              <div key={index}>
                <code key={line}>{line}</code>
                <br></br>
              </div>
            ))}
            <ul>
              <li
                className={question.correctAnswer === "1" ? "right" : "wrong"}
              >
                1: {question.answers[1]}
              </li>
              <li
                className={question.correctAnswer === "X" ? "right" : "wrong"}
              >
                1: {question.answers.X}
              </li>
              <li
                className={question.correctAnswer === "2" ? "right" : "wrong"}
              >
                1: {question.answers[2]}
              </li>
            </ul>
          </div>
        ))}
      </div>
    );

  return complete ? (
    <div className="winner">
      <h1>Antal Rätt: {points}/10</h1>
      {points >= 5 ? (
        <>
          <video autoPlay muted loop id="confetti">
            <source src={video} type="video/mp4" />
          </video>
          <p>OMG DU FICK GODKÄNT!!</p>
          <p>Bra jobbat :DDD</p>
          <p>Trevlig Helg! :)</p>
          <button className="svar" onClick={() => setShowAnswers(true)}>
            Visa alla rätta svar
          </button>
          <button
            className="goagain"
            onClick={() => {
              setPoints(0);
              setWhatQuestion(0);
              setComplete(false);
              setShowAnswers(false);
            }}
          >
            Go Again
          </button>
        </>
      ) : (
        <>
          <h2>Icke Godkänt</h2>
          <p>uhm.. Fårgorna var lite för svåra eller hur? Förlåt :(</p>
          <p>Du kanske kan testa igen? :S</p>
          <button className="svar" onClick={() => setShowAnswers(true)}>
            Visa alla rätta svar
          </button>
          <button
            className="goagain"
            onClick={() => {
              setPoints(0);
              setWhatQuestion(0);
              setComplete(false);
              setShowAnswers(false);
            }}
          >
            Go Again
          </button>
        </>
      )}
    </div>
  ) : (
    <div className="center">
      <h2>{questions[whatQuestion].question}</h2>
      {questions[whatQuestion].code?.map((line, index) => (
        <div key={index}>
          <code key={line}>{line}</code>
          <br></br>
        </div>
      ))}
      <ul>
        <li className="answer" onClick={() => guessed("1")}>
          1: {questions[whatQuestion].answers[1]}
        </li>
        <li className="answer" onClick={() => guessed("X")}>
          X: {questions[whatQuestion].answers.X}
        </li>
        <li className="answer" onClick={() => guessed("2")}>
          2: {questions[whatQuestion].answers[2]}
        </li>
      </ul>
    </div>
  );
};
