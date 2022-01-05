import React from 'react';
import TableFrame from '../../Components/Table/TableFrame';
import { FaskesData } from '../Models/StaticFaskes';
import GetProvince from '../../Components/FormWilayah/getProvince';
function HealthFacilities() {
    return (
        <div>
            Health Facilities
            <section className="t-faskes">
                <TableFrame data={FaskesData} domain="faskes"/>
            </section>
            <section>
                <GetProvince/>
            </section>
        </div>
    );
}

export default HealthFacilities;