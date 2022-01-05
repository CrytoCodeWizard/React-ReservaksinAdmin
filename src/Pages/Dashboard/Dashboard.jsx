import React from 'react';
import TopNavbar from  '../../Components/Navbar/TopNavbar';
import { StatsData } from '../Models/StaticStatsData';
import CardStats from '../../Components/CardStatistic/CardStats';
import './Dashboard.css';

function Dashboard(props) {
    return (
        <div>
            <TopNavbar/>
            <div className="m-4 stats-wrapper mx-auto">
                {
                    StatsData.map((item, idx) => (
                        <CardStats
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