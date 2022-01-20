import React from 'react';
import TableItemSession from "./TableItemSession";
import "../Table.css";

function TableSession({data, handleFetch}) {
    console.log("isi data di table session", data)
    return (
        <div className="container-fluid mx-auto table-wrapper">
            <table
                className="table"
                cellPadding="10px"
                style={{ margin: "auto" }}
            >
            <thead style={{height:"25px"}}>
                    <tr className="table-head-blue text-white py-3">
                        <th scope="col">#</th>
                        <th scope="col">Sesi</th>
                        <th scope="col">Lokasi</th>
                        <th scope="col">Vaksin</th>
                        <th scope="col">Kapasitas</th>
                        <th scope="col">Tahap</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Mulai</th>
                        <th scope="col">Selesai</th>
                        <th scope="col">Tanggal Dibuat</th>
                        <th scope="col">Action</th>
                    </tr>
            </thead>
            <tbody>
            {
                        data?.map((item, idx) => (
                            <TableItemSession data={item} key={idx} handleFetch={handleFetch}/>
                        ))
                    }
            </tbody>
            </table>
        </div>
    );
}

export default TableSession;