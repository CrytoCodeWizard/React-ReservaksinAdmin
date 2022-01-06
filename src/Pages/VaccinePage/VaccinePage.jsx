import React from 'react';
import ActionButtonFaskes from '../../Components/ActionButton/ActionButtonFaskes';
// import MenuVaksin from '../../Components/MenuVaksin/MenuVaksin';
import TopNavbar from '../../Components/Navbar/TopNavbar';

function VaccinePage() {
    return (
        <div>
            
            <TopNavbar/>
            <ActionButtonFaskes/>
            {/* <MenuVaksin/> */}
            <div className="text-center">Vaccine</div>
        </div>
    );
}

export default VaccinePage;