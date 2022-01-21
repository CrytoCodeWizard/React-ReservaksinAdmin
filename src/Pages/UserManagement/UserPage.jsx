import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import DataTableUser from "../../Components/Table/User/DataTable";

function UserPage() {
    return (
        <div className="page-wrapper">
            <PageTitle title="User Management" />
            <br/>
            <section className="m-3">
                <DataTableUser/>
            </section>
        </div>
    );
}

export default UserPage;
