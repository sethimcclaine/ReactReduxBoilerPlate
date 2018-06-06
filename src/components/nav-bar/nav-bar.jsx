/**
 * Extends the navbar component of react-bootstrap
 * https://react-bootstrap.github.io/components/navbar/
 */


import React from 'react';
import PropTypes from 'prop-types';
import { PATH, NAVBAR_ITEMS } from 'src/constants';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap';

export const NavBar = (props) => {
    const { history } = props;

    const handleNavClick = ({ target }) => {
        history.push(target.dataset.path);
    };

    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={ NAVBAR_ITEMS[0].path }>React-Bootstrap</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                { NAVBAR_ITEMS.map(({ name, path }) => (
                    <NavItem data-path={ path } key={ path } href="#" onClick={ handleNavClick }>
                        { name }
                    </NavItem>
                ))}
            </Nav>
            <Navbar.Collapse>
                <Navbar.Text>
          Signed in as: <Link to={ PATH.profile }>{ props.userName }</Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

NavBar.propTypes = {
    userName: PropTypes.string,
    history: PropTypes.object,
};
