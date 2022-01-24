import React, { useState } from "react";
import { DateFullFormat} from "../../../Utilities/DateFormatter/DateFormat";
import { GetTime } from "../../../Utilities/DateFormatter/GetTime";
import axios from "axios";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";
import ModalEditVaksin from "../../ModalNewVaksin/ModalEditVaksin";

function TableItemVaksin({ data, handleFetch }) {
    const [error, setError] = useState();
    const handleDelete = async (ID_VACCINE) => {
        var API_URL = "https://reservaksin-be.herokuapp.com";
        axios
            .delete(`${API_URL}/vaccine/${ID_VACCINE}`)
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

    //modal handling
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <tr className="table-data">
            <th scope="row">
                <input type="checkbox" onChange={() => {}} />
            </th>
            <td>{data.nama_vaksin}</td>
            <td>{data.stok}</td>
            <td>{DateFullFormat(data.updated_at)} &#8594; {GetTime(data.updated_at)}</td>
            <td>{DateFullFormat(data.created_at)}</td>
            {/* <ActionButtonTable edit="edit" delete="delete" /> */}
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
                    onClick={handleShow}
                >
                    <MdOutlineModeEditOutline size="20" />
                </button>
                <ModalEditVaksin onHide={handleClose} show={show} handleFetch={handleFetch} data={data}/>
            </td>
        </tr>
    );
}

export default TableItemVaksin;
