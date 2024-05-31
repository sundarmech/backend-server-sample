import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './tem.css';
import contact from './images/contact-img.jpg'

const Contactsection = () => {
    return (
        <div>
            <Container fluid>
                <Row className='conatct-bg text-light'>
                    <Col lg={6}>
                        <img className='w-100' src={contact} alt="img" />
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h2 className='fw-bold text-uppercase mt-5 py-5'>contact us</h2>
                        </div>
                        <div>
                            <form action="">
                                <div>
                                    <input className='text-capitalize input-box' type="text" placeholder='name' />
                                </div>
                                <div>
                                    <input className='text-capitalize input-box' type="text" placeholder='email' />
                                </div>
                                <div>
                                    <input className='text-capitalize input-box' type="text" placeholder='phone number' />
                                </div>
                                <div>
                                    <input className='text-capitalize input-box message-box' type="text" placeholder='message' />
                                </div>
                                <div>
                                    <button className='contact-btn'>send</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contactsection