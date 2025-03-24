import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";



const academics = () =>{
    const{student, loading, error} = useSelector((state) => state.studentSlice);
    console.log(student);
    return (
        <>
            <h1>{student}</h1>
        </>
    )

    
}

export default academics