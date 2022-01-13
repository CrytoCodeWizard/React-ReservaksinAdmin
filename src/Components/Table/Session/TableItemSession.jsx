import React from "react";
import ActionButtonTable from '../../ActionButton/ActionButtonTable';
import '../Table.css';
import {useNavigate} from "react-router-dom"

function TableItemSession({ data }) {
  // let waktu = data.start + " -" + data.end;
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/session/${data.id}`);
  }

  return (
    <tr className="table-data">
      <th scope="row">
        <input type="checkbox" onChange={() => {}} />
      </th>
      <td>{data.namaSesi}</td>
      <td>{data.tanggal}</td>
      <td>{data.start}</td>
      <td>{data.end}</td>
      <td>{data.lokasi.nama}</td>
      <td>{data.vaksin.nama}</td>
      <td>{data.kapasitas}</td>
      <td>{data.tahap}</td>
      <ActionButtonTable editData={handleDetail} delete="delete" />
    </tr>
  );
}

export default TableItemSession;
