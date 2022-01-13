import React from "react";
import TableItemUser from "./TableItemUser";

function TableUser({ data }) {
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
                        <th scope="col">Nama Lengkap</th>
                        <th scope="col">Tanggal Lahir</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">Tanggal dibuat</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, idx) => (
                        <TableItemUser data={item} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableUser;
