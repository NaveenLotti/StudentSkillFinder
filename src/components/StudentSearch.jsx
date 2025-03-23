import React from "react";
import { useState } from 'react'
import "./StudentSearch.css"
import { Link, useNavigate } from "react-router-dom";

const StudentSearch = () => {
    const [rollNo, setRollNo] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!rollNo){
            alert("Please enter a roll number");
            return
        }
        navigate(`/student/${rollNo}`);
    }

    return (
        <div className="search-div">
            <div className="student-search">
            <label htmlFor="rollNo">Roll Number:</label>
            <input type="text" 
            name="rollNo"
            placeholder="Enter Roll Number" 
            value={rollNo} 
            onChange={(e)=>setRollNo(e.target.value)}/>
        </div>
        <button onClick={handleSubmit}>Search</button>
        </div>
        
    )
}

export default StudentSearch