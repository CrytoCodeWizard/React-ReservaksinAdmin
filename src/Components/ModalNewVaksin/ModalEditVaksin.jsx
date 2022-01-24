import React from "react";
import { Modal, Button, Container, Row, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import "./ModalNewVaksin.css";
import axios from 'axios';
import {ToastSuccess} from '../Toast/Toast';
import {Toaster} from 'react-hot-toast';

function ModalEditVaksin({ show, onHide, props, handleFetch, data}) {
    const USER_ID = useSelector((state) => state.auth.id);

    const init = {
        namaVaksin: data.nama_vaksin,
        stokVaksin: data.stok,
    };

    const schema = yup.object().shape({
        namaVaksin: yup.string().required("Nama vaksin harus diisi!"),
        stokVaksin: yup.number().required("Stok harus diisi!"),
    });

    
    //handle create vaccine
    const handleEditVaccine = (values) => {
        let dataVaksin = {
            admin_id: USER_ID,
            nama_vaksin: values.namaVaksin,
            Stok: values.stokVaksin
        };
        const API_URL = "https://reservaksin-be.herokuapp.com";
        axios
            .put(`${API_URL}/vaccine/${data.id}`, dataVaksin)
            .then((resp) => {
                if(resp.status === 200){
                    ToastSuccess("berhasil mengupdate vaksin!");
                    onHide();
                    handleFetch();
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
                style={{ borderRadius: "20px" }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="modal-header-new-vaksin" closeButton>
                    <Modal.Title className="title-modal-new-vaksin">
                        Form Update Vaksin
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Formik
                            validationSchema={schema}
                            onSubmit={(values, {resetForm}) => {
                                handleEditVaccine(values);
                                resetForm();
                                onHide();
                            }}
                            initialValues={init}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                values,
                                // handleBlur,
                                // touched,
                                // isValid,
                                errors,
                            }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Label>Nama Vaksin</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Masukkan nama vaksin..."
                                            name="namaVaksin"
                                            value={values.namaVaksin}
                                            onChange={handleChange}
                                            isInvalid={errors.namaVaksin}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.namaVaksin}
                                        </Form.Control.Feedback>
                                    </Row>
                                    <Row>
                                        <Form.Label>Stok</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="Contoh:1000"
                                            name="stokVaksin"
                                            value={values.stokVaksin}
                                            onChange={handleChange}
                                            isInvalid={errors.stokVaksin}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.stokVaksin}
                                        </Form.Control.Feedback>
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

export default ModalEditVaksin;
