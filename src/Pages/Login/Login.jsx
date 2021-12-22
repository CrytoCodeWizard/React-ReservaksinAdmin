import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import image from '../../Assets/Images/2853458.jpg'
import './Login.css'

function Login() {
    const [state, setstate] = useState({
        username: "",
        password: "",
    })


    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Container className='login'>
                <Container className='login-grid'>
                    <Row className='login-row'>
                        <Col className='img-col' xs={6}>
                            <Container className='container-content'>
                                <img src={image} className='image' alt="ini background"></img>
                            </Container>

                        </Col>
                        <Col className='col-hr' xs={1}>
                            {/* <div className="middle-line"></div> */}
                            <Container className='container-content'>
                                <hr style={{ height: '430px', width: '1px' }} />
                            </Container>

                        </Col>
                        <Col className='container-content' xs={5}>
                            <Container className='container-content-form'>
                                <Container className='container-content-title'>
                                    <h3>Login as Admin</h3>
                                    <hr />
                                </Container>
                                <Container className='container-input'>
                                    <input id="username" type="text"
                                        value={state.username}
                                        onChange={handleChange}
                                        name="username" placeholder="Username" className="input-form"></input> <br />
                                    <input id="password" type="password"
                                        value={state.password}
                                        onChange={handleChange}
                                        name="password" placeholder="Password" className="input-form"></input> <br />
                                    <Button className="button-content-form" style={{ cursor: 'pointer' }}
                                        onClick={handleLogin}
                                    >Login</Button>
                                </Container>
                                <Container className='container-contact'>
                                    <span>Forgot password?</span> <br />
                                    <span>Contact to dev@aol.com</span>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
        // </div>
    )
}

export default Login
