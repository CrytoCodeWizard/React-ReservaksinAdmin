import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import image from '../../Assets/Images/2853458.jpg'
import './Login.css'

function Login() {
    const [state, setstate] = useState({
        username: "",
        password: "",
    })

    // const handleError = () => {
    //     if (errorAdmin) {
    //         alert("data tidak sama atau data kosong")
    //     }

    // }

    const handleChange = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        // let username = dataAdmin?.mini_project_admin_by_pk.username
        // let password = dataAdmin?.mini_project_admin_by_pk.password
        // if (state.username === "" || state.password === "") {
        //     return handleError
        // } else if (state.username === !username || state.password === !password) {
        //     return handleError
        // } else if (state.username === username && state.password === password) {
        //     history.push('/dashboard')
        // }


    }
    return (
        // <div>
        <>
            <Container className='login'>
                <Container className='login-grid'>
                    <Row className='login-row'>
                        <Col className='login-col' xs={6}>
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
                        {/* <Col sm={8}>
                            <img src={image} style={{ position: 'absolute', width: '500px', height: '500px', left: '7vw', top: '15vh' }} alt="ini background"></img>
                        </Col>
                        <div className="middle-line"></div>
                        <Col sm={4}>

                        </Col> */}
                    </Row>
                </Container>
                {/* <Container className='container'>
                        <img src={image} style={{position:'absolute', width:'500px', height:'500px', left:'7vw', top:'15vh'}} alt="ini background"></img>
                    </Container>
                    <div className="middle-line"></div>
                    <Container className="ctr-form">
                        <h3>Login as Admin</h3>
                        <hr />
                        <br />
                        <Container>
                            <input id="username" type="text"
                                value={state.username}
                                onChange={handleChange}
                                name="username" placeholder="Username" className="input-form"></input> <br />
                            <input id="password" type="password"
                                value={state.password}
                                onChange={handleChange}
                                name="password" placeholder="Password" className="input-form"></input> <br />
                            <button className="span-form" style={{ cursor: 'pointer' }}
                                onClick={handleLogin}
                            >Login</button>
                        </Container>
                        <Container className="container-text">
                            <span className="span-text-bottom">Forgot password?</span> <br />
                            <span className="span-text-bottom-contact">Contact to dev@aol.com</span>
                        </Container>
                    </Container> */}
            </Container>
        </>
        // </div>
    )
}

export default Login
