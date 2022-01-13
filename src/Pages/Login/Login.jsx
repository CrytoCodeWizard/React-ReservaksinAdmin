import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import image from "../../Assets/Images/2853458.jpg";
import { Toaster} from "react-hot-toast";
import { ToastError } from "../../Components/Toast/Toast";
import "./Login.css";
import axios from "axios";
import jwt from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import {login} from '../../Config/Redux/LoginSlice';

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

    //validation function
    const validateFormValue = (name, value) => {
        //validate username
        if (name === "username" && value !== "") {
            setErrMsg({ ...formError, username: "" });
        }
        //validate password
        if (name === "password" && value !== "") {
            setErrMsg({ ...formError, password: "" });
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
                    const err = `${
                        key.charAt(0).toUpperCase() + key.slice(1)
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
    
    const [error, setError] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        const validForm = Object.keys(form).filter((key) => form[key] !== "");

        if (validForm.length < 2) {
            validateOnSubmit();
        } else {
            var API_URL = 'http://localhost:9090';
            axios
                .post(`${API_URL}/admin/login`, form)
                .then((resp) => {
                    console.log("isi resp",resp);
                    if (resp.data.meta.status !== 200) {
                        setError(resp.data.meta.messages);
                    } else {
                        //extract token -> supaya dapat id user
                        var user = jwt(resp.data.data.token);
                        dispatch(login({username:form.username, login:true, token:resp.data.data.token, id: user.id}));
                        navigate("/")
                    }
                })
                .catch((e) => {
                    console.error(e);
                    if (e.response) {
                        if(e.response.status === 400){
                            ToastError("Username atau password salah!")
                        }
                        // console.log("isi err response", e.response);
                    } else if (e.request) {
                        console.log("isi err req", e.request);
                    }
                });
        }
    };
    return (
        <>
            <Container className="login">
                <Toaster />
                <Container className="login-grid">
                    <Row className="login-row">
                        <Col className="img-col" xs={6}>
                            <Container className="container-content">
                                <img
                                    src={image}
                                    className="image"
                                    alt="ini background"
                                ></img>
                            </Container>
                        </Col>
                        <Col className="col-hr" xs={1}>
                            {/* <div className="middle-line"></div> */}
                            <Container className="container-content">
                                <hr style={{ height: "430px", width: "1px" }} />
                            </Container>
                        </Col>
                        <Col className="container-content" xs={5}>
                            <Container className="container-content-form">
                                <Container className="container-content-title">
                                    <h3>Login as Admin</h3>
                                    <hr />
                                </Container>
                                <Container
                                    // onSubmit={handleSubmit}
                                    className="container-input"
                                >
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            id="username"
                                            type="text"
                                            value={form.username}
                                            onChange={handleChange}
                                            name="username"
                                            placeholder="Username"
                                            className="input-form"
                                        ></input>
                                        <span className="err">
                                            {errMsg.username}
                                        </span>
                                        <br />
                                        <input
                                            id="password"
                                            type="password"
                                            value={form.password}
                                            onChange={handleChange}
                                            name="password"
                                            placeholder="Password"
                                            className="input-form"
                                        ></input>
                                        <span className="err">
                                            {errMsg.password}
                                        </span>
                                        <br />
                                        <Button
                                            type="submit"
                                            className="button-content-form"
                                            style={{ cursor: "pointer" }}
                                            // onClick={handleLogin}
                                        >
                                            Login
                                        </Button>
                                    </form>
                                </Container>
                                <Container className="container-contact">
                                    <span>Forgot password?</span> <br />
                                    <span>Contact to dev@reservaksin.com</span>
                                </Container>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
        // </div>
    );
}

export default Login;
