import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar inverse collapseOnSelect>
            <Nav>
                <NavItem eventKey={1}>
                    <Link to="home" activeClass="active" spy={true} smooth={true} offset={-200} duration={500}>
                        Retrospective
                    </Link>
                </NavItem>
                <NavItem eventKey={2}>
                    <Link activeClass="active" to="good" spy={true} smooth={true} offset={-200} duration={500}>
                        Good
                        </Link>
                </NavItem>
                <NavItem eventKey={3}>
                    <Link activeClass="active" to="improvement" spy={true} smooth={true} offset={-200} duration={500}>
                        Improvements
                    </Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Header;
