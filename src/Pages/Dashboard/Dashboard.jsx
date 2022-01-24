import React from 'react';
import CardStatistik from '../../Components/CardStatistic/CardStatistik';
import './Dashboard.css';
import PageTitle from '../../Components/PageTitle/PageTitle';
import RechartDashboard from '../../Components/Charts/RechartDashboard';
import CardSessionToday from "../../Components/CardSessionToday/CardSessionToday";
import {useSelector} from "react-redux"
import {Navigate } from 'react-router-dom'

function Dashboard(props) {
    const isLogged = useSelector((state) => state.auth.login);
    let dataStats = useSelector((state) => state.stats)
    const StatsData = [
        {
            title: 'Vaksin',
            total: dataStats.vaccine
        },
        {
            title: 'Session',
            total: dataStats.session
        },
        {
            title: 'Pendaftar',
            total: dataStats.user
        },
        {
            title: 'Faskes',
            total: dataStats.health
        }
    ]
     if (!isLogged) {
        return <Navigate to ="/login"/>
    }
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
            <div className="row px-3 sec-2-dash">
                <div className="col-lg-8">
                    <RechartDashboard/>
                </div>
                <div className="col-lg-4"><CardSessionToday/></div>
            </div>
        </div>
    );
}

export default Dashboard;