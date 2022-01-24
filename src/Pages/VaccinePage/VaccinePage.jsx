import React, { useState, useEffect } from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import _ from "lodash";
import { BsFillCircleFill } from "react-icons/bs";
import "./Vaccine.css";
import ActionButtonVaksin from "../../Components/ActionButton/ActionButtonVaksin";
import axios from "axios";
import TableVaksin from "../../Components/Table/Vaksin/TableVaksin";
import Loading from "../../Components/Loading/Loading";
import Error500 from "../../Components/Error/Error500";
import {useDispatch} from "react-redux";
import {setStatVaksin} from '../../Config/Redux/DashboardSlice';

function VaccinePage() {
    //state for vaccine
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataVaksin, setDataVaksin] = useState([]);
    const [error, setError] = useState();
    const dispatch = useDispatch();

    const handleFetch = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`/vaccine`);
            setIsLoaded(true);
            setDataVaksin(result.data.data);
            dispatch(setStatVaksin({vaccine: _.sumBy(result.data.data, "stok")}))
        } catch (err) {
            if (err.response.status === 500) {
                return (
                    <Error500/>
                );
            }
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };

    useEffect(() => {
        handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //lodash for legend
    let sumOfJenis = dataVaksin.length;
    let sumOfStock = _.sumBy(dataVaksin, "stok");

    return (
        <div className="page-wrapper">
            <PageTitle title="Vaksin" />
            <section>
                <ActionButtonVaksin handleFetch={handleFetch} />
            </section>
            {!isLoaded ? (
                <Loading />
            ) : (
                <section className="t-vaksin px-3">
                    <TableVaksin data={dataVaksin} handleFetch={handleFetch} />
                </section>
            )}
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
