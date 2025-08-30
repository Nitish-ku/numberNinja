import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import MathQuestions from './pages/MathQuestions';
import Footer from './components/Footer';
import { MathJaxContext } from "better-react-mathjax";

function App() {
  const config = {
    tex: {
      inlineMath: [['
, '
], ['\\(', '\\)']]
    }
  };

  return (
    <MathJaxContext config={config}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/math-questions" element={<MathQuestions />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </MathJaxContext>
  );
}

export default App;
