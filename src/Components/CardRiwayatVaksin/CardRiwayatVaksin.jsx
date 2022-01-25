import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { GiLoveInjection } from "react-icons/gi";
import "./CardRiwayatVaksin.css";

const tahapVaksin = [
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

function CardRiwayatVaksin({ data }) {
    console.log("isi data card", data);
    return (
        <Col sm={4}>
            <Card className="card-riwayat-vaksin">
                <Card.Body className="body-riwayat-vaksin">
                    <Card.Text className="text-riwayat-vaksinasi">
                        Riwayat Vaksinasi
                    </Card.Text>
                    {data.length === 0 ? (
                        <h6 className="text-center">riwayat vaksinasi tidak ditemukan</h6>
                    ) : (
                        data?.map((item, idx) => (
                            <Row key={idx}>
                                <Col sm={2} className="icon-riwayat-vaksin">
                                    <div className="div-icon-riwayat-vaksin">
                                        <GiLoveInjection
                                            size={25}
                                            className="icon-style-riwayat-vaksin"
                                        />
                                    </div>
                                </Col>
                                <Col sm={6} className="col-desc-riwayat-vaksin">
                                    <h6 className="h6-tahap-vaksin">
                                        Tahap {item.tahap}
                                    </h6>
                                    <p className="text-tanggal-dan-vaksin">
                                        {item.tanggal},{" "}
                                        {item.waktu}
                                    </p>
                                    <p className="text-rumah-sakit">
                                        {item.rumahSakit.nama}
                                    </p>
                                    <p className="text-tanggal-dan-vaksin">
                                        {item.vaksin.nama}
                                    </p>
                                </Col>
                            </Row>
                        ))
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardRiwayatVaksin;
