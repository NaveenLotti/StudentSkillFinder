import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const Academics = () =>{
    const{student, loading, error} = useSelector((state) => state.studentSlice);
    console.log(student);

    useEffect(() => {
        
    }, [student]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;
    if (!student) return <h1>No Student Data Found</h1>;


    return (
        <>
            <h1>Student Academics</h1>
            <img src={`data:image/jpeg;base64,${student.image}`} alt="StudentImage" />
            <h2>Roll No: {student.rollNo}</h2>
            <h2>Name: {student.name}</h2>
            {student.academic ? (
                <ul>
                    {Object.entries(student.academic).map(([subject, score], index) => (
                        <li key={index}>
                            <strong>{subject}:</strong> {score}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No academic data available</p>
            )}
        </>
    )

    
}

export default Academics