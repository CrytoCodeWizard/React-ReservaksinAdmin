import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import "../Table.css";
import axios from "axios";
import Error500 from "../../Error/Error500";
import {useSelector} from 'react-redux';
import { MdOutlineDelete, MdOutlineModeEditOutline} from "react-icons/md";
import "../DataTable.css";
import {useNavigate} from "react-router-dom";

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

function DataTableUser(props) {
    const ADMIN_ID = useSelector((state) => state.auth.id);
    const navigate = useNavigate();

    const columns = [
        {
            name: 'Nama Lengkap',
            selector: row => row.fullname,
            sortable: true,
            grow:3,
        },
        {
            name: 'No KK',
            selector: row => row.nokk,
            grow: 3,
        },
        {
            name: 'NIK',
            selector: row => row.nik,
            sortable: true,
            grow: 3,
        },
        {
            name: 'TTL',
            selector: row => row.dob,
            sortable: true,
            grow: 1.5,
        },
        {
            name: 'JK',
            selector: row => row.gender,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'Alamat',
            selector: row => row.current_Address.alamat,
            sortable: true,
            grow: 3,
        },
        {
            name: 'Action',
            grow: 3,
            selector: row =>  (<><button
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
                onClick={() => navigate(`/user/${row?.id}`, {state: row})}
            >
                <MdOutlineModeEditOutline size="20" />
            </button></>),
        },
    ];
    
    //state for vaccine
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    const [error, setError] = useState();

    const handleFetch = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`/citizen/admin/${ADMIN_ID}`);
            setIsLoaded(true);
            setDataUser(result.data.data);
        } catch (err) {
            if (err.response.status === 500) {
                return (
                    <Error500/>
                );
            }
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };

    useEffect(() => {
        handleFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="mx-3">
            <DataTable
            columns={columns}
            data={dataUser}
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
    );
}

export default DataTableUser;