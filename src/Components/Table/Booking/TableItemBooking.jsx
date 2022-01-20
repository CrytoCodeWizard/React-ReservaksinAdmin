import React, { useState } from "react";
import { DateFullFormat } from "../../../Utilities/DateFormatter/DateFormat";
import axios from "axios";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";

function TableItemBooking({ data, handleFetch }) {
   
    return (
        <tr className="table-data">
            <th scope="row">
                <input type="checkbox" onChange={() => {}} />
            </th>
            <td>{data.citizen_name}</td>
            <td>{data.nik}</td>
            <td>{data.address}</td>
            <td>{data.no_telp}</td>
            <td>{data.status}</td>
            {/* <ActionButtonTable edit="edit" delete="delete" /> */}
            <td>
                <button
                    type="button"
                    className="btn btn-danger rounded-pill m-1"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="delete data"
                    onClick={() => {}}
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

export default TableItemBooking;
