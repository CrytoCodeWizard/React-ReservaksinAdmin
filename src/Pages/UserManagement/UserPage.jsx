import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import DataTableUser from "../../Components/Table/User/DataTable";
import { useSelector} from "react-redux";
import Unauthorized from "../../Components/Unauthorized/Unauthorized";

function UserPage() {
    const isLogged = useSelector((state) => state.auth.login);
    if (!isLogged) {
        return <Unauthorized />;
    }
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
