import React from "react";
import TableFrame from "../../Components/Table/TableFrame";
import { FaskesData } from "../Models/StaticFaskes";
import ActionButtonFaskes from "../../Components/ActionButton/ActionButtonFaskes";
import PageTitle from "../../Components/PageTitle/PageTitle";

function HealthFacilities() {
    return (
        <div className="page-wrapper">
                <PageTitle title="Health Facilities" />
                <section>
                    <ActionButtonFaskes />
                </section>
                <section className="t-faskes">
                    <TableFrame data={FaskesData} domain="faskes" />
                </section>
        </div>
    );
}

export default HealthFacilities;
