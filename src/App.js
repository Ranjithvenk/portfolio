import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Custom CSS if needed
import port from "../src/logo/portfolio.png";
import cv from "./cv/Ranjith.pdf"
// import nav from "./App.module.css";
import prof from "../src/logo/IMG1.jpg";
import baner from "../src/logo/ban.jpg";
import contact from "../src/logo/cont.jpg";
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

function App() {




  return (
    <div className="container-fluid">

      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ fontSize: "26px", fontWeight: "bolder" }}>
              <img style={{ marginRight: "40px" }} src={port} alt="" width="50" height="35" />Portfolio
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li style={{ marginLeft: "40px", marginRight: "40px", fontSize: "18px", fontWeight: "500" }} className="nav-item">
                  <a className="nav-link" href="#features">About Me</a>
                </li>
                <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#features">Skills</a>
                </li>
                <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#features">Projects</a>
                </li>
                {/* <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#pricing">Experience</a>
                </li> */}
                <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#pricing">My CV</a>
                </li>
                <li className="nav-item" style={{ marginRight: "40px", fontSize: "18px", fontWeight: "500" }}>
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="hero" className="hero">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 port-desc">
              <h1>Hi, I’m Ranjith. Nice to meet you.</h1>
              <p>Innovative Front End Developer with 2 years experience building responsive websites in the recruiting industry. Work in HTML, CSS, JavaScript, React along with modern libraries and frameworks, which would enable me as a fresh graduate to grow while fulfilling the organizational goals.</p>
              <a href="#signup" className="btn btn-primary">Contact Me</a>
            </div>
            <div className="col-md-6">
              <img src={prof} style={{ marginLeft: "10px" }} className="img-fluid" alt="Hero Image" />
            </div>
          </div>
        </div>
      </section>


      <section id="hero" className="hero">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={baner} style={{ marginLeft: "10px" }} className="img-fluid" alt="Hero Image" />
            </div>
            <div className="col-md-6 port-desc">
              <h1>About Me</h1>



              <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={front} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Frontend Developer</h5>
                      <p class="card-text">Adaptable front-end developer with a strong track record in  building responsive websites in the recruiting industry using modern frameworks and Library.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={back} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Backend Developer</h5>
                      <p class="card-text">Adaptable back-end developer with a strong track record in creating efficient, scalable web applications with a deep understanding of RESTful APIs.</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={sql} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">SQL Developer</h5>
                      <p class="card-text">Developed database applications that provide real time information to authorized people throughout the project.</p>

                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section id="hero" className="hero" style={{ marginTop: "60px" }}>
        <div className="container-fluid">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>My Skills</h1>
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



      <section id="hero" className="hero backgrclr" style={{ marginTop: "50px" }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* <div className="col-md-6">
              <img src={exp} style={{ marginLeft: "10px", marginTop:"150px" }} className="img-fluid" alt="Hero Image" />
            </div> */}
            <div className="col-md-12 port-desc">
              <h1 style={{ textAlign: "center", marginTop: "150px" }}>My Projects</h1>
              <p className="col-md-6 port-desc" style={{ textAlign: "center", marginLeft: "400px" }}>I'm a bit of a digital product junky. Over the years I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to design and build my own.</p>


              <div class="d-flex" style={{ marginTop: "100px" }}>
                <div class="col-md-4 card" style={{ marginLeft: "150px" }}>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text"> With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content.</p>
                    {/* <a href="#" class="btn btn-primary">Button</a> */}
                  </div>
                </div>

                <div class="col-md-4 card w-40" style={{ marginLeft: "150px" }}>
                  <div class="card-body ">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content.</p>
                    {/* <a href="#" class="btn btn-primary">Button</a> */}
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>
      </section>


      <section id="download-cv" className=" bg-light" style={{ marginTop: "200px" }} >
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">Download My Curriculum vitae(CV)</h2>
                  <p className="card-text">Click the button below to download my CV.</p>
                  <a href="/path/to/your/cv.pdf" download className="btn btn-primary">Download CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------contact-------------------------------------------------- */}

      <section id="contact-details" className="py-5 bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <img src={contact} className="img-fluid mb-3" alt="Logo" />

            </div>
            <div className="col-lg-6">
              <h2>Contact Form</h2>
              <p>Include your contact form here...</p>
              <ul className="list-unstyled">
                <li><strong>Email:</strong> ranjithv16081999@gmail.com</li>
                <li><strong>Phone:</strong> +91 8220680912</li>
                <li><strong>Address:</strong> Salem, Tamilnadu, India</li>
                <li><strong>Github:</strong> <a href="https://github.com/Ranjithvenk" class="link-primary"></a></li>
                <li><strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/ranjith-venkatachalam/" class="link-primary"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container-fluid">
          <p>&copy; 2024 Company Name. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
