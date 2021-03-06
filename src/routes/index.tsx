import React, { useContext } from "react";
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from "../hooks/AuthHook";

import Auth from '../pages/Auth';
import LogIn from '../pages/LogIn';
import ListGame from "../pages/ListGame";
import Games from "../pages/Games";

const RoutesApp: React.FC = () => {

    const { isAuthenticated } = useContext(AuthContext)

    return(
        <Routes>
            {isAuthenticated ?             
            <>
                <Route path="/" element={<ListGame />} />
                <Route path="/games" element={ <Games /> } />
            </> :
            <>
                <Route path="/" element={<Auth />}/>
                <Route path="/signUp" element={<LogIn />} />
            </>
            }
        </Routes>   
    )
}

export default RoutesApp;
