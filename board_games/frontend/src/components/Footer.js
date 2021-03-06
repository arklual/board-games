import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

const Main = () => {
  return (
    <footer className="background-primary footer">
      <Container>
        <div>
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Статьи</a>
            </li>
            <li>
              <a href="#">Форум</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
          </ul>
          <bold>Все права защищены 2021</bold>
        </div>
      </Container>
    </footer>
  );
};

export default Main;