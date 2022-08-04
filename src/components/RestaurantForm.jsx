import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Map from './MyMap';

export default function RestaurantForm({ values, setValues, onSubmit }) {
  const handleNameChange = (event) => setValues({
    ...values,
    name: event.target.value,
  });

  const handleAddressChange = (event) => setValues({
    ...values,
    address: event.target.value,
  });

  const handleDeliveryPriceChange = (event) => setValues({
    ...values,
    deliveryPrice: event.target.value,
  });

  const handleOpeningHoursChange = (event) => setValues({
    ...values,
    openingHours: event.target.value,
  });

  const handleClosingHoursChange = (event) => setValues({
    ...values,
    closingHours: event.target.value,
  });

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
    >
      <Form.Group className="mb-3" controlId="formName">
        <FloatingLabel label="Name">
          <Form.Control required type="text" minLength={3} maxLength={20} placeholder="Enter name" value={values.name} onChange={handleNameChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Minumum 3 characters. Maximum 20 characters.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDeliveryPrice">
        <FloatingLabel label="Delivery Price">
          <Form.Control required type="number" step="0.01" min="2" placeholder="Enter delivery price" value={values.deliveryPrice} onChange={handleDeliveryPriceChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Minimum 2 BGN.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formOpeningHours">
        <FloatingLabel label="Opening hours">
          <Form.Control required type="time" step="1" placeholder="Enter opening hours" value={values.openingHours} onChange={handleOpeningHoursChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Required format: HH:MM:SS
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formOpeningHours">
        <FloatingLabel label="Closing hours">
          <Form.Control required type="time" step="1" placeholder="Enter closing hours" value={values.closingHours} onChange={handleClosingHoursChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Required format: HH:MM:SS
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAddress">
        <FloatingLabel label="Address">
          <Form.Control required type="text" minLength={5} maxLength={30} placeholder="Enter address" value={values.address} onChange={handleAddressChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Minimum 5 characters. Maximum 30 characters.
        </Form.Text>
      </Form.Group>

      <Map isMarkerShown />

      <Button
        variant="primary"
        type="submit"
      >
        Create
      </Button>
    </Form>
  );
}
RestaurantForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
};
