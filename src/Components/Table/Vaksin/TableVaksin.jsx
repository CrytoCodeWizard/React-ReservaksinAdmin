import React from 'react';
import TableItemVaksin from './TableItemVaksin';
function TableVaksin({data, handleFetch}) {
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
                        <th scope="col">Nama Vaksin</th>
                        <th scope="col">Stok</th>
                        <th scope="col">Terakhir Diupdate</th>
                        <th scope="col">Tanggal dibuat</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        data.map((item, idx) => (
                            <TableItemVaksin data={item} key={idx} handleFetch={handleFetch}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableVaksin;