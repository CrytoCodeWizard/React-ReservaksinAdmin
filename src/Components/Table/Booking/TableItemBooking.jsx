import React, { useState } from "react";
import axios from "axios";
import { MdCancel} from "react-icons/md";
import {RiCheckboxCircleFill} from "react-icons/ri";
import './TableBook.css';
import { GiLoveInjection } from "react-icons/gi";
import {ToastSuccess} from "../../Toast/Toast";
function TableItemBooking({ data, handleFetch }) {
    console.log("isi data di table item booking", data)
    let classStatus = "";
    switch(data.status){
      case "booked":
        classStatus = "st-waiting"
        break;
      case "canceled":
        classStatus = "st-cancel"
        break;
      case "vaccinated":
        classStatus = "st-vaccinated"
        break;
      default:
        classStatus="st-done"
    }

    const handleUpdateStatus = (BOOKING_ID, status) => {
        let dataStatus = {
            status: status
        };
        const API_URL = "https://reservaksin-be.herokuapp.com";
        axios
            .patch(`${API_URL}/booking/status/${BOOKING_ID}`, dataStatus)
            .then((resp) => {
                console.log("isi resp update status", resp)
                if(resp.status === 200){
                    handleFetch();
                    ToastSuccess("berhasil mengupdate status")
                }
            })
            .catch((e) => {
                console.error(e)
            })
    };
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
            <td>
                <button
                    type="button"
                    className="btn"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="accept book"
                    onClick={() => handleUpdateStatus(data.booking_id, "accept")}
                >
                    <RiCheckboxCircleFill size="25" color="green"/>
                </button>
                <button
                    type="button"
                    className="btn"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="vaccinated"
                    onClick={() => handleUpdateStatus(data.booking_id, "vaccinated")}
                >
                    <GiLoveInjection size="25" color="navy" />
                </button>
                <button
                    type="button"
                    className="btn"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="cancel book"
                    onClick={() => handleUpdateStatus(data.booking_id, "canceled")}
                >
                    <MdCancel size="25" color="red" />
                </button>
            </td>
        </tr>
    );
}

export default TableItemBooking;
