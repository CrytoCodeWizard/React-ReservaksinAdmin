import React from 'react';
import ActionButton from '../../ActionButtonTable/ActionButton';

function TableFaskesItem({data}) {
    return (
        <tr className="table-data">
          <th scope="row">
            <input type="checkbox" onChange={() => {}} />
          </th>
          <td>{data.nama}</td>
          <td>{data.alamat.alamat}</td>
          <td>{data.telp}</td>
          <td>{data.created_at}</td>
          <td>{data.updated_at}</td>
          <ActionButton edit="edit" delete="delete" />
        </tr>
      );
}

export default TableFaskesItem;