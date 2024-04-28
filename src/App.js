import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import port from "../src/logo/portfolio.png";
import prof from "../src/logo/IMG1.jpg";
import baner from "../src/logo/ban.jpg";
import contact from "../src/logo/cont.png";
import front from "../src/logo/front.jpg";
import back from "../src/logo/back.jpg";
import sql from "../src/logo/sql.jpg";
import fr1 from "../src/logo/htm.jpg";
import fr2 from "../src/logo/csss.jpg";
import fr3 from "../src/logo/javascr.jpg";
import fr4 from "../src/logo/reac.jpg";
import fr5 from "../src/logo/bootstra.jpg";
import bk1 from "../src/logo/jav.jpg";
import bk2 from "../src/logo/springbt.jpg";
import bk4 from "../src/logo/pssql.png";
import tol1 from "../src/logo/vscod.jpg";
import tol2 from "../src/logo/pm.png";
import tol3 from "../src/logo/svn.png";
import tol4 from "../src/logo/git.jpg";
import cv from "./cv/Ranjith.pdf"

function App() {

  return (
    <div className="container-fluid">

      {/* ------------------------------------------------------------------navbar-------------------------------------------------- */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ fontSize: "26px", fontWeight: "bolder" }}>
              <img style={{ marginRight: "40px" }} src={port} alt="image" width="50" height="35" />Portfolio
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li style={{ marginLeft: "40px", marginRight: "40px", fontSize: "18px", fontWeight: "500" }} className="nav-item">
                  <a className="nav-link" href="#aboutme">About Me</a>
                </li>
                <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#cv">My CV</a>
                </li>
                <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* ---------------------------------------------------------------overview--------------------------------------------------- */}

      <section id="hero" className="hero">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 port-desc">
              <h1>Hi, I’m Ranjith. Nice to meet you.</h1>
              <p>Innovative Front End Developer with 2 years experience building responsive websites in the recruiting industry. Work in HTML, CSS, JavaScript, React along with modern libraries and frameworks, which would enable me as a fresh graduate to grow while fulfilling the organizational goals.</p>
              <a href="#contact" className="btn btn-primary">Contact Me</a>
            </div>
            <div className="col-md-6">
              <img src={prof} style={{ marginLeft: "10px", marginTop: "30px" }} className="img-fluid" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------About---------------------------------------------------- */}

      <section id="aboutme" className="hero" style={{ marginTop: "80px" }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={baner} style={{ marginLeft: "10px" }} className="img-fluid" alt="Hero Image" />
            </div>
            <div className="col-md-6 port-desc">
              <h1>About Me</h1>
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={front} className="img-fluid rounded-start" alt="image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Frontend Developer</h5>
                      <p className="card-text">Adaptable front-end developer with a strong track record in  building responsive websites in the recruiting industry using modern frameworks and Library.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={back} className="img-fluid rounded-start" alt="image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Backend Developer</h5>
                      <p className="card-text">Adaptable back-end developer with a strong track record in creating efficient, scalable web applications with a deep understanding of RESTful APIs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={sql} className="img-fluid rounded-start" alt="image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">SQL Developer</h5>
                      <p className="card-text">Developed database applications that provide real time information to authorized people throughout the project.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------my Skills------------------------------------------------ */}

      <section id="skills" className="hero" style={{ marginTop: "120px" }}>
        <div className="container-fluid">
          <h1 style={{ textAlign: "center", marginBottom: "60px" }}>My Skills</h1>
          <div className="col-md-12 port-desc1">

            <div className="container border port-desc22" >
              <h1 style={{ textAlign: "center", marginBottom: "40px", marginTop: "20px" }}>Frontend Technology</h1>
              <div className="row">
                <div className="col-md-6">
                  <img src={fr1} className="img-fluid mb-3" alt="Image 1" />
                </div>
                <div className="col-md-6">
                  <img src={fr2} className="img-fluid mb-3" alt="Image 2" />
                </div>
                <div className="col-md-6">
                  <img src={fr3} className="img-fluid mb-3 w-50" style={{ marginLeft: "60px" }} alt="Image 3" />
                </div>
                <div className="col-md-6">
                  <img src={fr4} className="img-fluid mb-3 w-50" style={{ marginLeft: "60px" }} alt="Image 3" />
                </div>
              </div>
            </div>

            <div className="container border port-desc22">
              <h1 style={{ textAlign: "center", marginBottom: "40px", marginTop: "20px" }}>Backend Technology</h1>
              <div className="row">
                <div className="col-md-6">
                  <img src={bk1} className="img-fluid mb-3 w-50" style={{ marginLeft: "60px" }} alt="Image 1" />
                </div>
                <div className="col-md-6">
                  <img src={bk2} className="img-fluid mb-3 h-100" style={{ marginTop: "-10px" }} alt="Image 2" />
                </div>
                <div className="col-md-6">
                  <img src={bk4} className="img-fluid mb-3 w-50" style={{ marginLeft: "60px", marginTop: "50px" }} alt="Image 3" />
                </div>
                <div className="col-md-6">
                  <img src={tol2} className="img-fluid mb-3 w-50" style={{ marginLeft: "60px", marginTop: "50px" }} alt="Image 2" />
                </div>
              </div>
            </div>

            <div className="container border port-desc22">
              <h1 style={{ textAlign: "center", marginBottom: "40px", marginTop: "20px" }}>Tools</h1>
              <div className="row">
                <div className="col-md-6">
                  <img src={tol1} className="img-fluid mb-3 w-50" style={{ marginLeft: "60px" }} alt="Image 1" />
                </div>
                <div className="col-md-6">
                  <img src={tol4} className="img-fluid mb-3 w-50" style={{ marginLeft: "60px" }} alt="Image 3" />
                </div>
                <div className="col-md-6">
                  <img src={fr5} className="img-fluid mb-3" alt="Image 3" style={{ marginTop: "50px" }} />
                </div>
                <div className="col-md-6">
                  <img src={tol3} className="img-fluid mb-3" style={{ marginTop: "50px" }} alt="Image 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------Project------------------------------------------------- */}

      <section id="projects" style={{ marginTop: "100px", height: "auto" }}>
        <div className="container-fluid" >
          <h2 className="mb-4">Project Experience</h2>
          <div className="row">
            <div className="col-lg-6" style={{ marginBottom: "30px" }}>
              <div className="card project-card">
                <img src={front} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Operation Planner and Management System (OPMS)</h5>
                  <p className="card-text">This product is a web-based system, which focuses on INDIAN NAVY on operational planner, which has features like Aviation, OPMS lite, OPMS Main and Workup Module. Designed and developed user- friendly Web applications from concept to deployment, ensuring a seamless user experience.</p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6" style={{ marginBottom: "30px" }}>
              <div className="card project-card">
                <img src={front} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Operation Planner and Management System (OPMS)</h5>
                  <p className="card-text">This product is a web-based system, which focuses on INDIAN NAVY on operational planner, which has features like Aviation, OPMS lite, OPMS Main and Workup Module. Designed and developed user- friendly Web applications from concept to deployment, ensuring a seamless user experience.</p>
                  <a href="#" className="btn btn-primary">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------Resume--------------------------------------------------- */}

      <section id="cv" className=" bg-light" style={{ marginTop: "100px" }} >
        <div className="container-fluid" style={{ height: "300px" }}>
          <div className="row">
            <div className="col text-center">
              <div className="card">
                <div className="card-body CV-01" style={{ height: "300px" }}>
                  <h2 className="card-title">Download My Curriculum vitae(CV)</h2>
                  <p className="card-text">Click the button below to download my CV.</p>
                  <a href={cv} download="Resume" className="btn btn-primary">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------contact------------------------------------------------- */}

      <section id="contact" className="py-5 mt-5  ">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-6 ">
              <img src={contact} className="img-thumbnail" style={{ height: "500px", width: "550px", marginTop: "-80px", border: "none" }} alt="Logo" />

            </div>
            <div className="col-lg-6" style={{ marginTop: "10px" }}>
              <h2 style={{ marginBottom: "30px", marginTop: "20px" }}>Contact Details</h2>
              <ul className="list-unstyled con-sty">
                <li><strong>Email:</strong>&nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; ranjithv16081999@gmail.com</li>
                <li><strong>Phone:</strong>&nbsp;  &nbsp;  &nbsp; &nbsp;  +91 8220680912</li>
                <li><strong>Address:</strong>&nbsp; &nbsp; &nbsp; Salem, Tamilnadu, India</li>
                <li><strong>Github:</strong>&nbsp;  &nbsp;  &nbsp; &nbsp;  <a style={{ fontStyle: "italic" }}> https://github.com/Ranjithvenk</a> </li>
                <li><strong>Linkedin:</strong> &nbsp;  &nbsp; <a style={{ fontStyle: "italic" }} >https://www.linkedin.com/in/ranjith-venkatachalam</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------footer----------------------------------------------------------- */}

      <div className="container-fluid" style={{ marginTop: "100px" }}>
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#ECEFF1" }}
        >
          <section
            className="d-flex justify-content-between p-4 text-black"
            style={{ backgroundColor: " #21D192" }}
          >
            <div className="me-5">
              <span style={{ fontSize: "20px" }}>Get connected with me on social networks:</span>
            </div>
            <div className="hhh">
              <a href="#" className="text-black me-4 ">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="bi bi-google"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="" className="text-black me-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/Ranjithvenk" className="text-black me-4">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </section>

          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Highlights</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ backgroundColor: " #7c4dff", width: "60px", height: "2px" }}
                  />
                  <p>
                    A successful website does three things:
                    It attracts the right kinds of visitors.
                    Guides them to the main services or product you offer.
                    Collect Contact details for future ongoing relation
                  </p>
                </div>


                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ backgroundColor: " #7c4dff", width: "60px", height: "2px" }}
                  />
                  <p><i className="bi bi-shop"></i> &nbsp; &nbsp; Salem, Tamilnadu- 637303.</p>
                  <p><i className="bi bi-envelope"></i> &nbsp; &nbsp; ranjithv1608@gmail.com</p>
                  <p><i className="bi bi-telephone"></i> &nbsp; &nbsp; +91 8220680912</p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-3" >
            © 2024 Copyright:
            <a className="text-dark" href="https://github.com/Ranjithvenk"
            >RanjithPortfolio.com</a>
          </div>

        </footer>
      </div>

      {/* -------------------------------------------------------offcanvas-------------------------------------------------- */}

      <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <h5 className="text-uppercase fw-bold" id="staticBackdropLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="off-desc">
            <h6>About Me</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: "blue", width: "260px", height: "2px" }}
            />
            <h6>Skills</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: "blue", width: "260px", height: "2px" }}
            />
            <h6>Projects</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: "blue", width: "260px", height: "2px" }}
            />
            <h6>My Resume</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: "blue", width: "260px", height: "2px" }}
            />
            <h6>Contact</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{ backgroundColor: "blue", width: "260px", height: "2px" }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
