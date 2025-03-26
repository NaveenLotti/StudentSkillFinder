import React, { useState } from "react";
import "./StudentSearch.css";
import { useNavigate } from "react-router-dom";
import logo from "../assests/text.png";
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
      {/* Navbar */}
      <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="nav-right">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </div>
      </div>

      {/* Search Card */}
      <div className="card">
        <div className="student-search">
          <form onSubmit={handleSubmit} className="search-form">
            <div className="input-container">
              <input
                type="text"
                name="rollNo"
                className="input"
                placeholder="Enter Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
              <button type="submit">
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Component */}
      <Contact />
    </div>
  );
};

export default StudentSearch;
