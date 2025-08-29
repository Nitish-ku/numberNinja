import React from 'react';
import './ProgressTracker.css';

function ProgressTracker({ attempted, correct }) {
  return (
    <div className="progress-tracker">
      <h5>Your Progress</h5>
      <p>Attempted: {attempted}</p>
      <p>Correct: {correct}</p>
    </div>
  );
}

export default ProgressTracker;
