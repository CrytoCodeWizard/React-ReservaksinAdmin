import React from 'react';
import {FaRegHospital, FaRegClock} from 'react-icons/fa';
import {GiLoveInjection} from 'react-icons/gi';
import {RiContactsLine} from 'react-icons/ri';
import './Card.css';
function CardStats({data, id}) {
    const size = 25;
    const logoList = [
        <FaRegHospital size={size}/>,
        <FaRegClock size={size}/>,
        <GiLoveInjection size={size}/>,
        <RiContactsLine size={size}/>,
    ]
    return (
            <div className="card px-3 card-stats mx-3">
                <div className="row p-3">
                    <div className="col-sm-4 m-auto">
                        <div className="rounded-circle icon-stats">
                            {logoList[id]}
                        </div>
                    </div>
                    <div className="col-sm-8 card-content m-auto">
                        <h5 className="text-stat-title">
                            {data.title}
                        </h5>
                        <p>{data.total}</p>
                    </div>
                </div>
            </div>
    );
}

export default CardStats;