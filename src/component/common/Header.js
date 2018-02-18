import React from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Retrospective</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#">Good</a>
                    <a class="nav-item nav-link" href="#">Improvements</a>
                    <a class="nav-item nav-link" href="#">Course</a>
                </div>
            </div>
            {/* <Nav>
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
                <NavItem eventKey={4}>
                    <Link activeClass="active" to="course" spy={true} smooth={true} offset={-200} duration={500}>
                        Course of Action
                    </Link>
                </NavItem>
            </Nav> */}
        </nav>
    );
};

export default Header;
