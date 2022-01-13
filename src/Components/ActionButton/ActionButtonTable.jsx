import React from 'react';
import {MdOutlineModeEditOutline, MdOutlineDelete} from 'react-icons/md';

function ActionButtonTable({editData, deleteData}) {
    //props berupa function edit / delete
    return (
    <td>
      <button
        type="button"
        className="btn btn-danger rounded-pill m-1"
        data-toggle="tooltip" data-placement="bottom" title="edit data"
        onClick={editData}
      >
        <MdOutlineDelete size="20"/>
      </button>
      <button
        type="button"
        className="btn btn-warning rounded-pill m-1"
        data-toggle="tooltip" data-placement="bottom" title="delete data"
        onClick={() => {console.log(deleteData, " dipencet")}}
      >
        <MdOutlineModeEditOutline size="20"/>
      </button>
    </td>
    )
}

export default ActionButtonTable;