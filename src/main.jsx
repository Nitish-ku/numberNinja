import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import MathQuestions from "./pages/MathQuestions.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/math-questions" element={<MathQuestions />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
