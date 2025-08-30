// src/pages/MathQuestions.jsx
import React, { useState } from "react";
import { MathJax } from "better-react-mathjax";
import ProgressTracker from "../components/ProgressTracker"; // include if needed

const questions = [
  {
    id: "q1",
    title: "Question 1",
    question: "Give dimensions of a rectangle whose area is sum of two rectangles (5×10 and 2×7).",
    solution: `
      <h5>Solution for Question 1</h5>
      Area 1: $$5 \\times 10 = 50 \\text{ m}^2$$<br/>
      Area 2: $$2 \\times 7 = 14 \\text{ m}^2$$<br/>
      Total area: $$64 \\text{ m}^2$$<br/>
      Options: $$16 \\times 4$$ or $$32 \\times 2$$
    `,
  },
  {
    id: "q2",
    title: "Question 2",
    question: "Rectangular garden is 50 m long, area is 1000 m\u00b2. Find width.",
    solution: `
      <h5>Solution for Question 2</h5>
      $$A = l \\times b = 1000$$<br/>
      $$b = \\frac{1000}{50} = 20 \\text{ m}$$
    `,
  },
  {
    id: "q3",
    title: "Question 3",
    question:
      "Room floor is 5 m × 4 m. A 3 m × 3 m carpet is placed. Find area not carpeted.",
    solution: `
      <h5>Solution for Question 3</h5>
      Floor area: $$4 \\times 5 = 20 \\text{ m}^2$$<br/>
      Carpet area: $$3^2 = 9 \\text{ m}^2$$<br/>
      Uncarpeted: $$20 - 9 = 11 \\text{ m}^2$$
    `,
  },
  // Add other questions similarly...
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
                  <MathJax dynamic>
                    <div dangerouslySetInnerHTML={{ __html: selected.solution }} />
                  </MathJax>
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
