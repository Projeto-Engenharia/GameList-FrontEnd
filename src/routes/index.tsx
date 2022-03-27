import React from "react";
import { Routes, Route } from 'react-router-dom';

import Auth from '../pages/Auth';

const RoutesApp: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element={<Auth />}/>
        </Routes>   
    )
}

export default RoutesApp;
