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
import News from '../Pages/News/News';

function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<><TopNavbar/><Dashboard/></>}/>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/session" element={<><TopNavbar/><SessionPage/></>}>
                {/* <Route path="/:id" element={<><TopNavbar/><SessionDetailPage/></>}/>
                <Route path="/current" element={<><TopNavbar/><SessionCurrent/></>}/>
                <Route path="/history" element={<><TopNavbar/><SessionDetailPage/></>}/>
                <Route path="/upcoming" element={<><TopNavbar/><SessionDetailPage/></>}/> */}
            </Route>
            <Route path="/vaccine" element={<><TopNavbar/><VaccinePage/></>}/>
            <Route path="/faskes" element={<><TopNavbar/><HealthFacilities/></>}/>
            <Route path="/user" element={<><TopNavbar/><UserPage/></>}>
                <Route path=":id" element={<><TopNavbar/><UserPage/></>}/>
            </Route>
            <Route path="/news" element={<><TopNavbar/><News/></>}/>
            <Route path="*" element={<><TopNavbar/><NotFoundPage/></>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default Router;