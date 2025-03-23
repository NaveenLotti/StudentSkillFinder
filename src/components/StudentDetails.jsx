import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StudentDetails = () => {
    const {rollNo} = useParams();
    const[student,setstudent] = useState(null);
    const[loading,setloading] = useState(true);
    const[error,seterror] = useState(null);
    useEffect(() => {
        const fetchstudentDetails = async () =>{
            try{
                const response = await axios.get(`http://localhost:5000/api/getStudent/${rollNo}`);
                if(response.status === 404){
                    seterror("Student not found or error fetching data")
                }
                setstudent(response.data.data)
            } catch(err){
                seterror("Student not found or error fetching data")
            } finally{
                setloading(false);
            }
        }

        fetchstudentDetails();
    },[rollNo])
    
    return(
        <div className="student-details">
            <h2>Student Details</h2>
            {loading && <p>Loading...</p>}
            {error && <p> {error}</p>}
            {student && ( 
                <div>
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Roll Number:</strong> {student.rollNo}</p>
                    <p><strong>Skills:</strong> {JSON.stringify(student.skills)}</p>
                </div>
        )}
            
            <Link to="/">
                <button>Back</button>
            </Link>

        </div>
    )
}

export default StudentDetails;