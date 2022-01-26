import React, { useState } from "react";
import ActionButtonTable from "../../ActionButton/ActionButtonTable";
import { DateFullFormat } from "../../../Utilities/DateFormatter/DateFormat";
import axios from "axios";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
function TableFaskesItem({ data, handleFetch }) {
    const [error, setError] = useState();
    const handleDelete = async (ID_FASKES) => {
        console.log(ID_FASKES);
        var API_URL = "https://reservaksin-be.herokuapp.com";
        axios
            .delete(`${API_URL}/health-facilities/${ID_FASKES}`)
            .then((resp) => {
                console.log("isi resp", resp);
                if (resp.data.meta.status !== 200) {
                    setError(resp.data.meta.messages);
                } else {
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
        <tr className="table-data">
            <th scope="row">
                <input type="checkbox" onChange={() => {}} />
            </th>
            <td>{data.name_facilities}</td>
            <td>{data.current_Address.alamat}</td>
            <td>{data.current_Address.kelurahan}</td>
            <td>{data.current_Address.kecamatan}</td>
            <td>{data.current_Address.kota}</td>
            <td>{data.no_telp}</td>
            <td>{DateFullFormat(data.created_at)}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger rounded-pill m-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="delete data"
                    onClick={() => handleDelete(data.id)}
                >
                    <MdOutlineDelete size="20" />
                </button>
                <button
                    type="button"
                    className="btn btn-warning rounded-pill m-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="edit data"
                    onClick={() => {}}
                >
                    <MdOutlineModeEditOutline size="20" />
                </button>
            </td>
        </tr>
    );
}

export default TableFaskesItem;
