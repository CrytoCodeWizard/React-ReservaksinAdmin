import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import image from '../../Assets/Images/2853458.jpg'
import { useDispatch } from "react-redux";
import { login } from "../../Config/Redux/LoginSlice";
import { Toaster } from "react-hot-toast";
import { ToastError } from "../../Components/Toast/Toast";
import { useNavigate } from "react-router-dom";
import './Login.css'


function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formKosong = {
        username: "",
        password: "",
    };
    const formError = {
        username: "",
        password: "",
    };

    //init state
    const [form, setForm] = useState(formKosong);
    const [errMsg, setErrMsg] = useState(formError);

    //regex for validation
    const isEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const isNIK =
    //     /^(1[1-9]|21|[37][1-6]|5[1-3]|6[1-5]|[89][12])\d{2}\d{2}([04][1-9]|[1256][0-9]|[37][01])(0[1-9]|1[0-2])\d{2}\d{4}$/;

    //validation function
    const validateFormValue = (name, value) => {
        //validate username
        if (name === "username") {
            if (isEmail.test(value)) {
                setErrMsg({ ...formError, username: "" });
            } else {
                if (isNaN(value)) {
                    setErrMsg({ ...formError, username: "email yang Anda masukkan salah" });
                } else {
                    setErrMsg({ ...formError, username: "NIK yang anda masukkan salah" });
                }
            }
            //validate password
            if (name === "password" && value !== "") {
                setErrMsg({ ...formError, password: "" });
            }
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        validateFormValue(name, value);
        setForm({
            ...form,
            [name]: value,
        });
    };

    const validateOnSubmit = () => {
        setErrMsg(() => {
            const errorMessageArr = Object.keys(errMsg).map((key) => {
                if (form[key] === "") {
                    const err = `${key.charAt(0).toUpperCase() + key.slice(1)
                        } tidak boleh kosong`;

                    return { [key]: err };
                }
                return { [key]: "" };
            });
            const updatedErrorMessage = errorMessageArr.reduce(
                (previousValue, currentValue) => {
                    return { ...previousValue, ...currentValue };
                },
                {}
            );
            return updatedErrorMessage;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validForm = Object.keys(form).filter((key) => form[key] !== "");

        if (validForm.length < 2) {
            validateOnSubmit();
        } else {
            console.log(errMsg)
            if (errMsg.username !== "" || errMsg.password !== "") {
                ToastError("masih ada data yg salah!")
                return;
            }
            const loginData = {
                username: form.username,
                login: true,
            };
            dispatch(login(loginData));
            navigate("/");
        }

        console.log(validForm)
    };

    return (
        <>
            <Container className='login'>
                <Toaster />
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
                                <Container
                                    // onSubmit={handleSubmit} 
                                    className='container-input'>
                                    <form onSubmit={handleSubmit}>
                                        <input id="username" type="text"
                                            value={form.username}
                                            onChange={handleChange}
                                            name="username" placeholder="Username" className="input-form"></input>
                                        <span className='err'>{errMsg.username}</span>
                                        <br />
                                        <input id="password" type="password"
                                            value={form.password}
                                            onChange={handleChange}
                                            name="password" placeholder="Password" className="input-form"></input>
                                        <span className='err'>{errMsg.password}</span>
                                        <br />
                                        <Button type='submit' className="button-content-form" style={{ cursor: 'pointer' }}
                                        // onClick={handleLogin}
                                        >Login</Button>
                                    </form>
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
