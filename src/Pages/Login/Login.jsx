import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import image from '../../Assets/Images/2853458.jpg'
import { Toaster } from "react-hot-toast";
import { ToastError } from "../../Components/Toast/Toast";
import './Login.css'
import axios from 'axios'
import useHandleLogin from '../../Hooks/UseHandleLogin';

function Login(props) {
    
    // const navigate = useNavigate();
    // const dispatch = useDispatch();

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
    const handleLogin = useHandleLogin();
    const [isLoaded, setIsLoaded] = useState(false);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const validForm = Object.keys(form).filter((key) => form[key] !== "");

    //     if (validForm.length < 2) {
    //         validateOnSubmit();
    //     } else {
    //         if (errMsg.username !== "" || errMsg.password !== "") {
    //             ToastError("masih ada data yg kosong!")
    //             return;
    //         }
    //         //axios
    //         const API_URL = process.env.REACT_APP_BE_API_URL_LOCAL;
    //         // axios
    //         // .get(`${API_URL}/admin/login`, 
    //         //     JSON.stringify(form),  {headers: {
    //         //         'Accept': 'application/json',
    //         //         'Content-type': 'application/json',
    //         //       },}
    //         // )
    //         // .then((res) => {
    //         //     console.log("isi res", res)
    //         //     // handleLogin(res.ResponseJSON)
    //         // })
    //         // .catch((error) => {
    //         //     console.log(error)
    //         //     // setErrMsg({
    //         //     //     ...errMsg,
    //         //     //     password: error.response.data.meta.messages[0]
    //         //     // })
    //         // })
            
    //         //redux
    //         // const loginData = {
    //         //     username: form.username,
    //         //     login: true,
    //         // };
    //         // dispatch(login(loginData));
    //         // navigate("/");
    //     }

    //     console.log(validForm)
    // };
    const [error, setError] = useState([]);
    const [sucessLogin, setSucessLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        axios
          .post("http://localhost:9090/admin/login", form)
          .then((resp) => {
            console.log(resp);
            if (resp.data.meta.status !== 200) {
              setError(resp.data.meta.messages);
            } else {
              localStorage.setItem("token", resp.data.data.token);
              setSucessLogin(true);
            }
          })
          .catch((e) => {
            console.error(e);
            if (e.response) {
              console.log(e.response);
            } else if (e.request) {
              console.log(e.request);
            }
          });
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
                                    <span>Contact to dev@reservaksin.com</span>
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
