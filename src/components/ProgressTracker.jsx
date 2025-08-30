import React from "react";

export default function ProgressTracker({ attempted = 0, correct = 0 }) {
  const accuracy = attempted ? Math.round((correct / attempted) * 100) : 0;
  return (
    <div className="mb-3">
      <div className="d-flex gap-3 align-items-center">
        <span className="badge text-bg-secondary">Attempted: {attempted}</span>
        <span className="badge text-bg-success">Correct: {correct}</span>
        <span className="badge text-bg-info">Accuracy: {accuracy}%</span>
      </div>
      <div className="progress mt-2" role="progressbar" aria-valuenow={accuracy} aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" style={{ width: `${accuracy}%` }} />
      </div>
    </div>
  );
}
