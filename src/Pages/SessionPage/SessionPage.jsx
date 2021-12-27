import React from 'react';
import TopNavbar from '../../Components/Navbar/TopNavbar';
import SidebarSession from '../../Components/SidebarSession/SidebarSession';
function SessionPage() {
    return (
        <div>
            <TopNavbar/>
            <SidebarSession/>
            <div className="text-center mt-5">Session Page</div>
        </div>
    );
}

export default SessionPage;