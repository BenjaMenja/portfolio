import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

function MyNavbar() {
    return (
        <div>
            <Navbar style={{
                background: '#000000',
                display: 'flex',
                height: '8.5vh',
                marginBottom: '10rem',
                fontSize: '1rm',
                alignItems: "center",
            }}>
                <NavbarBrand href="/" style={{
                    color: "#FFFFFF",
                    marginLeft: '5%',
                    fontSize: '1.1rem'
                }}>
                    <i className="bi-code-square" style={{
                        paddingRight: '4%'
                    }}></i>
                    Benjamin Gelinas
                </NavbarBrand>
                <Nav className="ms-auto">
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
            </Navbar>
        </div>
    )
}

export default MyNavbar;