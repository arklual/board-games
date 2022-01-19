import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

const Main = () => {
  return (
    <footer className="background-primary footer">
      <Container>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Forum</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <bold>Copyright 2021</bold>
      </Container>
    </footer>
  );
};

export default Main;
