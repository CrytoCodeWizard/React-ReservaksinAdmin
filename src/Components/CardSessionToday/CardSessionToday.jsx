import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { GiLoveInjection } from "react-icons/gi";
import "./Card.css";

const sessionToday = [
    {
        tahap: 1,
        rumahSakit: {
            id: 1,
            nama: "RS Karya Medika",
        },
        tanggal: "Kamis, 09 Desember 2021",
        waktu: "14.35 WITA",
        vaksin: {
            id: 1,
            nama: "Sinovac",
        },
    },
    {
        tahap: 2,
        rumahSakit: {
            id: 1,
            nama: "RS Karya Medika",
        },
        tanggal: "Kamis, 09 Desember 2021",
        waktu: "14.10 WITA",
        vaksin: {
            id: 1,
            nama: "Sinovac",
        },
    },
];
function CardSessionToday(props) {
    return (
        <Card className="card-session-today">
            <Card.Body className="body-session-today">
                <Card.Text className="text-session-today">
                    Riwayat Vaksinasi
                </Card.Text>
                {sessionToday.map((item) => (
                    <>
                    <Row>
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
                                Tahap {sessionToday[0].tahap}
                            </h6>
                            <p className="text-tanggal-dan-vaksin">
                                {sessionToday[0].tanggal},{" "}
                                {sessionToday[0].waktu}
                            </p>
                            <p className="text-rumah-sakit">
                                {sessionToday[0].rumahSakit.nama}
                            </p>
                            <p className="text-tanggal-dan-vaksin">
                                {sessionToday[0].vaksin.nama}
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
