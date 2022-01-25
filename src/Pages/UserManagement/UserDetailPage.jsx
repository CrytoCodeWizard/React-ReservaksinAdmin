import React, {useState, useEffect} from 'react';
import {useParams, useLocation} from "react-router-dom";
import CardRiwayatVaksin from "../../Components/CardRiwayatVaksin/CardRiwayatVaksin";
import UserForm from "../../Components/UserForm/UserForm";
import PageTitle from "../../Components/PageTitle/PageTitle";
import axios from "axios";
import Error500 from "../../Components/Error/Error500";

function UserDetailPage(props) {
    const {id} = useParams();
    const {state: data} = useLocation();

    //state for vaksinasi
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataVaksinasi, setDataVaksinasi] = useState([]);
    const [error, setError] = useState();

    const handleFetch = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`/booking/citizen/${id}`);
            setIsLoaded(true);
            setDataVaksinasi(result.data.data);
        } catch (err) {
            if (err.response.status === 500) {
                return <Error500 />;
            }
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };

    return (
        <div className='page-wrapper'>
            <PageTitle title="User Detail"/>
            <div className="d-flex justify-content-around">
                <UserForm data={data}/>
                <CardRiwayatVaksin data={dataVaksinasi} />
            </div>
        </div>
    );
}

export default UserDetailPage;