import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import TopNavbar from '../Components/Navbar/TopNavbar';
import Dashboard from '../Pages/Dashboard/Dashboard';
import SessionPage  from '../Pages/SessionPage/SessionPage'
import VaccinePage from '../Pages/VaccinePage/VaccinePage';
import HealthFacilities from '../Pages/HealthFacilities/HealthFacilities';
import UserPage from '../Pages/UserManagement/UserPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage'
import Login from '../Pages/Login/Login';
import SessionDetailPage from '../Pages/SessionPage/SessionDetailPage';
import SessionCurrent from '../Pages/SessionPage/SessionCurrent';
import SessionUpcoming from '../Pages/SessionPage/SessionUpcoming';
import SessionHistory from '../Pages/SessionPage/SessionHistory';
import News from '../Pages/News/News';
import UserDetailPage from'../Pages/UserManagement/UserDetailPage';
import Unauthorized from "../Components/Unauthorized/Unauthorized";

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<><TopNavbar/><Dashboard/></>}/>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/session" element={<><TopNavbar/><SessionPage/></>}/>
            <Route path="/session/:id" element={<><TopNavbar/><SessionDetailPage/></>}/>
            <Route path="/session/current" element={<><TopNavbar/><SessionCurrent/></>}/>
            <Route path="/session/history" element={<><TopNavbar/><SessionHistory/></>}/>
            <Route path="/session/upcoming" element={<><TopNavbar/><SessionUpcoming/></>}/>
            <Route path="/vaccine" element={<><TopNavbar/><VaccinePage/></>}/>
            <Route path="/faskes" element={<><TopNavbar/><HealthFacilities/></>}/>
            <Route path="/user" element={<><TopNavbar/><UserPage/></>}/>
            <Route path="/user/:id" element={<><TopNavbar/><UserDetailPage/></>}/>
            <Route path="/news" element={<><TopNavbar/><News/></>}/>
            <Route path="*" element={<><TopNavbar/><Unauthorized/></>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Router;
