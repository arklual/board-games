import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import CSRFToken from "../components/CSRFToken";

function Signin() {
  return (
    <div className="signup">
      <Form method="post" action="/api/signin/">
        <CSRFToken />
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Адрес Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Введите email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Пароль"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  );
}

export default Signin;
