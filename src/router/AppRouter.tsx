import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/home"} element={<Home/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route
                path="*"
                element={<Navigate to="/error" replace/>}
            />
        </Routes>
    );
};

export default AppRouter;