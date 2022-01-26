import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
import { GetAge } from "../../Utilities/FormValidation/GetAge";
import GetWilayah from "../FormWilayah/GetWilayah";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { ToastSuccess } from "../../Components/Toast/Toast";
import {useNavigate} from "react-router-dom";

function UserForm({ data }) {
    const navigate = useNavigate()
    const errMsgInit = {
        nokk: "",
        nik: "",
        fullname: "",
        gender: "",
        dob: "",
        relationship: "",
        status: "",
    };
    const formKosong = {
        nokk: "",
        nik: "",
        fullname: "",
        gender: "Pria",
        dob: "",
        relationship: "",
        status: "",
    };

    //regex
    const isNIK =
        /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;
    const isAlpha = /^[A-Za-z ]*$/;

    //init state
    const [formData, setFormData] = useState(data);
    const [errMsg, setErrMsg] = useState(errMsgInit);

    const validateFormValue = (name, value) => {
        //validate NO KK
        if (name === "nokk" && value !== "") {
            setErrMsg({ ...errMsg, nokk: "" });
        }

        //validate nik
        if (name === "nik" && !isNIK.test(value)) {
            setErrMsg({ ...errMsg, nik: "Harap masukkan nik yang valid" });
        } else if (isNIK.test(value)) {
            setErrMsg({ ...errMsg, nik: "" });
        }

        //validate name
        if (name === "fullname" && !isAlpha.test(value)) {
            setErrMsg({ ...errMsg, fullname: "nama harus berupa huruf" });
        } else if (isAlpha.test(value)) {
            setErrMsg({ ...errMsg, fullname: "" });
        }

        //validate jenis kelamin
        if (name === "gender" && value !== "") {
            setErrMsg({ ...errMsg, gender: "" });
        } else {
            setErrMsg({ ...errMsg, gender: "silakan pilih salah satu" });
        }

        //validate tgl lahir
        if (name === "TanggalLahir" && value !== "") {
            setErrMsg({
                ...errMsg,
                dob: "silakan masukkan tanggal lahir anda",
            });
        } else if (GetAge(value) <= 12) {
            setErrMsg({
                ...errMsg,
                dob: "usia anda tidak memenuhi syarat penerima vaksin",
            });
        } else {
            setErrMsg({ ...errMsg, dob: "" });
        }

        //validate Status Hubungan
        if (name === "relationship" && value !== "") {
            setErrMsg({ ...errMsg, relationship: "" });
        }

        //validate status perkawinan
        if (name === "status" && value !== "") {
            setErrMsg({ ...errMsg, status: "" });
        }
    };

    const validateOnSubmit = () => {
        setErrMsg(() => {
            const errorMessageArr = Object.keys(formData).map((key) => {
                if (formData[key] === "") {
                    const err = `${
                        key.charAt(0).toUpperCase() + key.slice(1)
                    } tidak boleh kosong`;

                    return { [key]: err };
                }
                return { [key]: "" };
            });
            const updatedErrorMessage = errorMessageArr.reduce(
                (previousValue, currentValue) => {
                    return { ...previousValue, ...currentValue };
                },
                {}
            );
            return updatedErrorMessage;
        });
    };

    const handleInputData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        validateFormValue(name, value);
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validForm = Object.keys(formData).filter(
            (key) => formData[key] !== ""
        );

        if (validForm.length >= 6) {
            const newData = {
                nohp: data.nohp,
                fullname: formData.fullname,
                nokk: formData.nokk,
                nik: formData.nik,
                dob: formData.dob,
                relationship: formData.relationship,
                gender: formData.gender,
                status: formData.status,
                role: data.role,
                current_Address: {
                    alamat: formData.alamat,
                    provinsi: formData.provinsi,
                    kabupaten: formData.kabupaten,
                    kecamatan: formData.kecamatan,
                    kelurahan: formData.kelurahan,
                },
            };
            const API_URL = "https://reservaksin-be.herokuapp.com";
            axios
                .put(`${API_URL}/citizen/${data.id}`, newData)
                .then((resp) => {
                    console.log("isi response update", resp);
                    if (resp.status === 200) {
                        ToastSuccess("berhasil mengupdate data user!")
                        navigate(-1)
                    }
                })
                .catch((e) => {
                    console.error(e);
                });
        } else {
            validateOnSubmit();
        }
    };
    console.log("isi form data di user:", formData);
    return (
        <div className="card shadow px-3 mx-3">
            <Toaster />
            <form className="form p-3" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col mx-2">
                        <div className="mb-3 ctr-input">
                            <label className="form-label">nik *</label>
                            <input
                                placeholder="Masukkan nik"
                                name="nik"
                                value={formData?.nik}
                                onChange={handleInputData}
                                type="text"
                                className="form-control"
                            />
                            <p className="form-text text-danger mb-0">
                                {errMsg.nik}
                            </p>
                        </div>
                        <div className="mb-3 ctr-input ">
                            <label className="form-label">No. KK *</label>
                            <input
                                placeholder="Masukkan no. KK"
                                name="nokk"
                                type="text"
                                value={formData?.nokk}
                                onChange={handleInputData}
                                className="form-control"
                                disabled
                            />
                            <p className="form-text text-danger mb-0">
                                {errMsg.nokk}
                            </p>
                        </div>
                        <div className="mb-3 ctr-input">
                            <label className="form-label">Nama Lengkap *</label>
                            <input
                                placeholder="Masukkan nama lengkap"
                                type="text"
                                value={formData?.fullname}
                                onChange={handleInputData}
                                name="fullname"
                                className="form-control"
                            />
                            <p className="form-text text-danger mb-0">
                                {errMsg.fullname}
                            </p>
                        </div>
                        <div className="mb-3 ctr-input">
                            <label className="col-form-label">
                                Jenis Kelamin *
                            </label>
                            <div className="d-flex">
                                <div className="form-check form-check-inline me-5">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="Pria"
                                        onChange={handleInputData}
                                        checked={formData?.gender === "Pria"}
                                    />
                                    <label className="form-check-label">
                                        Pria
                                    </label>
                                </div>
                                <div className="form-check form-check-inline ms-5">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="gender"
                                        value="Wanita"
                                        onChange={handleInputData}
                                        checked={formData?.gender === "Wanita"}
                                    />
                                    <label className="form-check-label">
                                        Wanita
                                    </label>
                                </div>
                            </div>
                            <p className="form-text text-danger mb-0">
                                {errMsg.gender}
                            </p>
                        </div>
                        <div className="mb-3 ctr-input date-input">
                            <label className="form-label">
                                Tanggal Lahir *
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                value={formData.dob}
                                name="dob"
                                onChange={handleInputData}
                            />
                            <p className="form-text text-danger mb-0 p-date">
                                {errMsg.dob}
                            </p>
                        </div>
                    </div>

                    {/* col 2 */}
                    <div className="col mx-2">
                        <div className="mb-3 ctr-input">
                            <label className="form-label">
                                Status Hubungan dalam Kartu Keluarga *
                            </label>
                            <select
                                className="form-select ctr-input"
                                name="relationship"
                                defaultValue={formData?.relationship}
                                onChange={handleInputData}
                            >
                                <option value="" disabled>
                                    Hubungan keluarga
                                </option>
                                <option value="anak">Anak</option>
                                <option value="suami">Suami</option>
                                <option value="istri">Istri</option>
                                <option value="mertua">Mertua</option>
                            </select>
                            <p className="form-text text-danger">
                                {errMsg.relationship}
                            </p>
                        </div>
                        <div className="mb-3 ctr-input select-container">
                            <label className="form-label">
                                Status Perkawinan *
                            </label>
                            <select
                                className="form-select"
                                name="status"
                                defaultValue={formData?.status}
                                onChange={handleInputData}
                            >
                                <option value="" disabled>
                                    Status perkawinan
                                </option>
                                <option value="Belum Kawin">Belum Kawin</option>
                                <option value="Kawin">Kawin</option>
                                <option value="Cerai">Cerai</option>
                                <option value="Cerai Mati">Cerai Mati</option>
                            </select>
                            <p className="form-text text-danger">
                                {errMsg.status}
                            </p>
                        </div>
                        <GetWilayah
                            grid={true}
                            handleInputData={handleInputData}
                        />
                        <button
                            className="btn btn-primary w-100 my-3"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserForm;
