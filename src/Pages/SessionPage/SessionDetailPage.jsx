import React from 'react';
import { StatsData } from '../Models/StaticStatsData';
import CardSession from '../../Components/CardSession/CardSession';
import {useParams} from "react-router-dom";

function SessionDetailPage(props) {
    let params = useParams();
    console.log(`isi param ${params.id}`);
    return (
        <div style={{marginTop:"4vh"}}>
            <CardSession data={StatsData}/>
        </div>
    );
}

export default SessionDetailPage;