import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      <h1 className="mb-3">Number Ninja</h1>
      <p className="lead">Practice math with instant feedback and worked solutions.</p>
      <Link className="btn btn-primary" to="/math-questions">Go to Math Questions</Link>
    </div>
  );
}
