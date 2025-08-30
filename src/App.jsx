import React from "react";
import Footer from "./components/Footer.jsx";
import { MathJaxContext } from "better-react-mathjax";

// MathJax delimiters: $...$ or \( ... \) for inline, $$...$$ or \[ ... \] for display
const mathjaxConfig = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

export default function App({ children }) {
  return (
    <MathJaxContext config={mathjaxConfig} version={3}>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-1">{children}</div>
        <Footer />
      </div>
    </MathJaxContext>
  );
}
