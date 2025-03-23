import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentSearch from './components/StudentSearch';
import StudentDetails from './components/StudentDetails';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<StudentSearch />} />
                <Route path='/student/:rollNo' element={<StudentDetails />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
