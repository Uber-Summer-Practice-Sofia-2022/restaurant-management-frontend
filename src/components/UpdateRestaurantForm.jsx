import React from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Map from './MyMap';

export default function UpdateRestaurantForm({ values, setValues, onSubmit }) {
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
    delivery_price: event.target.value,
  });

  const handleOpeningHoursChange = (event) => setValues({
    ...values,
    open_hours: event.target.value,
  });

  const handleClosingHoursChange = (event) => setValues({
    ...values,
    close_hours: event.target.value,
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
          <Form.Control required type="number" step="0.01" min="2" placeholder="Enter delivery price" value={values.delivery_price} onChange={handleDeliveryPriceChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Minimum 2 BGN.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formOpeningHours">
        <FloatingLabel label="Opening hours">
          <Form.Control required type="time" step="1" placeholder="Enter opening hours" value={values.open_hours} onChange={handleOpeningHoursChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Required format: HH:MM:SS
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formOpeningHours">
        <FloatingLabel label="Closing hours">
          <Form.Control required type="time" step="1" placeholder="Enter closing hours" value={values.close_hours} onChange={handleClosingHoursChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Required format: HH:MM:SS
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formAddress">
        <FloatingLabel label="Address">
          <Form.Control required type="text" minLength={5} maxLength={150} placeholder="Enter address" value={values.address} onChange={handleAddressChange} />
        </FloatingLabel>
        <Form.Text className="text-muted">
          Minimum 5 characters. Maximum 150 characters.
        </Form.Text>
      </Form.Group>

      <Map
        isMarkerShown
        onMarkerChange={(lat, lng) => {
          Geocode.fromLatLng(lat, lng).then(
            (response) => {
              const address = response.results[0].formatted_address;
              console.log(address);
              setValues({
                ...values,
                address,
              });
            },
          );
        }}
      />

      <Button
        variant="primary"
        type="submit"
      >
        Update Restaurant
      </Button>
    </Form>
  );
}
UpdateRestaurantForm.propTypes = {
  values: PropTypes.object,
  setValues: PropTypes.func,
  onSubmit: PropTypes.func,
};
