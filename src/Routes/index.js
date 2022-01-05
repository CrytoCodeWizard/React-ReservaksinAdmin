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
function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/session" element={<SessionPage/>}/>
            <Route path="/vaccine" element={<VaccinePage/>}/>
            <Route path="/faskes" element={<><TopNavbar/><HealthFacilities/></>}/>
            <Route path="/user" element={<><TopNavbar/><UserPage/></>}/>
            <Route path="*" element={<><TopNavbar/><NotFoundPage/></>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Router;