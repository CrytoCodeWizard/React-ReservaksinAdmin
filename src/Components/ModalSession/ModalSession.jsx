import React, { useEffect, useState } from "react";
import { Modal, Button, Container, Col, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import "./ModalSession.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { TimeToDate } from "../../Utilities/DateFormatter/TimeToDate";
import {ToastSuccess} from '../Toast/Toast';
import {Toaster} from 'react-hot-toast';

function ModalSession({ show, onHide, props }) {
    //get user id from persist
    const USER_ID = useSelector((state) => state.auth.id);

    const init = {
        namaSesi: "",
        namaFaskes: "",
        kapasitas: "",
        jenisVaksin: "",
        tahapVaksin: "",
        tanggalPelaksanaan: "",
        waktuStart: "",
        waktuEnd: "",
    };

    const schema = yup.object().shape({
        namaSesi: yup.string().required("Nama sesi harus diisi!"),
        namaFaskes: yup.string().required("Nama faskes harus dipilih!"),
        kapasitas: yup.number().required("Kapasitas harus diisi!"),
        jenisVaksin: yup.string().required("Jenis vaksin harus dipilih!"),
        tahapVaksin: yup.string().required("Tahap vaksin harus diisi!"),
        tanggalPelaksanaan: yup
            .string()
            .required("Tanggal pelaksanaan harus diisi!"),
        waktuStart: yup.string().required("Waktu mulai harus diisi!"),
        waktuEnd: yup.string().required("Waktu selesai harus diisi!"),
    });

    const [error, setError] = useState();
    //state for health facilites
    const [isLoadedFaskes, setIsLoadedFaskes] = useState(false);
    const [dataFaskes, setDataFaskes] = useState([]);
    //state for vaccine
    const [isLoadedVaksin, setIsLoadedVaksin] = useState(false);
    const [dataVaksin, setDataVaksin] = useState([]);

    //handle fetch vaksin
    useEffect(() => {
        const handleFetch = async () => {
            let result;
            try {
                const instance = axios.create({
                    baseURL: "https://reservaksin-be.herokuapp.com",
                });
                result = await instance.get(`/vaccine`);
                setIsLoadedVaksin(true);
                setDataVaksin(result.data.data);
            } catch (err) {
                console.log(err);
                setIsLoadedVaksin(true);
                setError(err);
            }
        };
        handleFetch();
    }, []);

    //handle fetch faskes
    useEffect(() => {
        const handleFetchHealthFac = async () => {
            let result;
            try {
                const instance = axios.create({
                    baseURL: "https://reservaksin-be.herokuapp.com",
                });
                result = await instance.get(
                    `/health-facilities/admin/${USER_ID}`
                );
                setIsLoadedFaskes(true);
                setDataFaskes(result.data.data);
            } catch (err) {
                console.log(err);
                setIsLoadedFaskes(true);
                setError(err);
            }
        };
        handleFetchHealthFac();
    }, [USER_ID]);

    const handleCreateSession = (values) => {
        console.log("isi values", values)
        let dataSession = {
            health_facilities_id: values.namaFaskes,
            name_session: values.namaSesi,
            capacity: values.kapasitas,
            vaccine_id: values.jenisVaksin,
            date: values.tanggalPelaksanaan,
            tahap: values.tahapVaksin,
            start_session: TimeToDate(
                values.tanggalPelaksanaan,
                values.waktuStart
            ),
            end_session: TimeToDate(values.tanggalPelaksanaan, values.waktuEnd),
        };
        console.log(dataSession)
        var API_URL = "https://reservaksin-be.herokuapp.com";
        axios
            .post(`${API_URL}/session`, dataSession)
            .then((resp) => {
                console.log("isi resp session", resp)
                if(resp.status === 200){
                    ToastSuccess("berhasil menambahkan sesi!")
                    onHide();
                }
            })
            .catch((e) => {
                console.error(e)
            })
    };

    return (
        <>
            <Toaster/>
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
                {/* <Container>
                    <Nav variant="tabs">
                        <Nav.Item style={{ marginLeft: '0' }}>
                            <Nav.Link active>Informasi Umum</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container> */}
                <Modal.Body style={{ margin: "0" }}>
                    <Container>
                        <Formik
                            validationSchema={schema}
                            onSubmit={(values, {resetForm}) => {
                                // setDataSession(values);
                                handleCreateSession(values);
                                resetForm();
                            }}
                            initialValues={init}
                        >
                            {({
                                handleChange,
                                values,
                                handleSubmit,
                                // handleBlur,
                                // touched,
                                // isValid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridNamaSesi"
                                        >
                                            <Form.Label>Nama Sesi</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="namaSesi"
                                                value={values.namaSesi}
                                                onChange={handleChange}
                                                isInvalid={errors.namaSesi}
                                                placeholder="Masukkan nama sesi..."
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.namaSesi}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridKapasitas"
                                        >
                                            <Form.Label>Kapasitas</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="kapasitas"
                                                value={values.kapasitas}
                                                onChange={handleChange}
                                                isInvalid={errors.kapasitas}
                                                placeholder="Masukkan kapasitas..."
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.kapasitas}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridNama"
                                        >
                                            <Form.Label>Nama Faskes</Form.Label>
                                            <Form.Select
                                                aria-label="Default select example"
                                                name="namaFaskes"
                                                value={values.namaFaskes}
                                                onChange={handleChange}
                                                isInvalid={errors.namaFaskes}
                                            >
                                                <option selected value="">
                                                    Open this select menu
                                                </option>
                                                {dataFaskes.map((item) => (
                                                    <option
                                                        value={item.id}
                                                        key={item.id}
                                                    >
                                                        {item.name_facilities}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.namaFaskes}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            controlId="formGridPassword"
                                        >
                                            <Form.Label>
                                                Tahap Vaksin
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="tahapVaksin"
                                                value={values.tahapVaksin}
                                                onChange={handleChange}
                                                isInvalid={errors.tahapVaksin}
                                                placeholder="Masukkan tahap vaksin..."
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.tahapVaksin}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridEmail"
                                        >
                                            <Form.Label>
                                                Jenis Vaksin
                                            </Form.Label>
                                            <Form.Select
                                                aria-label="Default select example"
                                                name="jenisVaksin"
                                                value={values.jenisVaksin}
                                                onChange={handleChange}
                                                // defaultValue={values.jenisVaksin}
                                                isInvalid={errors.jenisVaksin}
                                            >
                                                <option selected value="">
                                                    Open this select menu
                                                </option>
                                                {dataVaksin.map((item) => (
                                                    <option
                                                        value={item.id}
                                                        key={item.id}
                                                    >
                                                        {item.nama_vaksin}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.jenisVaksin}
                                            </Form.Control.Feedback>
                                            {/* <Form.Control type="text" placeholder="Pilih salah satu!" /> */}
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            controlId="formGridWaktuStart"
                                        >
                                            <Form.Label>Waktu mulai</Form.Label>
                                            <Form.Control
                                                type="time"
                                                name="waktuStart"
                                                value={values.waktuStart}
                                                onChange={handleChange}
                                                placeholder="00.00 - 01.00"
                                                isInvalid={errors.waktuStart}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.waktuStart}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            controlId="formGridEmail"
                                        >
                                            <Form.Label>
                                                Tanggal Pelaksanaan
                                            </Form.Label>
                                            <Form.Control
                                                type="date"
                                                name="tanggalPelaksanaan"
                                                value={
                                                    values.tanggalPelaksanaan
                                                }
                                                onChange={handleChange}
                                                placeholder="DD/MM/YY"
                                                isInvalid={
                                                    errors.tanggalPelaksanaan
                                                }
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.tanggalPelaksanaan}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group
                                            as={Col}
                                            controlId="formGridWaktuEnd"
                                        >
                                            <Form.Label>
                                                Waktu Selesai
                                            </Form.Label>
                                            <Form.Control
                                                type="time"
                                                name="waktuEnd"
                                                value={values.waktuEnd}
                                                onChange={handleChange}
                                                placeholder="00.00 - 01.00"
                                                isInvalid={errors.waktuEnd}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.waktuEnd}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Modal.Footer
                                        style={{ justifyContent: "center" }}
                                    >
                                        <Button
                                            className="button-modal-session"
                                            variant="primary"
                                            type="submit"
                                        >
                                            Simpan
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            )}
                        </Formik>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalSession;
