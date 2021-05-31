import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {};

    return (
        <Navbar className="py-0 px-1" color="light" light expand="md">
            <NavbarBrand href="/">
                <img src="logo.png" alt="" width="172" height="50" />
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav
                    className="d-flex flex-row w-100 align-items-center"
                    navbar
                >
                    <NavItem className="mx-2">
                        <Link
                            to="/token"
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Token
                        </Link>
                    </NavItem>
                    <NavItem className="mx-2">
                        <Link
                            to="/nft"
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            NFT
                        </Link>
                    </NavItem>
                    <NavItem className="mx-2">
                        <Link
                            to="/about"
                            style={{
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            About
                        </Link>
                    </NavItem>
                    <NavItem className="mx-3 ml-auto">
                        <Button
                            className="btn-sm btn-falcon-default rounded-capsule"
                            onClick={toggleTheme}
                        >
                            Toggle
                            <span
                                className="fa-align-right ml-2"
                                data-fa-transform="shrink-3"
                            >
                                {isDarkMode ? (
                                    <FontAwesomeIcon icon={faLightbulb} />
                                ) : (
                                    <FontAwesomeIcon icon={faLightbulb} />
                                )}
                            </span>
                        </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
