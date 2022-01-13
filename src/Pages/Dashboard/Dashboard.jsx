import React from 'react';
import TopNavbar from  '../../Components/Navbar/TopNavbar';
import { StatsData } from '../Models/StaticStatsData';
import CardStatistik from '../../Components/CardStatistic/CardStatistik';
import './Dashboard.css';
import PageTitle from '../../Components/PageTitle/PageTitle';

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
        </div>
    );
}

export default Dashboard;