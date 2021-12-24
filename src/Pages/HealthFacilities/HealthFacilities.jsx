import React from 'react';
import TableFrame from '../../Components/Table/TableFrame';
import { FaskesData } from '../Models/StaticFaskes';

function HealthFacilities() {
    return (
        <div>
            Health Facilities
            <section>
                <TableFrame data={FaskesData} domain="faskes"/>
            </section>
        </div>
    );
}

export default HealthFacilities;