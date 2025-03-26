import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./components.css";

const OtherTech = () => {
    const { student, loading, error } = useSelector((state) => state.studentSlice);
    
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;
    if (!student) return <h1>No Student Data Found</h1>;

    return (
        <div>
            <div className="essContainer">
                <h1>Other Technologies</h1>
                <img src={`data:image/jpeg;base64,${student.image}`} alt="Student" />
                <p className="rollNO">Roll No: {student.rollNo}</p>
                <p className="name">Name: {student.name}</p>
            </div>

            <div className="p-cards">
                {student.other ? (
                    Object.entries(student.other).map(([subject, score], index) => {
                        const bgColor = getRandomColor();
                        return (
                            <div key={index} className="p-card" style={{ backgroundColor: bgColor }}>
                                <h3>{subject}</h3>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${score}%`,
                                            backgroundColor: getProgressColor(score),
                                        }}
                                    ></div>
                                </div>
                                <p>{score}%</p>
                            </div>
                        );
                    })
                ) : (
                    <p>No Other Technologies data available</p>
                )}
            </div>
        </div>
    );
};

const getRandomColor = () => {
    const colors = ["#FFC1CC", "#FFD700", "#98FB98", "#87CEFA", "#FFA07A", "#DDA0DD"];
    return colors[Math.floor(Math.random() * colors.length)];
};

const getProgressColor = (score) => {
    if (score >= 80) return "#4CAF50";
    if (score >= 50) return "#FF9800";
    return "#F44336"; 
};

export default OtherTech;
