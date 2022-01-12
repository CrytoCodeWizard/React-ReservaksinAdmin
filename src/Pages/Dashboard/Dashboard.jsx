import React from 'react';
import { StatsData } from '../Models/StaticStatsData';
import CardStatistik from '../../Components/CardStatistic/CardStatistik';
import './Dashboard.css';
import PageTitle from '../../Components/PageTitle/PageTitle';
import RechartDashboard from '../../Components/Charts/RechartDashboard';
import CardRiwayatVaksin from "../../Components/CardRiwayatVaksin/CardRiwayatVaksin";

function Dashboard(props) {
    return (
        <div className='page-wrapper'>
            <PageTitle title="Dashboard"/>
            <div className="stats-wrapper mx-auto row">
                {
                    StatsData.map((item, idx) => (
                        <CardStatistik
                            key={idx}
                            data={item}
                            id={idx}
                        />
                    ))
                }
            </div>
            <br/>
            <div class="row px-3">
                <div className="col">
                    <RechartDashboard/>
                </div>
                <div className="col"><CardRiwayatVaksin /></div>
            </div>
        </div>
    );
}

export default Dashboard;