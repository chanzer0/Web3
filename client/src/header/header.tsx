import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
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
                <Nav className="d-flex flex-row w-100" navbar>
                    <NavItem className="mx-1">
                        <NavLink href="/token">Token</NavLink>
                    </NavItem>
                    <NavItem className="mx-1">
                        <NavLink href="/nft">NFT</NavLink>
                    </NavItem>
                    <NavItem className="mx-1">
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem className="mx-3 ml-auto">
                        <Button
                            className="btn-sm btn-falcon-default rounded-capsule"
                            style={{ marginTop: '5px' }}
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
