import React from "react";
import { Routes, Route } from 'react-router-dom';

import Auth from '../pages/Auth';
import SignOn from '../pages/SignOn';

const RoutesApp: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Auth />}/>
            <Route path="/signOn" element={<SignOn />} />
        </Routes>   
    )
}

export default RoutesApp;
