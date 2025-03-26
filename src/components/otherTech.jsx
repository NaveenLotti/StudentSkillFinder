import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./components.css"

const OtherTech = () => {
    const{student, loading, error} = useSelector((state) => state.studentSlice);
    console.log(student);

    useEffect(() => {
        
    }, [student]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;
    if (!student) return <h1>No Student Data Found</h1>;
    return (
        <div>
            <div className="essContainer">
                <h1>Programming Languages</h1>
                <img src={`data:image/jpeg;base64,${student.image}`} alt="StudentImage" />
                <p className="rollNO">Roll No: {student.rollNo}</p>
                <p className="name">Name: {student.name}</p>
            </div>

            {student.other ? (
                <ul>
                    {Object.entries(student.other).map(([subject, score], index) => (
                        <li key={index}>
                            <strong>{subject}:</strong> {score}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No Otherr Technologies data available</p>
            )}
        </div>
    );
};

export default OtherTech;