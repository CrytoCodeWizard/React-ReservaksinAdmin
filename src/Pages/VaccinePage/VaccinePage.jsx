import React from 'react';
import MenuVaksin from '../../Components/MenuVaksin/MenuVaksin';
import TopNavbar from '../../Components/Navbar/TopNavbar';

function VaccinePage() {
    return (
        <div>
            
            <TopNavbar/>
            <MenuVaksin/>
            <div className="text-center">Vaccine</div>
        </div>
    );
}

export default VaccinePage;