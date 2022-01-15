import React, { useState, useEffect } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import _ from "lodash";
import { BsFillCircleFill } from 'react-icons/bs';
import './Vaccine.css';
import ActionButtonVaksin from '../../Components/ActionButton/ActionButtonVaksin'
import axios from "axios";
import TableVaksin from "../../Components/Table/Vaksin/TableVaksin";
// import {useSelector} from "react-redux";
// import {ToastSuccess} from "../../Components/Toast/Toast";

function VaccinePage() {
    //state for vaccine
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataVaksin, setDataVaksin] = useState([]);
    const [error, setError] = useState();

    const handleFetch = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`/vaccine`);
            setIsLoaded(true);
            setDataVaksin(result.data.data);
        } catch (err) {
            if(err.response.status === 500){
                return <><h1>Datanya Kosong</h1></>
            }
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };

    useEffect(() => {
        handleFetch();
    },[]);

    //lodash for legend
    let sumOfJenis = dataVaksin.length;
    let sumOfStock = _.sumBy(dataVaksin, "stok");

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
        <div className="page-wrapper">
            <PageTitle title="Vaksin" />
            <section>
                <ActionButtonVaksin handleFetch={handleFetch}/>
            </section>
            <section className="t-vaksin px-3">
                <TableVaksin data={dataVaksin} handleFetch={handleFetch} />
            </section>
            <section className="diagram-legend d-flex flex-row">
                <small className="px-2">
                    <BsFillCircleFill color="blue" size={8} /> Jenis:{" "}
                    <span className="fw-bold" style={{ color: "deepskyblue" }}>
                        {sumOfJenis}
                    </span>
                </small>
                <small className="px-2">
                    <BsFillCircleFill color="navy" size={8} /> Stok:{" "}
                    <span className="fw-bold" style={{ color: "deepskyblue" }}>
                        {sumOfStock}
                    </span>
                </small>
            </section>
        </div>
    );
}

export default VaccinePage;
