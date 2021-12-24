import React from 'react';
import TableItemSession from './Session/TableItemSession';
import TableItemUser from './User/TableItemUser';
import TableFaskesItem from './Faskes/TableFaskesItem';

import './Table.css';

function TableFrame({data, domain}) {
    console.log("isi data", data)
    return (
        <div className="container">
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
                            <TableItemSession data={item}/>
                        ))
                    }
                    {
                        domain === "user" &&
                        data.map((item, idx) => (
                            <TableItemUser data={item}/>
                        ))
                    }
                    {
                        domain === "faskes" && 
                        data.map((item, idx) => (
                            <TableFaskesItem data={item}/>
                        ))
                    }
                </tbody>
            </table>
            
        </div>
    );
}

export default TableFrame;