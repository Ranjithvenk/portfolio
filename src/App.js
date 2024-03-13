import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Custom CSS if needed
import port from "../src/logo/portfolio.png";
// import nav from "./App.module.css";
import prof from "../src/logo/IMG1.jpg";

function App() {



  return (
    <div className="container-fluid">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ fontSize: "26px" ,fontWeight:"bolder" }}>
            <img  style={{ marginRight:"40px" }} src={port} alt="" width="50" height="35"/>Portfolio
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li style={{ marginLeft:"40px",marginRight:"40px", fontSize: "18px" ,fontWeight:"500"}}className="nav-item">
                  <a className="nav-link" href="#features">About Me</a>
                </li>
                <li className="nav-item" style={{ marginRight:"40px", fontSize: "18px" ,fontWeight:"500" }}>
                  <a className="nav-link" href="#features">Skills</a>
                </li>
                <li className="nav-item" style={{ marginRight:"40px", fontSize: "18px" ,fontWeight:"500" }}>
                  <a className="nav-link" href="#features">Projects</a>
                </li>
                <li className="nav-item" style={{ marginRight:"40px", fontSize: "18px" ,fontWeight:"500" }}>
                  <a className="nav-link" href="#pricing">Experience</a>
                </li>
                <li className="nav-item" style={{ marginRight:"40px", fontSize: "18px" ,fontWeight:"500" }}>
                  <a className="nav-link" href="#pricing">My CV</a>
                </li>
                <li className="nav-item" style={{ marginRight:"40px", fontSize: "18px" ,fontWeight:"500" }}>
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      
      <section id="hero" className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>Hi, I’m Ranjith. Nice to meet you.</h1>
              <p>Innovative Front End Developer with 2 years experience building responsive websites in the recruiting industry. Work in HTML, CSS, JavaScript, React along with modern libraries and frameworks, which would enable me as a fresh graduate to grow while fulfilling the organizational goals.</p>
              <a href="#signup" className="btn btn-primary">Contact Me</a>
            </div>
            <div className="col-md-6">
              <img src={prof} style={{ marginLeft:"80px"} } className="img-fluid" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>

      {/* <section id="features" className="features">
        <div className="container">
          <h2>Features</h2>
          <div className="row">
            <div className="col-md-4">
              <h3>Feature 1</h3>
              <p>Description of feature 1 goes here.</p>
            </div>
            <div className="col-md-4">
              <h3>Feature 2</h3>
              <p>Description of feature 2 goes here.</p>
            </div>
            <div className="col-md-4">
              <h3>Feature 3</h3>
              <p>Description of feature 3 goes here.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="pricing" className="pricing">
        <div className="container">
          <h2>Pricing</h2>
          <p>Choose the plan that works best for you.</p>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3>Basic</h3>
                  <p>$10/month</p>
                  <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                  <a href="#signup" className="btn btn-secondary">Sign Up</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3>Premium</h3>
                  <p>$20/month</p>
                  <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                  </ul>
                  <a href="#signup" className="btn btn-secondary">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Have questions? We're here to help!</p>
          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <textarea className="form-control" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </section> */}

      {/* <footer>
        <div className="container">
          <p>&copy; 2024 Company Name. All Rights Reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;
