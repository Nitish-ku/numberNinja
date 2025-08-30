import React, { useState } from "react";
import ProgressTracker from "../components/ProgressTracker";
import { MathJax } from "better-react-mathjax";
import "./MathQuestions.css";

const questions = [
  {
    id: "solution-1",
    title: "Question number 1",
    question:
      "Give the dimensions of a rectangle whose area is the sum of the areas of these two rectangles having measurements: 5 m × 10 m and 2 m × 7 m.",
    answer: "16m, 4m",
    solution: `
      area of rectangle : \[length\\times breadth\] <br/>
      area of rectangle 1 : \[5\\times 10 = 50m^2\] <br/>
      area of rectangle 2 : \[2\\times 7 = 14m^2\] <br/>
      sum of areas : \[50m^2+14m^2=64m^2\] <br/>
      let length = x, breadth = y <br/>
      \[x\\times y=64\] <br/>
      Possible dimensions: <br/>
      \[1) L=16m, W=4m\] <br/>
      \[2) L=32m, W=2m\]
    `,
  },
  {
    id: "solution-2",
    title: "Question number 2",
    question:
      "The area of a rectangular garden that is 50 m long is 1000 sq m. Find the width of the garden.",
    answer: "20m",
    solution: `
      \[Area = l\\times b\] <br/>
      \[b = \\frac{1000}{50} = 20m\]
    `,
  },
  {
    id: "solution-3",
    title: "Question number 3",
    question:
      "The floor of a room is 5 m long and 4 m wide. A square carpet whose sides are 3 m in length is laid on the floor. Find the area that is not carpeted.",
    answer: "11m^2",
    solution: `
      Floor area = \[4\\times 5 = 20m^2\] <br/>
      Carpet area = \[3^2 = 9m^2\] <br/>
      Uncovered = \[20-9=11m^2\]
    `,
  },
  {
    id: "solution-4",
    title: "Question number 4",
    question:
      "Four flower beds having sides 2 m long and 1 m wide are dug at the four corners of a garden that is 15 m long and 12 m wide. How much area is now available for laying down a lawn?",
    answer: "172m^2",
    solution: `
      Garden area = \[15\\times 12 = 180m^2\] <br/>
      1 bed area = \[2\\times 1 = 2m^2\] <br/>
      4 beds = \[8m^2\] <br/>
      Lawn area = \[180 - 8 = 172m^2\]
    `,
  },
  {
    id: "solution-5",
    title: "Question number 5",
    question:
      "Shape A has an area of 18 square units and Shape B has an area of 20 square units. Shape A has a longer perimeter than Shape B. Draw two such shapes.",
    solution: `
      Shape A: \[1\\times 18, Area=18, Perimeter=38\] <br/>
      Shape B: \[4\\times 5, Area=20, Perimeter=18\] <br/>
      Hence A > B perimeter
    `,
  },
  {
    id: "solution-6",
    title: "Question number 6",
    question:
      "On a page, draw a rectangular border that is 1 cm from top/bottom and 1.5 cm from left/right. What is the perimeter?",
    answer: "5cm",
    solution: `
      \[Perimeter = 2(1+1.5)=5cm\]
    `,
  },
  {
    id: "solution-7",
    title: "Question number 7",
    question:
      "Draw a rectangle of size 12\\times8. Draw another inside it occupying exactly half the area.",
    solution: `
      Area = \[12\\times 8 = 96\] <br/>
      Half = \[48\] <br/>
      Possible sides = \[12\\times 4, 16\\times 3, 8\\times 6, 1\\times 48\]
    `,
  },
  {
    id: "solution-8",
    title: "Question number 8",
    question: `
      A square piece of paper is folded in half, cut into two rectangles. Regardless of size, which is always true?
      <br/>a) Area of each rectangle > square <br/>
      b) Square perimeter > sum of rectangles <br/>
      c) Perimeters of both rectangles = 1.5\\times square perimeter <br/>
      d) Area of square = 3\\times rectangles area
    `,
    answer: "c",
    solution: `
      Correct: (c) – sum of rectangle perimeters is 1.5\\times square.
    `,
  },
];

export default function MathQuestions() {
  const [selected, setSelected] = useState(null);
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSelect = (q) => {
    setSelected(q);
    setShowSolution(false);
    setUserAnswer("");
    setFeedback("");
  };

  const handleCheck = () => {
    setAttempted(attempted + 1);
    // Implement your answer-check mechanism here
    setFeedback("Looks good!");
  };

  return (
    <div className="container mt-4">
      <div className="row h-100">
        <div className="col-md-5">
          <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
              <b># Figure It Out</b>
            </div>
            {questions.map((q) => (
              <button
                key={q.id}
                className={`list-group-item list-group-item-action ${
                  selected?.id === q.id ? "active" : ""
                }`}
                onClick={() => handleSelect(q)}
              >
                <strong>{q.title}</strong>
                <p className="small mb-0">{q.question}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="col-md-7">
          <ProgressTracker attempted={attempted} correct={correct} />
          <div id="solution-area" className="p-3 border rounded">
            {selected ? (
              <>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Your answer"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                  />
                  <button className="btn btn-primary me-2" onClick={handleCheck}>
                    Check Answer
                  </button>
                  <button className="btn btn-info" onClick={() => setShowSolution(true)}>
                    Show Solution
                  </button>
                  {feedback && <p className="mt-2">{feedback}</p>}
                </div>
                {showSolution && (
                  <>
                    <h5>Solution for {selected.title}</h5>
                    <MathJax>{selected.solution}</MathJax>
                  </>
                )}
              </>
            ) : (
              <p>Click a question to begin.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}