import React from 'react';
import TableItemBooking from './TableItemBooking';
import "../Table.css";

function TableBooking({data, handleFetch}) {
    return (
        <div className="container-fluid mx-auto table-wrapper">
            <table
                className="table"
                cellPadding="5px"
                style={{ margin: "auto" }}
            >
                <thead style={{ height: "25px" }}>
                    <tr className="table-head-blue text-white py-3">
                        <th scope="col">#</th>
                        <th scope="col">Nama Peserta</th>
                        <th scope="col">NIK</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">Status</th>
                        <th scope="col">No Telepon</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data.map((item, idx) => (
                            <TableItemBooking data={item} key={idx} handleFetch={handleFetch}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableBooking;