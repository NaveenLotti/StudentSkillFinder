import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentSearch from './components/StudentSearch';
import Academics from './components/academics';
import WebDev from './components/webdev';
import OtherTech from './components/otherTech';
import ProLang from './components/Prolang';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<StudentSearch />} />
                <Route path ='/academics' element={<Academics/>}></Route>
                <Route path='/web-development' element={<WebDev/>}></Route>
                <Route path='/pro-lang' element={<ProLang/>}></Route>
                <Route path='/other-tech' element={<OtherTech/>}></Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
