import React from 'react';
import TopNavbar from '../../Components/Navbar/TopNavbar';
import CardSession from '../../Components/CardSession/CardSession';
import TableFrame from '../../Components/Table/TableFrame';
import { SessionTableData } from '../Models/StaticSessionTable';
import { StatsData } from '../Models/StaticStatsData';
import TipsTooltip from '../../Components/TipsTooltip/TipsTooltip';

function SessionPage() {
    return (
        <div>
            <TopNavbar/>
            <div className="text-center mt-5">Session Page</div>
            <br />
            <CardSession data={StatsData}/>
            <section className="py-3 tips">
            <TipsTooltip/>
            </section>
            <section className="table-session">
                <TableFrame data={SessionTableData} domain="session"/>
            </section>
           
        </div>
    );
}

export default SessionPage;