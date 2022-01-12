import React from 'react';
import { StatsData } from '../Models/StaticStatsData';
import CardSession from '../../Components/CardSession/CardSession';

function SessionDetailPage(props) {
    return (
        <div style={{marginTop:"4vh"}}>
            <CardSession data={StatsData}/>
            
        </div>
    );
}

export default SessionDetailPage;