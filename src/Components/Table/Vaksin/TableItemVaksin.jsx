import React from 'react';
import ActionButtonTable from '../../ActionButton/ActionButtonTable';
function TableItemVaksin({data}) {
    return (
        <tr className="table-data">
      <th scope="row">
        <input type="checkbox" onChange={() => {}} />
      </th>
      <td>{data.nama}</td>
      <td>{data.stok}</td>
      <td>{data.created_at}</td>
      <td>{data.updated_at}</td>
      <ActionButtonTable edit="edit" delete="delete" />
    </tr>
    );
}

export default TableItemVaksin;