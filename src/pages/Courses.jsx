import React from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Courses from NUMBER NINJA</h1>
            <p className="lead text-body-secondary">
              Dive into the world of Number Ninja : a collection of
              beginner-friendly, power-packed courses designed to make math fun,
              clear, and confidence-boosting. Whether you're just starting out
              or brushing up on basics, there's something here to sharpen every
              young mind.
            </p>
            <p>
              <a href="#godfather" className="btn btn-primary my-2">
                Take me to courses
              </a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col" id="godfather">
              <div className="card shadow-sm">
                <img src="./src/images/p&a.jpeg" alt="perimeter and area" />
                <div className="card-body">
                  <p className="card-text">
                    Perimeter means the distance around a shape. Area means the
                    space inside a shape. Let’s learn both in a fun and easy
                    way!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        <Link to="/math-questions" style={{ color: 'white', textDecoration: 'none' }}>Get Started</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Courses;