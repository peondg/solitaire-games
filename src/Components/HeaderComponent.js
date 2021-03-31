import { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };
  render() {
    return (
      <Navbar dark sticky="top" expand="lg" color="dark">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <i className="fa fa-user-circle-o fa-lg" /> Solitaire
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="ml-auto">
              <NavItem>
                <NavLink className="nav-link" to="/pirateGold">
                  <i className="fa fa-anchor fa-lg" /> Pirate Gold
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/lazyBoy">
                  <i className="fa fa-bed fa-lg" /> Lazy Boy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/klondike">
                  <i className="fa fa-usd fa-lg" /> Klondike
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
