import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRouteSwitch from './AppRouteSwitch';
import './Style.css';

function MenuLink({ children, ...props }) {
  return (
    <Link style={{ textDecoration: 'none' }} {...props}>{children}</Link>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node,
};

export default function AppNavBar() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Uber Delivery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as="div"><MenuLink className="navlink" to="/">Home</MenuLink></Nav.Link>
            <Nav.Link as="div"><MenuLink className="navlink" to="/restaurants">Restaurants</MenuLink></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <AppRouteSwitch />
    </Router>

  );
}
