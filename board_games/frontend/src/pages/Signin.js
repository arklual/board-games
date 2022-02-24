import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import CSRFToken from "../components/CSRFToken";

function Signin() {
  return (
    <div className="signup">
      <Form method="post" action="/api/signin/">
        <CSRFToken />
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Signin;
