import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { GiLoveInjection } from 'react-icons/gi'
import './CardRiwayatVaksin.css'

const tahapVaksin =[
    {
        tahap: 1,
        rumahSakit: {
            id: 1,
            nama: 'RS Karya Medika'
        },
        tanggal: 'Kamis, 09 Desember 2021',
        waktu: '14.35 WITA',
        vaksin: {
            id: 1,
            nama: 'Sinovac'
        }
    },
    {
        tahap: 2,
        rumahSakit: {
            id: 1,
            nama: 'RS Karya Medika'
        },
        tanggal: 'Kamis, 09 Desember 2021',
        waktu:'14.10 WITA',
        vaksin: {
            id: 1,
            nama: 'Sinovac'
        }
    }
]

function CardRiwayatVaksin() {
    
    return (
        
                <Col sm={4}>
                    <Card className='card-riwayat-vaksin'>
                        <Card.Body className='body-riwayat-vaksin'>
                            <Card.Text className='text-riwayat-vaksinasi'>
                                Riwayat Vaksinasi
                            </Card.Text>
                            <Row>
                                <Col sm={2} className='icon-riwayat-vaksin'>
                                    <div className='div-icon-riwayat-vaksin'>
                                        <GiLoveInjection size={25} className='icon-style-riwayat-vaksin' />
                                    </div>
                                </Col>
                                <Col sm={6} className='col-desc-riwayat-vaksin'>
                                    <h6 className='h6-tahap-vaksin'>Tahap {tahapVaksin[0].tahap}</h6>
                                    <p className='text-tanggal-dan-vaksin'>{tahapVaksin[0].tanggal}, {tahapVaksin[0].waktu}</p>
                                    <p className='text-rumah-sakit'>{tahapVaksin[0].rumahSakit.nama}</p>
                                    <p className='text-tanggal-dan-vaksin'>{tahapVaksin[0].vaksin.nama}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <hr style={{color:'white',width:'1px', height:'50px'}}/>
                                </Col>
                                <Col sm={6}>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2} className='icon-riwayat-vaksin'>
                                    <div className='div-icon-riwayat-vaksin'>
                                        <GiLoveInjection size={25} className='icon-style-riwayat-vaksin' />
                                    </div>
                                </Col>
                                <Col sm={6} className='col-desc-riwayat-vaksin'>
                                    <h6 className='h6-tahap-vaksin'>Tahap {tahapVaksin[1].tahap}</h6>
                                    <p className='text-tanggal-dan-vaksin'>{tahapVaksin[1].tanggal}, {tahapVaksin[0].waktu}</p>
                                    <p className='text-rumah-sakit'>{tahapVaksin[1].rumahSakit.nama}</p>
                                    <p className='text-tanggal-dan-vaksin'>{tahapVaksin[1].vaksin.nama}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
    )
}

export default CardRiwayatVaksin
