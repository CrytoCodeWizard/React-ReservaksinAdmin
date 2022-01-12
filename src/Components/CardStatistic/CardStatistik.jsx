import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaRegHospital, FaRegClock } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";
import { RiContactsLine } from "react-icons/ri";
import "./Card.css";

function CardStatistik({ data, id }) {
    const size = 25;
    const logoList = [
        <FaRegHospital size={size} className="icon-style" />,
        <FaRegClock size={size} className="icon-style" />,
        <GiLoveInjection size={size} className="icon-style" />,
        <RiContactsLine size={size} className="icon-style" />,
    ];
    return (
        <Col style={{ marginTop: "2rem" }} md>
            <Card className="card-style card-style-gradient">
                <Card.Body className="card-style-body">
                    <Row>
                        <Col className="col-icon" sm={1}>
                            <div className="icon-circle">{logoList[id]}</div>
                        </Col>
                        <Col className="col-text" sm={2}>
                            <span className="col-text-span">{data.title}</span>
                            <p className="col-text-p">{data.total}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default CardStatistik;
