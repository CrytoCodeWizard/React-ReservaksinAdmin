import React, { useState } from "react";
import axios from "axios";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import './TableBook.css';
import {IoCheckmarkCircle, IoCloseCircle} from "react-icons/io";

function TableItemBooking({ data, handleFetch }) {
    let classStatus = "";
    switch(data.status){
      case "booked":
        classStatus = "st-waiting"
        break;
      case "cancel":
        classStatus = "st-cancel"
        break;
      default:
        classStatus="st-done"
    }

    return (
        <tr className="table-data">
            <th scope="row">
                <input type="checkbox" onChange={() => {}} />
            </th>
            <td>{data.citizen_name}</td>
            <td>{data.nik}</td>
            <td>{data.address}</td>
            <td><span className={`text-status ${classStatus}`}>{data.status}</span></td>
            <td>{data.no_telp}</td>
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
