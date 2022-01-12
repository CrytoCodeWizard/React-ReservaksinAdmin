import React from 'react';
import ActionButtonTable from '../../ActionButton/ActionButtonTable';
import {DateFullFormat} from '../../../Utilities/DateFormatter/DateFormat'

function TableItemVaksin({data}) {
    return (
        <tr className="table-data">
      <th scope="row">
        <input type="checkbox" onChange={() => {}} />
      </th>
      <td>{data.nama_vaksin}</td>
      <td>{data.stok}</td>
      <td>{DateFullFormat(data.updated_at)}</td>
      <td>{DateFullFormat(data.created_at)}</td>
      <ActionButtonTable edit="edit" delete="delete" />
    </tr>
    );
}

export default TableItemVaksin;