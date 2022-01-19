import React, {useEffect, useState} from "react";
import TableFrame from "../../Components/Table/TableFrame";
import { SessionTableData } from "../Models/StaticSessionTable";
import TipsTooltip from "../../Components/TipsTooltip/TipsTooltip";
import SidebarSession from "../../Components/SidebarSession/SidebarSession";
import PageTitle from "../../Components/PageTitle/PageTitle";
import {useSelector} from 'react-redux'
import Unauthorized from '../../Components/Unauthorized/Unauthorized';
import axios from 'axios';
import Loading from "../../Components/Loading/Loading";
function SessionPage() {
    const isLogged = useSelector((state) => state.auth.login);
    const ADMIN_ID = useSelector((state) => state.auth.id)

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
            result = await instance.get(`/session/admin/${ADMIN_ID}`);
            setIsLoaded(true);
            setDataSession(result.data.data);
        } catch (err) {
            // if (err.response.status === 500) {
            //     return (
            //         <>
            //             <h1>Datanya Kosong</h1>
            //         </>
            //     );
            // }
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };

    useEffect(() => {
        handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!isLogged){
        return <Unauthorized/>
    }
    return (
        <div className="page-wrapper">
            <PageTitle title="Session"/>
            <TipsTooltip />
            <section className="table-session row mx-auto">
                <div className="col-md-3"><SidebarSession/></div>
                {
                !isLoaded ? 
                <Loading/>
                :
                <div className="col-md-9"><TableFrame data={SessionTableData} domain="session" /></div>
            }
            </section>
        </div>
    );
}

export default SessionPage;
