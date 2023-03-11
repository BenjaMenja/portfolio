import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import './navbar-styles.css'

function MyNavbar() {
    return (
        <div>
            <Navbar style={{
                background: '#000000',
                display: 'flex',
                height: '8.5vh',
                marginBottom: '10rem'
            }}>
                <div className="text-format">
                    <NavbarBrand href="/" style={{
                        color: "#FFFFFF"
                    }}>
                        <i className="bi-code-square" style={{
                            padding: '16px'
                        }}></i>
                        Benjamin Gelinas
                    </NavbarBrand>
                    <Nav className="me-auto" style={{marginLeft: '65vw'}}>
                        <NavItem>
                            <NavLink href="/" style={{color: '#FFFFFF'}}>
                                <i className="bi-house-fill"></i>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about" style={{color: '#FFFFFF'}}>
                                <i className="bi-person-fill"></i>
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/projects" style={{color: '#FFFFFF'}}>
                                <i className="bi-wrench"></i>
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/resume" style={{color: '#FFFFFF'}}>
                                <i className="bi-newspaper"></i>
                                Resume
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}

export default MyNavbar;