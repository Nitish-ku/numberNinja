import React, { useState } from "react";
import ProgressTracker from "../components/ProgressTracker.jsx";
import { MathJax } from "better-react-mathjax";
import "./MathQuestions.css";

/**
 * IMPORTANT: We keep the LaTeX exactly like your HTML version.
 * Use $$...$$ or \( ... \) / \[ ... \] and normal text. MathJax picks it up.
 * Do NOT escape backslashes here – backticks (template strings) preserve them.
 */

const questions = [
  {
    id: "solution-1",
    title: "Question number 1",
    question:
      "Give the dimensions of a rectangle whose area is the sum of the areas of these two rectangles having measurements: 5 m × 10 m and 2 m × 7 m.",
    // multiple valid answers; we'll accept both pairs
    answers: ["16m,4m", "16 m, 4 m", "32m,2m", "32 m, 2 m"],
    solution: `
<h5>Solution for Question 1</h5>
area of rectangle : $$length\\times bredth$$
area of the rectangle 1 : $$5\\times 10 = 50m^2$$
area of the rectangle 2 : $$2\\times  7 = 14m^2$$
sum of the area of the rectangle 1 and rectangle 2 : $$50m^2+14m^2=64m^2$$
so, the total area of the rectangle : $$64m^2$$
let length of the unknown rectangle be x
let bredth of the unknown rectangle be y
area of the unknown rectangle = $$x\\times y$$
now, $$x\\times y=64$$
To find the dimension of the unknown rectangle we can find various pairs of length and bredth such that $$length\\times bredth=64m^2$$
Some possible dimenstion could be :
$$1)\\ L = 16m,\\ W = 4m$$
$$2)\\ L = 32m,\\ W = 2m$$
    `,
  },
  {
    id: "solution-2",
    title: "Question number 2",
    question:
      "The area of a rectangular garden that is 50 m long is 1000 sq m. Find the width of the garden.",
    answers: ["20m", "20 m"],
    solution: `
<h5>Solution for Question 2</h5>
$$Area\\ of\\ the\\ garden(a) = length(l)\\times bredth(b)$$
$$a=l\\times b$$
$$b =\\frac{a}{l}$$
$$b =\\frac{1000}{50}=20m$$
    `,
  },
  {
    id: "solution-3",
    title: "Question number 3",
    question:
      "The floor of a room is 5 m long and 4 m wide. A square carpet whose sides are 3 m in length is laid on the floor. Find the area that is not carpeted.",
    answers: ["11m^2", "11 m^2", "11"],
    solution: `
<h5>Solution for Question 3</h5>
We have a floor with dimensions 4m width and 5m length<br>
Area of the floor = $width\\times length$<br>
Area of the floor = $4\\times 5 = 20m^2$<br>
Side of the square carpet = 3m<br>
Area of the square carpet = $(side)^2$<br>
Area of the square carpet = $(3)^2=9m^2$<br>
Now, we will subtract the square carpet area from the floor’s area to get the area of the floor that is not carpeted.<br>
So, the area of the floor that is not carpeted = $(20-9)m^2 = 11m^2$
    `,
  },
  {
    id: "solution-4",
    title: "Question number 4",
    question:
      "Four flower beds having sides 2 m long and 1 m wide are dug at the four corners of a garden that is 15 m long and 12 m wide. How much area is now available for laying down a lawn?",
    answers: ["172m^2", "172 m^2", "172"],
    solution: `
<h5>Solution for Question 4</h5>
Here, Length of garden = $$15\\ m$$<br>
Width of garden = $$12\\ m$$<br>
So, the area of the garden = $$length\\times width$$<br>
So, the area of the garden = $$(15\\times 12)m^2 = 180\\ m^2$$<br>
Now, the length of the flower bed = $$2\\ m$$<br>
Width of flower bed = $$1\\ m$$<br>
Area of the flower bed = $$(2\\times 1)m^2 = 2m^2$$<br>
Since, the area of four flower beds = $$(2\\times 4)m^2 = 8m^2$$<br>
Now the area is available for laying down a lawn = $180 \\, m^2 - 8 \\, m^2 = (180 – 8)m^2 = 172m^2$
    `,
  },
  {
    id: "solution-5",
    title: "Question number 5",
    question:
      "Shape A has an area of 18 square units and Shape B has an area of 20 square units. Shape A has a longer perimeter than Shape B. Draw two such shapes satisfying the given conditions.",
    // no single numeric answer—free response
    answers: [],
    solution: `
<h5>Solution for Question 5</h5>
For Shape A:<br>
Dimensions = $$1\\ unit\\times 18\\ units$$<br>
Area = $$1\\times 18 = 18\\ square\\ units$$<br>
Perimeter = $$2\\times (1 + 18) = 38\\ units.$$<br>
For Shape B:<br>
Dimensions = $$4\\ units\\times 5\\ units$$<br>
Area = $$4\\times 5 = 20\\ square\\ units$$<br>
Perimeter = $$2\\times (4 + 5) = 18\\ units.$$<br>
Thus, Shape A with a longer perimeter and Shape B with a smaller perimeter satisfy the given conditions.
    `,
  },
  {
    id: "solution-6",
    title: "Question number 6",
    question:
      "On a page in your book, draw a rectangular border that is 1 cm from the top and bottom and 1.5 cm from the left and right sides. What is the perimeter of the border?",
    answers: ["5cm", "5 cm", "5"],
    solution: `
<h5>Solution for Question 6</h5>
Perimeter of the rectangular border = $2\\ [length + width]$<br>
$$=2\\times [1 + 1.5]$$<br>
$$= 2\\times 2.5$$<br>
$$= 5\\ cm$$
    `,
  },
  {
    id: "solution-7",
    title: "Question number 7",
    question:
      "Draw a rectangle of size 12×8. Draw another rectangle inside it without touching the outer rectangle that occupies exactly half the area.",
    answers: ["8x6", "8×6", "8 * 6", "8 by 6", "12x4", "16x3", "1x48"],
    solution: `
<h5>Solution for Question 7</h5>
Area of given rectangle = $12\\times 8 = 96\\ units^2$<br>
and area of new rectangle = $\\frac{1}{2}\\times 96 = 48\\ units^2$<br>
\\(\\therefore\\) Possible sides of new rectangle are $12\\times 4, 16\\times 3, 8\\times 6, 1\\times 48$<br>
\\(\\therefore\\) Hence dimensions of the new rectangle fill in the rectangle of $12\\times 8\\ units^2 = 8\\ units\\times 6\\ units.$
    `,
  },
  {
    id: "solution-8",
    title: "Question number 8",
    question: `
      <p>
        A square piece of paper is folded in half. The square is then
        cut into two rectangles along the fold. Regardless of the size
        of the square, one of the following statements is always true.
        Which statement is true here?
      </p>
      <p>a. The area of each rectangle is larger than the area of the square.</p>
      <p>b. The perimeter of the square is greater than the perimeters of both the rectangles added together.</p>
      <p>c. The perimeters of both the rectangles added together is always 1.5 times the perimeter of the square.</p>
      <p>d. The area of the square is always three times as large as the areas of both rectangles added together.</p>
    `,
    answers: ["c", "option c", "C"],
    solution: `
<h5>Solution for Question 8</h5>
The perimeters of both rectangles added together are always 1.5 times the perimeter of the square.
This is because folding creates two rectangles with lengths equal to half the square. Option (C) is correct.
    `,
  },
];

function normalize(s) {
  return (s || "")
    .toString()
    .trim()
    .replace(/\s+/g, "")
    .replace(/×/g, "x")
    .toLowerCase();
}

export default function MathQuestions() {
  const [selected, setSelected] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const handlePick = (q) => {
    setSelected(q);
    setUserAnswer("");
    setFeedback("");
    setShowSolution(false);
  };

  const checkAnswer = () => {
    if (!selected) return;
    setAttempted((n) => n + 1);

    if (!selected.answers || selected.answers.length === 0) {
      setFeedback("This is a construction/diagram question — no single numeric answer.");
      return;
    }

    const ok = selected.answers.map(normalize).includes(normalize(userAnswer));
    if (ok) {
      setCorrect((n) => n + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Try again.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row h-100">
        {/* Left: Questions */}
        <div className="col-md-5 question-panel">
          <div className="list-group">
            <div className="d-flex w-100 justify-content-between">
              <b className="mb-1"># Figure it out (final exercise)</b>
            </div>

            {questions.map((q) => (
              <a
                href="#"
                key={q.id}
                className={`list-group-item list-group-item-action py-3 lh-sm question-link ${
                  selected && selected.id === q.id ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handlePick(q);
                }}
              >
                <div className="d-flex w-100 justify-content-between">
                  <strong className="mb-1">{q.title}</strong>
                </div>
                <div
                  className="col-10 mb-1 small"
                  // some questions include HTML paragraphs, so we render them as HTML:
                  dangerouslySetInnerHTML={{ __html: q.question }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Solution + input */}
        <div className="col-md-7">
          <ProgressTracker attempted={attempted} correct={correct} />

          <div id="solution-area">
            {selected ? (
              <>
                {!showSolution && (
                  <div className="mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Your answer (e.g., 16m, 4m)"
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      disabled={selected.answers.length === 0}
                    />
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="btn btn-primary"
                        onClick={checkAnswer}
                        disabled={selected.answers.length === 0}
                      >
                        Check Answer
                      </button>
                      <button
                        className="btn btn-info"
                        onClick={() => setShowSolution(true)}
                      >
                        Show Solution
                      </button>
                    </div>
                    {feedback && <p className="mt-2">{feedback}</p>}
                  </div>
                )}

                {showSolution && (
                  // MathJax will parse the LaTeX within this string (using $$, \(...\), \[...\])
                  <MathJax dynamic>
                    {selected.solution}
                  </MathJax>
                )}
              </>
            ) : (
              <p>Click on a question to see its solution here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
