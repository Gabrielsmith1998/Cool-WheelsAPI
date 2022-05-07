import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import { register } from "../api/authManager";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [image, setImage] = useState();
  const [about, setAbout] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const buyer = { name, userName, email, image, about, role:'user' };
      register(buyer, password)
        .then(() => navigate("/"));
    }
  };

  return (
    <Form onSubmit={registerClick}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input id="name" type="text" autoFocus onChange={e => setName(e.target.value)} required/>
      </FormGroup>
      <FormGroup>
        <Label for="userName">User Name</Label>
        <Input id="userName" type="text" autoFocus onChange={e => setUserName(e.target.value)} required/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input id="email" type="text" onChange={e => setEmail(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input id="password" type="password" onChange={e => setPassword(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
        <Input id="image" type="text" autoFocus onChange={e => setImage(e.target.value)} required/>
      </FormGroup>
      <FormGroup>
        <Label for="about">About</Label>
        <Input id="about" type="text" autoFocus onChange={e => setAbout(e.target.value)} required/>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Register</Button>
      </FormGroup>
    </Form>
  );
}
