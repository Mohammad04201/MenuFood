// Navbar.js
import React from "react";
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Row,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ onSearch }) => {
    const location = useLocation();

    return (
        <Row>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <div className="brand-color">مطعم جديد</div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link
                                as={Link}
                                to="/"
                                className="brand-color text-decoration-none"
                            >
                                الصفحه الرئيسة
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/menu"
                                className="brand-color text-decoration-none"
                            >
                                قائمة الطعام
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/add"
                                className="brand-color text-decoration-none"
                            >
                                اضافه منتج
                            </Nav.Link>
                        </Nav>

                        {location.pathname === "/menu" && (
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="ابحث.."
                                    className="mx-2"
                                    onChange={(e) => onSearch(e.target.value)}
                                />
                                <button className="btn-search">بحث</button>
                            </Form>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
};

export default NavBar;
