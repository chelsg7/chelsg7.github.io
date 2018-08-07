import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Img from 'react-image'
// import { Image } from 'react-native'

import './nav.css'

class Navvy extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark id="nav1">
        <Container>
          <NavLink href="/" className="text-light">
            <Img src={require('../images/logo5.png')} alt="logo"/>
            </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem >
                <NavLink href="#About">About</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="#Portfolio" >My Work</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="#Contact" >Contact</NavLink>
              </NavItem>
              {/* <NavItem >
                <NavLink href="#foot">Contact Me</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
};

export default Navvy;