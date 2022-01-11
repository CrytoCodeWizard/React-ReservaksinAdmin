import React from "react";
import TableFrame from "../../Components/Table/TableFrame";
import { SessionTableData } from "../Models/StaticSessionTable";
import TipsTooltip from "../../Components/TipsTooltip/TipsTooltip";
import SidebarSession from "../../Components/SidebarSession/SidebarSession";
import PageTitle from "../../Components/PageTitle/PageTitle";
import {useSelector} from 'react-redux'
import Unauthorized from '../../Components/Unauthorized/Unauthorized';

function SessionPage() {
    const User_id = useSelector((state) => state.auth.id);

    if(!User_id){
        return <Unauthorized/>
    }
    return (
        <div className="page-wrapper">
            <PageTitle title="Session"/>
            <TipsTooltip />
            <section className="table-session row mx-auto">
                <div className="col-md-3"><SidebarSession/></div>
                <div className="col-md-9"><TableFrame data={SessionTableData} domain="session" /></div>
            </section>
        </div>
    );
}

export default SessionPage;
