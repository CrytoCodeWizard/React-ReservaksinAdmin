import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ActionButtonFaskes from '../../Components/ActionButton/ActionButtonFaskes';
import TableFrame from '../../Components/Table/TableFrame';
import { VaksinData } from '../Models/StaticVaccine';
import _ from "lodash";
import {BsFillCircleFill} from 'react-icons/bs';
import './Vaccine.css';

function VaccinePage() {
    let sumOfJenis = VaksinData.length;
    let sumOfStock = _.sumBy(VaksinData, 'stok')
    console.log("isi soj", sumOfJenis)
    return (
        <div className="page-wrapper">
                <PageTitle title="Vaksin" />
                <section>
                    <ActionButtonFaskes />
                </section>
                <section className="t-vaksin px-3">
                    <TableFrame data={VaksinData} domain="vaksin" />
                </section>
                <section className='diagram-legend d-flex flex-row'>
                    <small className='px-2'><BsFillCircleFill color='blue' size={8}/>  Jenis: <span className='fw-bold' style={{color:"deepskyblue"}}>{sumOfJenis}</span></small>
                    <small className='px-2'><BsFillCircleFill color='navy' size={8}/>  Stok: <span className='fw-bold' style={{color:"deepskyblue"}}>{sumOfStock}</span></small>
                </section>
        </div>
    );
}

export default VaccinePage;