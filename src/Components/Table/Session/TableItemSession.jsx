import React from "react";
import ActionButtonTable from '../../ActionButton/ActionButtonTable';
import '../Table.css';
import {useNavigate} from "react-router-dom"
import {DateFullFormat} from "../../../Utilities/DateFormatter/DateFormat";
import {GetTime} from "../../../Utilities/DateFormatter/GetTime";
import { MdOutlineDelete, MdOutlineModeEditOutline } from "react-icons/md";

function TableItemSession({ data, handleFetch }) {
  // let waktu = data.start + " -" + data.end;
  const navigate = useNavigate();

  // const handleDetail = () => {
  //   navigate(`/session/${data.id}`);
  // }

  return (
    <tr className="table-data">
      <th scope="row">
        <input type="checkbox" onChange={() => {}} />
      </th>
      <td>{data.name_session}</td>
      <td>{data.health_facilities}</td>
      <td>{data.vaccine}</td>
      <td>{data.capacity}</td>
      <td>{data.tahap}</td>
      <td>{DateFullFormat(data.date)}</td>
      <td>{GetTime(data.start_session)}</td>
      <td>{GetTime(data.end_session)}</td>
      <td>{DateFullFormat(data.created_at)}</td>
      {/* <ActionButtonTable editData={handleDetail} delete="delete" /> */}
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
                    onClick={() => navigate(`/session/${data.id}`)}
                >
                    <MdOutlineModeEditOutline size="20" />
                </button>
            </td>
    </tr>
  );
}

export default TableItemSession;
