import React, { useState } from "react";
import { Modal, Container } from "react-bootstrap";
import "./ModalFaskes.css";
import FormInformasiUmum from "./FormInformasiUmum";
import Maps from "../Maps/Maps";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastSuccess } from "../Toast/Toast";
import { ToTitleCase } from "../../Utilities/StringFormatter/StringFormatter";

function ModalFaskes({ show, onHide, props, handleFetch }) {
    const ADMIN_ID = useSelector((state) => state.auth.id);
    const formKosong = {
        admin_id: ADMIN_ID,
        namaFaskes: "",
        no_telp: "",
        alamat: "",
        provinsi: "",
        kabupaten: "",
        kecamatan: "",
        kelurahan: "",
    };
    const [form, setForm] = useState(formKosong);

    //handle change punya curloc
    const [curLoc, setCurLoc] = useState(null);
    // console.log("isi curloc dari modal", curLoc);

    const handleChange = (e) => {
        const name = e.target.name;
        const values = e.target.value;
        setForm({
            ...form,
            [name]: values,
        });
    };
    //handle create faskes
    const handleCreateFaskes = (e) => {
        e.preventDefault();
        console.log(form);
        let dataFaskes = {
            admin_id: form.admin_id,
            name_facilities: form.namaFaskes,
            no_telp: form.no_telp,
            current_address: {
                alamat: form.alamat,
                provinsi: form.provinsi,
                kota: form.kabupaten,
                kecamatan: form.kecamatan,
                kelurahan: form.kelurahan,
                lat: curLoc.lat,
                lng: curLoc.lng,
            },
        };
        console.log("isi data faskes handle create", dataFaskes);
        const API_URL = "https://reservaksin-be.herokuapp.com";
        axios
            .post(`${API_URL}/health-facilities`, dataFaskes)
            .then((resp) => {
                if (resp.status === 200) {
                    ToastSuccess("berhasil menambahkan faskes!");
                    onHide();
                    handleFetch();
                }
            })
            .catch((e) => {
                console.error(e);
            });
        // window.location.reload();
    };
    console.log("isi data curloc handle create", curLoc);

    const handleInputWilayah = (e) => {
        const nama = e.target.name;
        const value = JSON.parse(e.target.value);
        setForm({
            ...form,
            [nama]: ToTitleCase(value.name),
        });
    };
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="modal-header-session" closeButton>
                    <Modal.Title className="title-header-session">
                        Form Pembuatan Sesi
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ margin: "0" }}>
                    <Container>
                        <form
                            className="row g-3 needs-validation"
                            noValidate
                            onSubmit={handleCreateFaskes}
                        >
                            <div className="mb-3">
                                <label className="form-label">
                                    Nama Faskes
                                </label>
                                <input
                                    placeholder="Masukkan Nama Faskes"
                                    name="namaFaskes"
                                    type="text"
                                    value={form.namaFaskes}
                                    onChange={handleChange}
                                    className="form-control"
                                />
                            </div>
                            <FormInformasiUmum
                                handlechange={handleInputWilayah}
                                grid={true}
                            />
                            <div className="mb-3">
                                <label
                                    htmlFor="validationCustom01"
                                    className="form-label"
                                >
                                    Telepon
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustom01"
                                    value={form.no_telp}
                                    name="no_telp"
                                    onChange={handleChange}
                                    placeholder="Masukkan nomor telepon..."
                                    required
                                />
                                <div className="invalid-feedback">
                                    masukkan nomor telepon anda
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="validationCustom02"
                                    className="form-label"
                                >
                                    Alamat
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="validationCustom02"
                                    name="alamat"
                                    value={form.alamat}
                                    onChange={handleChange}
                                    placeholder="Masukkan alamat lengkap..."
                                    required
                                />
                                <div className="invalid-feedback">
                                    masukan alamat anda
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className="col">
                                    <label
                                    htmlFor="validationCustom02"
                                    className="form-label"
                                >
                                    Titik Lokasi
                                </label>
                                        <Maps
                                            setCurLoc={setCurLoc}
                                            curLoc={curLoc}
                                        />
                                    </div>
                                    <div className="col">
                                        <div className="mb-3">
                                            <label
                                                htmlFor="validationCustom05"
                                                className="form-label"
                                            >
                                                Lat
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lat"
                                                value={curLoc?.lat}
                                                onChange={handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid location
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="validationCustom05"
                                                className="form-label"
                                            >
                                                Lng
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="lng"
                                                value={curLoc?.lng}
                                                onChange={handleChange}
                                                required
                                            />
                                            <div className="invalid-feedback">
                                                Please provide a valid location
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Submit form
                                </button>
                            </div>
                        </form>
                    </Container>
                    {/* <FormFaskes/> */}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalFaskes;
