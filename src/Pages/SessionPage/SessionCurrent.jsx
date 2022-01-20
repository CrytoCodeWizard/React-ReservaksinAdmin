import React, { useEffect, useState } from "react";
import TipsTooltip from "../../Components/TipsTooltip/TipsTooltip";
import SidebarSession from "../../Components/SidebarSession/SidebarSession";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import Unauthorized from "../../Components/Unauthorized/Unauthorized";
import axios from "axios";
import Loading from "../../Components/Loading/Loading";
import Error500 from "../../Components/Error/Error500";
import TableSession from "../../Components/Table/Session/TableSession";

function SessionCurrent() {
    const isLogged = useSelector((state) => state.auth.login);
    const ADMIN_ID = useSelector((state) => state.auth.id);

    //state for vaccine
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataSession, setDataSession] = useState([]);
    const [error, setError] = useState();

    const handleFetch = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`session/current/admin/${ADMIN_ID}`);
            setIsLoaded(true);
            setDataSession(result.data.data);
        } catch (err) {
            if (err.response.status === 500) {
                return <Error500 />;
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

    if (!isLogged) {
        return <Unauthorized />;
    }
    return (
        <div className="page-wrapper">
            <PageTitle title="Current Session" />
            <TipsTooltip />
            <section className="table-session row mx-auto">
                <div className="col-md-3">
                    <SidebarSession handleFetch={handleFetch}/>
                </div>
                {!isLoaded ? (
                    <Loading />
                ) : (
                    <div className="col-md-9">
                        <TableSession data={dataSession} handleFetch={handleFetch}/>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SessionCurrent;
