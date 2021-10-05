import React from 'react';
import { Navbar, Nav, Container, Stack, Row, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './NavbarMenu.css'

const NavbarMenu = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#ff512f",
        backgroundColor: 'transparent'
    }
    const faShoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <Navbar className="navbar-menu" fixed="top" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="text-light fw-bolder logo">
                    <span className="logo-part-1">WebTech</span> <span className="logo-part-2">Dev</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Stack direction="horizontal" gap={3}>
                            <NavLink
                            className="navbar-link"
                            to="/home"
                            activeStyle={activeStyle}
                            >
                                Home
                            </NavLink>
                            <NavLink
                            className="navbar-link"
                            to="/about-us"
                            activeStyle={activeStyle}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                            className="navbar-link"
                            to="/all-courses"
                            activeStyle={activeStyle}
                            >
                                All Courses
                            </NavLink>
                            <NavLink
                            className="navbar-link"
                            to="/contact-us"
                            activeStyle={activeStyle}
                            >
                                Contact Us
                            </NavLink>
                            <NavLink
                            className="navbar-link"
                            to="/review-order"
                            activeStyle={activeStyle}
                            >
                                Cart {faShoppingCartIcon}
                            </NavLink>
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarMenu;