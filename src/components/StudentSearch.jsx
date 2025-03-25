import React, { useState } from "react";
import "./StudentSearch.css";
import { useNavigate } from "react-router-dom";
import logo from "../assest/pic.png";
import Contact from "./Contact";

const StudentSearch = () => {
  const [rollNo, setRollNo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rollNo) {
      alert("Please enter a roll number");
      return;
    }
    navigate(`/student/${rollNo}`);
  };

  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="logo" />
        <div className="nav-left">
        </div>
        <div className="nav-right">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="contact.jsx">Contact</a>
          <a href="#">Help</a>
        </div>
      </div>
      <div className="card" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <div className="student-search">
          {/* <input
                        type="text"
                        name="rollNo"
                        placeholder="Enter Roll Number"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                    />
                     */}
          <div class="grid"></div>
          <div id="poda">
            <div class="glow"></div>
            <div class="darkBorderBg"></div>
            <div class="darkBorderBg"></div>
            <div class="darkBorderBg"></div>

            <div class="white"></div>

            <div class="border"></div>

            <div id="main">
              <input placeholder="Enter RollNumber" type="text" name="text" class="input" />
              <div id="input-mask"></div>
              <div id="pink-mask"></div>
              <div class="filterBorder"></div>

              <div id="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  height="24"
                  fill="none"
                  class="feather feather-search"
                >
                  <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
                  <line
                    stroke="url(#searchl)"
                    y2="16.65"
                    y1="22"
                    x2="16.65"
                    x1="22"
                  ></line>
                  <defs>
                    <linearGradient gradientTransform="rotate(50)" id="search">
                      <stop stop-color="#f8e7f8" offset="0%"></stop>
                      <stop stop-color="#b6a9b7" offset="50%"></stop>
                    </linearGradient>
                    <linearGradient id="searchl">
                      <stop stop-color="#b6a9b7" offset="0%"></stop>
                      <stop stop-color="#837484" offset="50%"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <button>
            <span>Button</span>
          </button>
        </div>
      </div>
      <Contact />
    </div >
  );
};

export default StudentSearch;
