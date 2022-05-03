import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/authManager';

export default function Login({ isLoggedIn }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => navigate("/"))
      .catch(() => alert("Login Failed"));
  };

  return (
    <>
      <div className="text-center mt-5">
        <h1>Welcome! Login!</h1>
        <Form onSubmit={loginSubmit}>
          <fieldset>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input id="email" type="text" autoFocus onChange={e => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input id="password" type="password" onChange={e => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
              <Button>Login</Button>
            </FormGroup>
            <em>
              Not registered? <Link to={'/register'}>Register</Link>
            </em>
          </fieldset>
        </Form>
      </div>
    </>
  );
}
