import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { GiLoveInjection } from 'react-icons/gi'

function CardRiwayatVaksin() {
    return (
        <>
            <Row style={{ marginTop: '2rem' }}>
                <Col sm={7}>
                    Card data diri
                </Col>
                <Col sm={4}>
                    <Card style={{
                        width: '380px', height: '500px', borderImage: 'linear-gradient(45deg, #0d5389, #74b9f5, #d4e3f3) 10', borderImageSlice: '1',
                        borderImageSource: 'linear-gradient(to bottom, #0d5389, #74b9f5, #d4e3f3) 10', borderRadius: '10px'
                    }}>
                        <Card.Body style={{ margin: '1rem' }}>
                            <Card.Text style={{ textAlign: 'center', fontSize: '20px', color: '#0B4774', fontWeight: 'bold' }}>
                                Riwayat Vaksinasi
                            </Card.Text>
                            <Row>
                                <Col sm={2} style={{ marginLeft: '0.3rem', marginRight: '0.3rem', paddingLeft: '0.3rem', paddingRight: '0.3rem' }}>
                                    <div style={{ width: '36px', height: '36px', background: '#0B4774', borderRadius: '20px' }}>
                                        <GiLoveInjection size={25} style={{ color: 'white', position: 'relative', top: '0.3rem', left: '0.3rem' }} />
                                    </div>
                                </Col>
                                <Col sm={6} style={{ marginRight: '0.3rem', marginLeft: '0.3rem', width: '16.4rem', paddingLeft: '0.3rem', paddingRight: '0.3rem' }}>
                                    <h6 style={{ color: '#0B4774', fontWeight: 'bold' }}>Tahap 1</h6>
                                    <p style={{ margin: '0', fontSize: '13px', color: '#454545' }}>Kamis, 09 Desember 2021, 14:35 WITA</p>
                                    <p style={{ margin: '0', fontSize: '16px', color: '#454545' }}>RS Karya Medika</p>
                                    <p style={{ margin: '0', fontSize: '13px', color: '#454545' }}>Sinovac</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <hr style={{width:'1px', height:'60px', color:'black'}}/>
                                </Col>
                                <Col sm={6}>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2} style={{ marginLeft: '0.3rem', marginRight: '0.3rem', paddingLeft: '0.3rem', paddingRight: '0.3rem' }}>
                                    <div style={{ width: '36px', height: '36px', background: '#0B4774', borderRadius: '20px' }}>
                                        <GiLoveInjection size={25} style={{ color: 'white', position: 'relative', top: '0.3rem', left: '0.3rem' }} />
                                    </div>
                                </Col>
                                <Col sm={6} style={{ marginRight: '0.3rem', marginLeft: '0.3rem', width: '16.4rem', paddingLeft: '0.3rem', paddingRight: '0.3rem' }}>
                                    <h6 style={{ color: '#0B4774', fontWeight: 'bold' }}>Tahap 1</h6>
                                    <p style={{ margin: '0', fontSize: '13px', color: '#454545' }}>Kamis, 09 Desember 2021, 14:35 WITA</p>
                                    <p style={{ margin: '0', fontSize: '16px', color: '#454545' }}>RS Karya Medika</p>
                                    <p style={{ margin: '0', fontSize: '13px', color: '#454545' }}>Sinovac</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </>
    )
}

export default CardRiwayatVaksin
