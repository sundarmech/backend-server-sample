import 'bootstrap/dist/css/bootstrap.min.css';
import "./tem.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Navbars() {
  return (
    <div>
      <div className='bg-img'>
        {/* navbar section */}
        <Navbar collapseOnSelect expand="lg " >
            <Navbar.Brand href="#home" className='head logo'>NEOGYM</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link  to='/' className='nav nav-items px-4 ' >Home</Nav.Link>
                <Nav.Link  to='/' className='nav nav-items px-4'>why us</Nav.Link>
                <Nav.Link  className='nav nav-items px-4'>products</Nav.Link>
                <Nav.Link  className='nav nav-items px-4'>Log in</Nav.Link>
                <Nav.Link  className='nav nav-items px-4'>Sign in</Nav.Link>
                <Nav.Link  className='nav nav-items px-4'>Contact Us</Nav.Link>
                <Nav.Link  className='nav nav-items px-4'>trainers</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        
        </Navbar>
        <div>
          {/* slider section */}
          <Container>
            <Row>
              <Col className='text-center text-color'>
                <h3 className='fitness'>FITNESS</h3>
                <h2 className='fitness training'>TRAINING</h2>
                <h1 className='fitness neo'>NEOGYM</h1>
                <div className='slider-para mx-auto'>
                <p className=' py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .</p>
                </div>
                <button className='button my-4'>contact us</button>
                <div className='my-2 py-5'>
                <span className='slider-icon px-2' ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg></span>
                <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg></span>
                <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg></span>
                <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg></span>
                <span className='px-2'><svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                </svg></span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    </div>
  )
}
export default Navbars;