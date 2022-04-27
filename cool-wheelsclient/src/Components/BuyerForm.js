import React, { useState, useEffect } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { updateBuyer } from '../api/data/BuyerData';


const initialState = {
  name: '',
  userName: '',
  email: '',
  about: '',
  image: ''
};

export default function BuyerForm({ buyer = {} }) {
  const [formInput, setFormInput] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (buyer.id) {
        setFormInput({
          id: buyer.id,
          name: buyer.name,
          userName: buyer.userName,
          email: buyer.email,
          about: buyer.about,
          image: buyer.image
        })
      }
    }

    return () => {
      isMounted = false;
    };
  }, [buyer]);

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(buyer.id) {
      updateBuyer(formInput).then(() => {
        resetForm();
        navigate('/buyers')
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Add a Name"
          value={formInput.name || ''}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="userName">User Name</Label>
        <Input
          type="text"
          name="userName"
          id="userName"
          placeholder="Add a User Name"
          value={formInput.userName || ''}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Add an Email"
          value={formInput.email || ''}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
        <Input
          type="text"
          name="image"
          id="image"
          placeholder="Add an Image URL"
          value={formInput.image || ''}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="about">About</Label>
        <Input
          type="text"
          name="about"
          id="about"
          placeholder="Add an About"
          value={formInput.about || ''}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <Button type="submit" className="btn btn-success">
        {buyer.id ? 'Update' : 'Submit'}
      </Button>
    </Form>
  );
}

BuyerForm.propTypes = {
  buyer: PropTypes.shape({}).isRequired
};
