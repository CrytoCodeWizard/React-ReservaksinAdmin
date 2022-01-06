import React, {useState} from 'react'
import { Row, Col, Button,  } from 'react-bootstrap'
import { IoAddCircleOutline } from 'react-icons/io5'
import ModalNewVaksin from '../ModalNewVaksin/ModalNewVaksin';

function ButtonNewVaksin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Row>
                <Col sm={5}>
                    Kolom search
                </Col>
                <Col sm={3} xs='auto'>
                </Col>
                <Col sm={4}>
                <span>Sort</span>
                <Button className='button-style' onClick={handleShow} variant="primary">New <IoAddCircleOutline size={25} className='icon-button' /></Button>
                <ModalNewVaksin onHide={handleClose} show={show}/>
                </Col>
            </Row>
        </>
    )
}

export default ButtonNewVaksin
