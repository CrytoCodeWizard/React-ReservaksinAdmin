import React, { useState } from 'react'
import { Modal, Button, Container, Row, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import * as yup from 'yup'

import './ModalNewVaksin.css'

function ModalNewVaksin({ show, onHide, props }) {
    // const [namaVaksin, setNamaVaksin] = useState("")
    // const [stokVaksin, setStokVaksin] = useState(0)
    const init = ({
        namaVaksin: "",
        stokVaksin: 0,
    })


    const schema = yup.object().shape({
        namaVaksin: yup.string().required('Nama vaksin harus diisi!'),
        stokVaksin: yup.number().required('Stok harus diisi!'),
    })


    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={onHide}
                style={{ borderRadius: '20px' }}
                backdrop="static"
                keyboard={false}

            >
                <Modal.Header className='modal-header-new-vaksin' closeButton>
                    <Modal.Title className='title-modal-new-vaksin'>
                        Form Vaksin Baru
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Formik
                            validationSchema={schema}
                            onSubmit={(values) => { console.log(values) }}
                            initialValues={init}>
                            {({ handleSubmit,
                                handleChange,
                                values,
                                // handleBlur,
                                // touched,
                                // isValid,
                                errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className='mb-3'>
                                        <Form.Label>Nama Vaksin</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Masukkan nama vaksin...'
                                            name='namaVaksin'
                                            value={values.namaVaksin}
                                            onChange={handleChange}
                                            isInvalid={errors.namaVaksin} />
                                        <Form.Control.Feedback type='invalid'>{errors.namaVaksin}</Form.Control.Feedback>

                                    </Row>
                                    <Row>
                                        <Form.Label>Stok</Form.Label>
                                        <Form.Control
                                            type='number'
                                            placeholder='Contoh:1000'
                                            name='stokVaksin'
                                            value={values.stokVaksin}
                                            onChange={handleChange}
                                            isInvalid={errors.stokVaksin} />
                                        <Form.Control.Feedback type='invalid'>{errors.stokVaksin}</Form.Control.Feedback>

                                    </Row>
                                    <Modal.Footer style={{ justifyContent: 'center' }}>
                                        <Button 
                                        className='button-modal-session' 
                                        variant="primary" 
                                        type='submit'
                                        >Tambah</Button>
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

export default ModalNewVaksin
