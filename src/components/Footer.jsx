import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto py-3 bg-light border-top">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} Number Ninja</small>
      </div>
    </footer>
  );
}
