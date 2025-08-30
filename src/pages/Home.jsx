import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="body_section">
        <div className="paragraph">
          <p id="pew">Hello Students</p>
          <br />
          <p>
            <span data-text="Welcome to Number Ninja">Welcome to Number Ninja</span>
          </p>
          <p id="lypse">
            Built to make math simple, clear, and conquerable — where everyone
            learns like a champion
          </p>
        </div>
      </div>
      <div className="col-lg-6 col-xxl-4 my-5 mx-auto">
        <div className="d-grid gap-2">
          <Link to="/courses" className="btn btn-outline-secondary" style={{backgroundColor: 'palevioletred', color: 'white'}}>
            Explore Courses
          </Link>
          <a href="https://nitish-ku.github.io/My-Portfolio/" className="btn btn-primary">About me</a>
        </div>
      </div>
    </div>
  );
}

export default Home;