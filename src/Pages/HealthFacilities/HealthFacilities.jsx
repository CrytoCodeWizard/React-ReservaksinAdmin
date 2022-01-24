import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TableFaskes from "../../Components/Table/Faskes/TableFaskes";
import ActionButtonFaskes from "../../Components/ActionButton/ActionButtonFaskes";
import PageTitle from "../../Components/PageTitle/PageTitle";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import "./HealthFac.css";
import {useDispatch} from "react-redux";
import {setStatHealth} from '../../Config/Redux/DashboardSlice';

function HealthFacilities() {
    //get user id from persist
    const USER_ID = useSelector((state) => state.auth.id);
    const dispatch = useDispatch();

    //state for health facilites
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataFaskes, setDataFaskes] = useState([]);
    const [error, setError] = useState();

    const handleFetch = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`/health-facilities/admin/${USER_ID}`);
            setIsLoaded(true);
            setDataFaskes(result.data.data);
            dispatch(setStatHealth({health:result.data.data.length}))
        } catch (err) {
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };

    useEffect(() => {
        handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="page-wrapper">
            <PageTitle title="Health Facilities" />
            <section>
                <ActionButtonFaskes handleFetch={handleFetch} />
            </section>
            {!isLoaded ? (
                <Loading />
            ) : (
                <section className="t-faskes">
                    <TableFaskes data={dataFaskes} handleFetch={handleFetch} />
                </section>
            )}
        </div>
    );
}

export default HealthFacilities;
