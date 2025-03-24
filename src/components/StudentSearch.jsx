import React, { useState } from "react";
import "./StudentSearch.css";
import { useNavigate } from "react-router-dom";
import logo from "../assest/pic.jpeg";

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
                    <a href="#">Contact</a>
                    <a href="#">Help</a>
                </div>
            </div>
            <div className="card" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <div className="student-search">
                    <input
                        type="text"
                        name="rollNo"
                        placeholder="Enter Roll Number"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                    />
                    <button onClick={handleSubmit}>Search</button>
                </div>
            </div>
        </div >
    );
};

export default StudentSearch;
