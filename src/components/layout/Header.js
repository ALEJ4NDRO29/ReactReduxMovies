import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import './style.css'

// HEADER DE LA APLICACIÓN 
class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar bg="light">
                    <Nav className="mr-auto">
                        <Link to="/">Home</Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;