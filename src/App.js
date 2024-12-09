import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import ParentChild from './ParentChild';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img src="pngtree-a-company-name-design-logo-template-brand-name-template-png-image_4468473.jpg" alt="Logo" width="50" height="50" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/services">Services</Nav.Link>
          <Nav.Link as={Link} to="/parentChild">ParentChild</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='/Contact'element={<Contact/>}></Route>
      <Route path='/About'element={<About/>}></Route>
      <Route path='/Services'element={<Services/>}></Route>
      <Route path='/ParentChild'element={<ParentChild/>}></Route>

    </Routes>
      </Router>
    </div>
  );
}

export default App;
