import React, { useState, useEffect } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ActionButtonFaskes from "../../Components/ActionButton/ActionButtonFaskes";
import { VaksinData } from "../Models/StaticVaccine";
import _ from "lodash";
import { BsFillCircleFill } from "react-icons/bs";
import "./Vaccine.css";
import axios from "axios";
import TableVaksin from "../../Components/Table/Vaksin/TableVaksin";

function VaccinePage() {
    //state for vaccine
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataVaksin, setDataVaksin] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const handleFetch = async () => {
            let result;
            try {
                const instance = axios.create({
                    baseURL: "http://localhost:9090",
                });
                result = await instance.get(`/vaccine`);
                setIsLoaded(true);
                setDataVaksin(result.data.data);
            } catch (err) {
                console.log(err);
                setIsLoaded(true);
                setError(err);
            }
        };
        handleFetch();
    }, []);

    console.log(dataVaksin);
    let sumOfJenis = VaksinData.length;
    let sumOfStock = _.sumBy(VaksinData, "stok");
    console.log("isi soj", sumOfJenis);

    if (error) {
        return <div>Erorr: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return (
        <div className="page-wrapper">
            <PageTitle title="Vaksin" />
            <section>
                <ActionButtonFaskes/>
            </section>
            <section className="t-vaksin px-3">
                <TableVaksin data={dataVaksin} />
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
