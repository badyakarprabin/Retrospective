import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href='/#'>Retrospective</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}>
                    <Link activeClass="active" to="good" spy={true} smooth={true} offset={-100} duration={500}>
                        Good
                        </Link>
                </NavItem>
                <NavItem eventKey={2}>
                    <Link activeClass="active" to="improvement" spy={true} smooth={true} offset={-100} duration={500}>
                        Improvements
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
