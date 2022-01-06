import React from 'react';
import TableItemSession from './Session/TableItemSession';
import TableItemUser from './User/TableItemUser';
import TableFaskesItem from './Faskes/TableFaskesItem';
import TableItemVaksin from './Vaksin/TableItemVaksin';
import './Table.css';

function TableFrame({data, domain}) {
    console.log("isi data", data)
    return (
        <div className="container-fluid mx-auto table-wrapper">
            <table className="table" cellPadding="5px" style={{margin:"auto"}}>
                <thead style={{height:"25px"}}>
                    <tr className="table-head-blue text-white py-3">
                        <th scope="col">#</th>
                        {
                             Object.keys(data[0]).map((key) =>(
                                <th scope="col" key={key}>{key}</th>
                             ))
                        }
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        domain === "session" &&
                        data.map((item, idx) => (
                            <TableItemSession data={item} key={idx}/>
                        ))
                    }
                    {
                        domain === "user" &&
                        data.map((item, idx) => (
                            <TableItemUser data={item} key={idx}/>
                        ))
                    }
                    {
                        domain === "faskes" && 
                        data.map((item, idx) => (
                            <TableFaskesItem data={item} key={idx}/>
                        ))
                    }
                    {
                        domain === "vaksin" && 
                        data.map((item, idx) => (
                            <TableItemVaksin data={item} key={idx}/>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    );
}

export default TableFrame;