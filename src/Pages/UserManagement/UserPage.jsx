import React from "react";
import UserForm from "../../Components/UserForm/UserForm";
import PageTitle from "../../Components/PageTitle/PageTitle";
import CardRiwayatVaksin from "../../Components/CardRiwayatVaksin/CardRiwayatVaksin";

function UserPage() {
    return (
        <div className="page-wrapper">
            <PageTitle title="User Management" />
            <div className="d-flex justify-content-around">
                <UserForm />
                <CardRiwayatVaksin />
                {/* <TimelineContoh /> */}
            </div>
        </div>
    );
}

export default UserPage;
