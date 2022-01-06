import React from 'react'
import { Modal, Button, Container, Col, Row, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'
import './ModalSession.css'

function ModalSession({ show, onHide, props }) {
    const init = ({
        namaFaskes: "",
        kapasitas: "",
        jenisVaksin: "",
        tahapVaksin: "",
        tanggalPelaksanaan: "",
        waktuPelaksanaan: ""

    })


    const schema = yup.object().shape({
        namaFaskes: yup.string().required('Nama harus diisi!'),
        kapasitas: yup.number().required('Kapasitas harus diisi!'),
        jenisVaksin: yup.string().required('Jenis vaksin harus dipilih!'),
        tahapVaksin: yup.string().required('Tahap vaksin harus diisi!'),
        tanggalPelaksanaan: yup.string().required('Tanggal pelaksanaan harus diisi!'),
        waktuPelaksanaan: yup.string().required('Waktu pelaksanaan harus diisi!')
    })
    return (
        <>
            <Modal
                {...props}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className='modal-header-session' closeButton>
                    <Modal.Title className='title-header-session'>Form Pembuatan Sesi</Modal.Title>
                </Modal.Header>
                {/* <Container>
                    <Nav variant="tabs">
                        <Nav.Item style={{ marginLeft: '0' }}>
                            <Nav.Link active>Informasi Umum</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container> */}
                <Modal.Body style={{ margin: '0' }}>
                    <Container>
                        <Formik
                            validationSchema={schema}
                            onSubmit={(values) => { console.log(values) }}
                            initialValues={init}
                        >
                            {({ handleSubmit,
                                handleChange,
                                values,
                                // handleBlur,
                                // touched,
                                // isValid,
                                errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridNama">
                                            <Form.Label>Nama Faskes</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name='namaFaskes'
                                                value={values.namaFaskes}
                                                onChange={handleChange}
                                                isInvalid={errors.namaFaskes}
                                                placeholder="Masukkan nama faskes..." />
                                            {/* {(values === "") ? ( */}
                                            <Form.Control.Feedback type='invalid'>{errors.namaFaskes}</Form.Control.Feedback>
                                            {/* // ) : ""} */}

                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridKapasitas">
                                            <Form.Label>Kapasitas</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="kapasitas"
                                                value={values.kapasitas}
                                                onChange={handleChange}
                                                isInvalid={errors.kapasitas}
                                                placeholder="Masukkan kapasitas..." />
                                            <Form.Control.Feedback type='invalid'>{errors.kapasitas}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Jenis Vaksin</Form.Label>
                                            <Form.Select
                                                aria-label="Default select example"
                                                name="jenisVaksin"
                                                value={values.jenisVaksin}
                                                onChange={handleChange}
                                                // defaultValue={values.jenisVaksin}
                                                isInvalid={errors.jenisVaksin}>
                                                <option selected value="">Open this select menu</option>
                                                <option value="sinovac">Sinovac</option>
                                                <option value="astrazenecca">AstraZenecca</option>
                                                <option value="pfizer">Pfizer</option>
                                                <option value="moderna">Moderna</option>
                                            </Form.Select>
                                            <Form.Control.Feedback type='invalid'>{errors.jenisVaksin}</Form.Control.Feedback>
                                            {/* <Form.Control type="text" placeholder="Pilih salah satu!" /> */}
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Tahap Vaksin</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="tahapVaksin"
                                                value={values.tahapVaksin}
                                                onChange={handleChange}
                                                isInvalid={errors.tahapVaksin}
                                                placeholder="Masukkan tahap vaksin..." />
                                            <Form.Control.Feedback type='invalid'>{errors.tahapVaksin}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Tanggal Pelaksanaan</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="tanggalPelaksanaan"
                                                value={values.tanggalPelaksanaan}
                                                onChange={handleChange}
                                                placeholder="DD/MM/YY"
                                                isInvalid={errors.tanggalPelaksanaan} />
                                            <Form.Control.Feedback type='invalid'>{errors.tanggalPelaksanaan}</Form.Control.Feedback>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Waktu Pelaksanaan</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="waktuPelaksanaan"
                                                value={values.waktuPelaksanaan}
                                                onChange={handleChange}
                                                placeholder="00.00 - 01.00"
                                                isInvalid={errors.waktuPelaksanaan} />
                                            <Form.Control.Feedback type='invalid'>{errors.waktuPelaksanaan}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Modal.Footer style={{justifyContent:'center'}}>
                                        <Button className='button-modal-session' variant="primary" type='submit'>Simpan</Button>
                                    </Modal.Footer>
                                </Form>
                            )}


                        </Formik>
                    </Container>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default ModalSession
