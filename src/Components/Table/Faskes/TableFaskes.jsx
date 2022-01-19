import React from "react";
import TableFaskesItem from "./TableFaskesItem";
import '../Table.css'
function TableFaskes({ data, handleFetch }) {
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
                        <th scope="col">Nama Faskes</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">Kelurahan</th>
                        <th scope="col">Kecamatan</th>
                        <th scope="col">Kabupatan / Kota</th>
                        <th scope="col">Telepon</th>
                        <th scope="col">Tanggal dibuat</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data.map((item, idx) => (
                            <TableFaskesItem data={item} key={idx} handleFetch={handleFetch}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableFaskes;
