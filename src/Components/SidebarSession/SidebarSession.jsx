import React from 'react'
import { Container, Card, Nav, Button } from 'react-bootstrap'
import { IoAddCircleOutline } from 'react-icons/io5'
import { MdOutlineGridView, MdIntegrationInstructions } from 'react-icons/md'
import {BsCalendarEvent, BsArrowCounterclockwise} from 'react-icons/bs'
import './SidebarSession.css'

function SidebarSession() {
    return (
        <Container className='sidebar-session'>
            <Card className='container-card'>
                <Card.Body>
                    <Button className='button-style' variant="primary">Add <IoAddCircleOutline size={25} className='icon-button'/></Button>
                    <Container className='container-nav-item'>
                        <Nav variant="pills" style={{display:'block'}}  defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#all"><MdOutlineGridView className='icon-nav-link' size={20}/>All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#current"><MdIntegrationInstructions className='icon-nav-link' size={20}/>Current</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#past"><BsCalendarEvent className='icon-nav-link' size={20}/>Past</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#past2"><BsArrowCounterclockwise className='icon-nav-link' size={20}/>Past</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default SidebarSession
