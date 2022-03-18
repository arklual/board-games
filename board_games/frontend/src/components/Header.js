import Menu from "./Menu";
import { Navbar, Container, Nav } from "react-bootstrap";
import React, { Component } from "react";

function AuthorizationMenu({current_user}) {
  if (current_user.username == false) {
    return (
      <>
        <Nav.Link href="/signin">Вход</Nav.Link>
        <Nav.Link href="/signup">Регистрация</Nav.Link>
      </>
    );
  } else {
    return (
      <>
        <div className="nav-link no-hover">Здравсвуйте, {current_user.username}</div>
        <a className="nav-link" href="/api/logout">Выйти</a>
      </>
    );
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: {},
    };
  }
  componentDidMount() {
    fetch("/api/current_user")
      .then((response) => {
        return response.json();
      })
      .then((current_user) => {
        this.setState(() => {
          return {
            current_user,
          };
        });
      });
  }
  render() {
    return (
      <Navbar className="background-primary navbar-dark fixed-top" expand="lg">
        <Container>
          <Navbar.Brand className="nav-title" href="/">
            {this.props.title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Menu menuComponents={this.props.menuComponents} />
            <Nav>
              <AuthorizationMenu current_user={this.state.current_user} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
