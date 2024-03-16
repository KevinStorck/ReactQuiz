import { IQuestion } from "../models/IQuestion";

export const quizQuestions: IQuestion[] = [
  {
    question:
      "1. Vilken av dessa filer/mappar skickas generellt inte med till github?",
    answers: { 1: "node_modules", X: "package.json", 2: "main.tsx" },
    correctAnswer: "1",
    points: 1,
  },
  {
    question: "2. Vad stämmer angående react fragment <></>?",
    answers: {
      1: "React fragments följer inte med när html:en kompileras och används endast för att varje komponents return alltid måste ha exakt en förälder",
      X: "React fragments används vid varje return i en komponent, för att react ska förstå att vi vill rendera html",
      2: "React fragments är en uråldrad funktionalitet som inte längre används",
    },
    correctAnswer: "1",
    points: 1,
  },
  {
    question:
      "3. När ett state uppdateras så uppdateras inte sidan omedelbart, react väntar istället på att all kod körs så att vi potentiellt kan uppdatera flera states med samma sidouppdatering. varför?",
    answers: {
      1: "För att sidan ska laddas snabbare",
      X: "För att javaScript inte kan uppdatera sidan medan kod körs",
      2: "För att effektivisera sidouppdateringar och på så sett spara resurser",
    },
    correctAnswer: "2",
    points: 1,
  },
  {
    question: "4. Vad stämmer angående följande kod?",
    code: ["if (someVar) {", "return someVar", "}"],
    answers: {
      1: "someVar kommer aldrig att returneras",
      X: "someVar kommer endast att returneras om det är ansett som truthy",
      2: "En variabel kan aldrig vara falsey så därför kommer someVar alltid att returneras",
    },
    correctAnswer: "X",
    points: 1,
  },
  {
    question: "5. Vad kommer följande kod att ge för output i consolen?",
    code: [
      "const make = 'Ford';",
      "const model = 'Mustang';",
      "const car = { make, model };",
      "console.log(car)",
    ],
    answers: {
      1: "{{make: 'Ford', model: 'Mustang'}}",
      X: "{make: 'Ford', model: 'Mustang'}",
      2: "{car: {make: 'Ford', model: 'Mustang'}}",
    },
    correctAnswer: "X",
    points: 1,
  },
  {
    question:
      "6. Hur kan vi kombinera array1 och array2 så att våran nya array ser ut som array3?",
    code: [
      "const array1 = [1, 2, 3];",
      "const array2 = [4, 5, 6];",
      "const array3 = [1, 2, 3, 4, 5, 6];",
    ],
    answers: {
      1: "const array3 = [...array1, ...array2]",
      X: "const array3 = [array1, array2]",
      2: "const array3 = array1 + array2",
    },
    correctAnswer: "1",
    points: 1,
  },
  {
    question: "7. Vilka props kommer vara tillgängliga i följande komponent?",
    code: ["<SomeComponent {...props} />"],
    answers: { 1: "Inga", X: "Alla", 2: "Alla förutom states" },
    correctAnswer: "X",
    points: 1,
  },
  {
    question: "8. Hitta felet!",
    code: [
      "const someComponent = ({param1, param2}) => {",
      "return <h1>{param1} {param2}</h1>",
      "};",
    ],
    answers: {
      1: "Returnen måste vara insluten i en parentes",
      X: "Returnen måste vara insluten i ett react fragment",
      2: "Komponentens första bokstav måste vara stor",
    },
    correctAnswer: "2",
    points: 1,
  },
  {
    question: "9. Vad är ett korrekt sätt att använda destructuring då:",
    code: ["let object = { var1: 123, var2: 456 }"],
    answers: {
      1: "const {var1} = object",
      X: "const [var1] = object",
      2: "const var1 = object",
    },
    correctAnswer: "1",
    points: 1,
  },
  {
    question: "10. Vad är {props.children} för någonting och hur används det?",
    answers: {
      1: "{props.children} låter oss skicka en property i form av en react hook",
      X: "{props.children} låter oss skicka en property i form av ett objekt",
      2: "{props.children} är en property som låter oss nästla komponenter i andra komponenter",
    },
    correctAnswer: "2",
    points: 1,
  },
];
