import React, {useState} from 'react';
import TableItemSession from "./TableItemSession";
import "../Table.css";
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import {ToastSuccess} from '../../Toast/Toast';
import "bootstrap-table";
function TableBtSession({data, handleFetch}) {
    const [error, setError] = useState();

    const handleDelete = async (ID_SESSION) => {
      console.log(ID_SESSION);
        var API_URL = "https://reservaksin-be.herokuapp.com";
        axios
            .delete(`${API_URL}/session/${ID_SESSION}`)
            .then((resp) => {
                if (resp.data.meta.status !== 200) {
                    setError(resp.data.meta.messages);
                } else {
                    ToastSuccess("berhasil menghapus data!");
                    handleFetch();
                }
            })
            .catch((e) => {
                console.error(e);
                if (e.response) {
                    console.log("isi err response", e.response);
                } else if (e.request) {
                    console.log("isi err req", e.request);
                }
            });
    };
    return (
        <div className="container-fluid mx-auto table-wrapper">
            <Toaster/>
            <table
                data-toggle="table"
                data-pagination="true"
                data-search="true"
                className="table"
                cellPadding="10px"
                style={{ margin: "auto" }}
            >
            <thead style={{height:"25px"}}>
                    <tr className="table-head-blue text-white py-3">
                        <th scope="col">#</th>
                        <th scope="col" data-sortable="true">Sesi</th>
                        <th scope="col">Lokasi</th>
                        <th scope="col">Vaksin</th>
                        <th scope="col">Kapasitas</th>
                        <th scope="col" align="center">Tahap</th>
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
                            <TableItemSession data={item} key={idx} handleDelete={handleDelete}/>
                        ))
                    }
            </tbody>
            </table>
        </div>
    );
}

export default TableBtSession;