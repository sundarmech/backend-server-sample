import 'bootstrap/dist/css/bootstrap.min.css';
import './tem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ussection from './images/u-1.png';
import nutrition from './images/u-4.png';
import diet from './images/u-2.png';
import training from './images/u-3.png';

function Ussection() {
    return (
        <div>
            <div className='us-img'>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='us-heading text-center py-5'>WHY CHOOSE US</h1>
                        </Col>
                    </Row>
                    <Row className='py-3'>
                        <Col lg={3} md={6}>
                            <div>
                                <Card.Img src={ussection} className='quality-img pb-4' />
                                <Card.Body>
                                    <Card.Title className='text-light text-center fw-bold'>QUALITY EQUIPMENT</Card.Title>
                                    <Card.Text className='text-light text-center mt-2'>
                                        ipsum dolor sit amet,<br /> consectetur ad.ipiscing elit, <br />sed do eiusmod tempor
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='text-light '>
                            <div>
                                <Card.Img src={nutrition} className='quality-img nutrion-img pb-4' />
                                <Card.Body>
                                    <Card.Title className='text-light text-center fw-bold'>NUTRITION</Card.Title>
                                    <Card.Text className='text-light mt-2 text-center'>
                                        ipsum dolor sit amet,<br /> consectetur ad.ipiscing elit,<br /> sed do eiusmod tempor
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='text-light '>
                            <div>
                                <Card.Img src={diet} className='quality-img nutrion-img pb-4' />
                                <Card.Body>
                                    <Card.Title className='text-light  text-center fw-bold'>HEALTHY DIET PLAN</Card.Title>
                                    <Card.Text className='text-light mt-2 text-center'>
                                        ipsum dolor sit ame,<br /> consectetur ad.ipiscing elit,<br /> sed do eiusmod tempor
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className='text-light'>
                            <div>
                                <Card.Img src={training} className='quality-img nutrion-img pb-5' />
                                <Card.Body>
                                    <Card.Title className='text-light text-center  fw-bold'>SPORT TRAINING</Card.Title>
                                    <Card.Text className='text-light  mt-2 text-center'>
                                        ipsum dolor sit amet,<br /> consectetur ad.ipiscing elit,<br /> sed do eiusmod tempor
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    )

}
export default Ussection;