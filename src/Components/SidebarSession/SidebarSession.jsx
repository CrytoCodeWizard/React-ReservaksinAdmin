import React, { useState } from 'react'
import { Container, Card, Nav, Button } from 'react-bootstrap'
import { IoAddCircleOutline } from 'react-icons/io5'
import { MdOutlineGridView, MdIntegrationInstructions } from 'react-icons/md'
import { BsCalendarEvent, BsArrowCounterclockwise } from 'react-icons/bs'
import ModalSession from '../ModalSession/ModalSession'
import './SidebarSession.css'

function SidebarSession({handleFetch}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container className='sidebar-session'>
            <Card className='container-card'>
                <Card.Body>
                    <Button className='button-style' onClick={handleShow} variant="primary">Add <IoAddCircleOutline size={25} className='icon-button' /></Button>
                    <ModalSession onHide={handleClose} show={show} handleFetch={handleFetch}/>
                    <Container className='container-nav-item'>
                        <Nav variant="pills" style={{ display: 'block' }} defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="/session"><MdOutlineGridView className='icon-nav-link' size={20} />All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/session/current"><MdIntegrationInstructions className='icon-nav-link' size={20} />Current</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/session/upcoming"><BsCalendarEvent className='icon-nav-link' size={20} />Upcoming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/session/history"><BsArrowCounterclockwise className='icon-nav-link' size={20} />History</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SidebarSession
