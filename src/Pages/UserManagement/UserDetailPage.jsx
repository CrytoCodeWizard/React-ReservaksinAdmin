import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from "react-router-dom";
import CardRiwayatVaksin from "../../Components/CardRiwayatVaksin/CardRiwayatVaksin";
import UserForm from "../../Components/UserForm/UserForm";
import PageTitle from "../../Components/PageTitle/PageTitle";

function UserDetailPage(props) {
    const {id} = useParams();
    const {state: data} = useLocation();

    return (
        <div className='page-wrapper'>
            <PageTitle title="User Detail"/>
            <div className="d-flex justify-content-around">
                <UserForm data={data}/>
                <CardRiwayatVaksin />
            </div>
        </div>
    );
}

export default UserDetailPage;