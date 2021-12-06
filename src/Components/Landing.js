import React from "react";
import "./CSS/Landing.css";
import LogoImage from "../images/todo-list.png";
import CheckIcon from "../images/checklist.png";
import ComputerWoman from "../images/computerWoman.png";
import WorkFlow from "../images/bookkeeping.png";
import Progress from "../images/progressChart.png";
import Complete from "../images/completed.png";
import { Link } from "react-router-dom";

export const  Landing = () => {
    return (
      <div className="pageBody">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <img
              src={LogoImage}
              alt="OpTask Logo"
              style={{ height: "100px", width: "100px" }}
            />
            <h3 className="navbar-nav linkText" href="/">
              Taskmanager
            </h3>
            <button
              className="navbar-toggler button-color"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link
                  type="button"
                  className="btn btn-outline-info btn-lg signUpBtn"
                  to="/login"
                >
                  Login Up
                </Link>
                
                  <a className="nav-link" aria-current="page" href="/login">
                    Log In
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="page-header gradient">
          <div className="container pt-3">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-5">
                <h1>Welcome to Taskmanager!</h1>
                <p>A space where you can easily manage all your tasks.</p>
                <Link
                  type="button"
                  className="btn btn-outline-info btn-lg signUpBtn"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </div>
              <div className="col-md-5">
                <img
                  src={CheckIcon}
                  alt="a man standing before a completed checklist"
                />
              </div>
              {/* image from: https://www.vecteezy.com/vector-art/2043859-man-completed-checklist */}
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,138.7C672,128,768,64,864,53.3C960,43,1056,85,1152,90.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </header>
        <section className="optask">
          <div className="container text-center" role="main">
            <div className="row g-5 align-items-center justify-content-center">
              {/* Image from: https://www.vecteezy.com/free-vector/project-management*/}
              <div className="col-md-3">
                <img
                  src={WorkFlow}
                  alt="work flow graphic"
                  className="img-fluid pic1"
                />
              </div>
              {/* Image from: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.project-management-prepcast.com%2Ffree%2Fpmp-exam%2Farticles%2F1108-online-kanban-tools-a-buyers-guide&psig=AOvVaw21sD2KVkPOXuJVAJgOmkhR&ust=1617667855440000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKC3lMXo5e8CFQAAAAAdAAAAABAD */}
              <div className="col-md-4">
                <img
                  src={Progress}
                  alt="black board with to do, in progress, and done columns"
                  className="img-fluid"
                />
              </div>
              {/* Image from: https://www.vecteezy.com/vector-art/2043827-woman-completes-checklist */}
              <div className="col-md-3">
                <img
                  src={Complete}
                  alt="woman checking off to do list"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="feature gradient">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,64L48,58.7C96,53,192,43,288,64C384,85,480,139,576,181.3C672,224,768,256,864,229.3C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="container" role="complementary">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-5">
                <img src={ComputerWoman} alt="woman working at a computer" />
              </div>
              {/* image from: https://www.vecteezy.com/vector-art/227880-female-developer-vector*/}
              <div className="col-md-5">
                <h2 className="my-3">What can Taskmanger do?</h2>
                <p className="my-4">
                One of the most important reasons you should use a to do list is that it will help you stay organised. 
                When you write all your tasks in a list, they seem more manageable 
                When you've got a clear outline of the tasks you've got to do and those you've completed, 
                it helps you stay focused.
                </p>
                <ul>
                  <li> Create a Task.</li>
                  <li> Update the Task.</li>
                  <li> Get the Task done.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
       
      </div>
    );
  };
  
  export default Landing;