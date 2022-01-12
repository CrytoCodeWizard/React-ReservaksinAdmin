import React from 'react';
import ActionButtonTable from '../../ActionButton/ActionButtonTable';
import {DateFullFormat} from '../../../Utilities/DateFormatter/DateFormat'

function TableFaskesItem({data}) {
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
          {/* <td>{DateFullFormat(data.updated_at)}</td> */}
          <ActionButtonTable edit="edit" delete="delete" />
        </tr>
      );
}

export default TableFaskesItem;