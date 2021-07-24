import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Row,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Navbar
            className="py-0 px-1 d-flex align-items-center justify-content-center"
            color="light"
            light
            expand="md"
            style={{
                boxShadow:
                    '0 7px 14px 0 rgb(59 65 94 / 1%), 0 3px 6px 0 rgb(0 0 0 / 7%)',
            }}
        >
            <NavItem
                className="mx-4"
                style={{
                    listStyle: 'none',
                    backgroundImage: 'none',
                    backgroundRepeat: 'none',
                    backgroundPosition: '0',
                }}
            >
                <Link
                    to="/gallery"
                    style={{
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Gallery
                </Link>
            </NavItem>
            <NavbarBrand href="/">
                <img
                    src="/logo.svg"
                    alt=""
                    width="200"
                    style={{
                        filter: 'invert(95%) sepia(9%) saturate(1029%) hue-rotate(180deg) brightness(98%) contrast(90%)',
                        marginRight: '0',
                    }}
                />
            </NavbarBrand>
            <NavItem
                className="mx-4"
                style={{
                    listStyle: 'none',
                    backgroundImage: 'none',
                    backgroundRepeat: 'none',
                    backgroundPosition: '0',
                }}
            >
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
        </Navbar>
    );
};

export default Header;
