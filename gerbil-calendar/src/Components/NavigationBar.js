import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

// Navigation Bar Class
export class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    // toggle Navbar
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            // navigation bar
            <div>
                <Navbar className="fixed" color="light" light expand="lg">
                    <NavbarBrand tag={Link} to="/" className="kurb-bd">
                        Gerbil Calendar
                    </NavbarBrand>
                    <NavbarToggler/>
                    <Collapse navbar>
                        <Nav className="mr-auto mt-2 mt-lg-0 kurb-med" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/" activeClassName="active" exact>Who is Gerbil?</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/calendar" activeClassName="active">Tell Gerbil your upcoming plan</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/giftGallery" activeClassName="active">Gift Gallery</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="right mt-2 mt-lg-0 kurb-med" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/signIn" activeClassName="active">Sign In</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
