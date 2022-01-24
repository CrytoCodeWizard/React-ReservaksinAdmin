import React, {useState} from 'react';
import "../Table.css";
import axios from "axios";
import {Toaster} from 'react-hot-toast';
import {ToastSuccess} from '../../Toast/Toast';
import { MdOutlineDelete, MdOutlineModeEditOutline} from "react-icons/md";
import "../DataTable.css";
import {useNavigate} from "react-router-dom";
import DataTable from 'react-data-table-component';
import { DateFullFormat } from "../../../Utilities/DateFormatter/DateFormat";
import { GetTime } from "../../../Utilities/DateFormatter/GetTime";

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="form-check">
      <input
        htmlFor="booty-check"
        type="checkbox"
        className="form-check-input"
        ref={ref}
        onClick={onClick}
        {...rest}
      />
      <label className="form-check-label" id="booty-check" />
    </div>
));
function DataTableSession({handleFetch, dataSession}) {
    const [error, setError] = useState();

    const handleDelete = async (ID_SESSION) => {
      console.log(ID_SESSION);
        var API_URL = "https://reservaksin-be.herokuapp.com";
        axios
            .delete(`${API_URL}/session/${ID_SESSION}`)
            .then((resp) => {
                if (resp.data.meta.status !== 200) {
                    setError(resp.data.meta.messages);
                } else {
                    ToastSuccess("berhasil menghapus data!");
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

    const navigate = useNavigate();

    const columns = [
        {
            name: 'Nama Sesi',
            selector: row => row.name_session,
            sortable: true,
            grow:3,
        },
        {
            name: 'Faskes',
            selector: row => row.health_facilities,
            grow: 3,
        },
        {
            name: 'Vaksin',
            selector: row => row.vaccine,
            sortable: true,
        },
        {
            name: 'Kapasitas',
            selector: row => row.capacity,
            sortable: true,
            grow: 2,
        },
        {
            name: 'Tahap',
            selector: row => row.tahap,
            sortable: true,
        },
        {
            name: 'Tanggal',
            selector: row => DateFullFormat(row.date),
            sortable: true,
            grow: 3,
            wrap: true,
        },
        {
            name: 'Mulai',
            selector: row => GetTime(row.start_session),
            sortable: true,
        },
        {
            name: 'Selesai',
            selector: row => GetTime(row.end_session),
            sortable: true,
        },
        {
            name: 'Tanggal Dibuat',
            selector: row =>DateFullFormat(row.created_at),
            sortable: true,
        },
        {
            name: 'Action',
            selector: row =>  (<><button
                type="button"
                className="btn btn-danger rounded-pill m-1"
                data-toggle="tooltip"
                data-placement="bottom"
                title="delete data"
                onClick={() => handleDelete(row.id)}
            >
                <MdOutlineDelete size="20" />
            </button>
            <button
                type="button"
                className="btn btn-warning rounded-pill m-1"
                data-toggle="tooltip"
                data-placement="bottom"
                title="edit data"
                onClick={() => navigate(`/user/${row?.id}`, {state: row})}
            >
                <MdOutlineModeEditOutline size="20" />
            </button></>),
        },
    ];
    return (
        <>
        <Toaster/>
        <div className="mx-3">
            <DataTable
            columns={columns}
            data={dataSession}
            direction="auto"
            fixedHeader
            highlightOnHover
            pagination
            responsive
            selectableRows
            selectableRowsHighlight
            selectableRowsRadio="checkbox"
            selectableRowsComponent={BootyCheckbox}
            subHeaderAlign="right"
            />
        </div>
        </>
        
    );
}

export default DataTableSession;