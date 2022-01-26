import React, {useState, useEffect} from "react";
import { Card, Row, Col } from "react-bootstrap";
import { GiLoveInjection } from "react-icons/gi";
import "./Card.css";
import Error500 from "../Error/Error500";
import axios from "axios";
import {useSelector} from "react-redux";
import {DateFullFormat} from "../../Utilities/DateFormatter/DateFormat";
import {GetTime} from "../../Utilities/DateFormatter/GetTime";

function CardSessionToday(props) {
    const ADMIN_ID = useSelector((state) => state.auth.id)
    //state for vaccine
    const [isLoaded, setIsLoaded] = useState(false);
    const [sessionToday, setSessionToday] = useState([]);
    const [error, setError] = useState();

    const handleFetch = async () => {
        let result;
        try {
            const instance = axios.create({
                baseURL: "https://reservaksin-be.herokuapp.com",
            });
            result = await instance.get(`session/current/admin/${ADMIN_ID}`);
            setIsLoaded(true);
            setSessionToday(result.data.data);
        } catch (err) {
            if (err.response.status === 500) {
                return <Error500 />;
            }
            console.log(err);
            setIsLoaded(true);
            setError(err);
        }
    };
    console.log("isi curr session dashboard", sessionToday)
    useEffect(() => {
        handleFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Card className="card-session-today">
            <Card.Body className="body-session-today">
                <Card.Text className="text-session-today">
                    Jadwal Vaksinasi Hari Ini
                </Card.Text>
                {
                sessionToday.length === 0 ?
                <h5 className="font-weight-bold text-center">Tidak ada sesi hari ini</h5>
                :
                sessionToday.map((item) => (
                    <>
                    <Row key={item.id}>
                        <Col sm={2} className="icon-session-today">
                            <div className="div-icon-session-today">
                                <GiLoveInjection
                                    size={25}
                                    className="icon-style-session-today"
                                />
                            </div>
                        </Col>
                        <Col sm={6} className="col-desc-session-today">
                            <h6 className="h6-tahap-vaksin">
                                Tahap {item.tahap}
                            </h6>
                            <p className="text-tanggal-dan-vaksin">
                                {DateFullFormat(item.date)},{" "}
                                {GetTime(item.start_session)}
                            </p>
                            <p className="text-rumah-sakit">
                                {item.health_facilities}
                            </p>
                            <p className="text-tanggal-dan-vaksin">
                                {item.vaccine}
                            </p>
                        </Col>
                    </Row>
                    <hr/>
                    </>
                ))}
            </Card.Body>
        </Card>
    );
}

export default CardSessionToday;
