import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto mt-2 mt-lg-0 kurb-med" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/" activeClassName="active" exact>Who is Gerbil?</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/calendar" activeClassName="active">Tell Gerbil your upcoming plans</NavLink>
                            </NavItem>
                        </Nav>
                        <DropDown ifLogIn={this.props.ifLogIn} user={this.props.user} signInWithGoogle={this.props.signInWithGoogle} handleSignOut={this.props.handleSignOut} />
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


export class DropDown extends Component {
    render() {

        if (this.props.ifLogIn) {
            return (
                <Nav className="right mt-2 mt-lg-0 kurb-med" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret> {this.props.user.displayName}</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem tag={Link} key="1" to="/giftGallery" activeStyle={{ textDecoration: 'none', color: 'black' }} >Gift Gallery</DropdownItem>
                            <DropdownItem tag={Link} key="2" to="/logout" activeStyle={{ textDecoration: 'none', color: 'black' }} onClick={this.props.handleSignOut} >Log out</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            );
        } else {
            return (
                <Nav className="right mt-2 mt-lg-0 kurb-med" navbar>
                    <NavItem tag={Link} key="1" to="/" onClick={this.props.signInWithGoogle}>Sign In</NavItem>
                </Nav>
            );
        }
    }
}
