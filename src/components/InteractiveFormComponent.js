import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SubscribeForMore() {
  return (
    <Form className="subscribe-form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <h2>Subscribe For More News</h2>
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Button variant="success" className="button">Subscribe</Button>
    </Form>
  );
}

export default SubscribeForMore;
