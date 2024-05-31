import 'bootstrap/dist/css/bootstrap.min.css';
import './tem.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import location from './images/location-white.png';
import call from './images/telephone-white.png';
import envelope from './images/envelope-white.png';

function Iconsection() {
    return (
        <div>
            <div >
                <Container fluid className='i-sec'>
                    <Container>
                        <Row className='py-5'>
                            <Col>
                                <img src={location} className='location' />
                                <h3 className='text-light text-center mt-4'>location</h3>
                            </Col>
                            <Col>
                                <img src={call} className='location'/>
                                <h3 className='text-light text-center mt-4'>+02 12345678910</h3>
                            </Col>
                            <Col>
                                <img src={envelope} className='location' />
                                <h3 className='text-light text-center mt-4'>demo@gmail.com</h3>
                            </Col>
                        </Row>
                    </Container>

                </Container>
            </div>

        </div>
    )
}
export default Iconsection