import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../styles/Account.css";

const Account = () => {
  const [accountDetails, setAccountDetails] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const handleUpdateDetails = () => {
    console.log('Account details updated:', accountDetails);
    // Add logic to update account details in your database or state management
  };

  return (
    <div className="account-container">
      <h1 className="account-header">Account Details</h1>
      <Card className="account-card">
        <Card.Body>
          <h3>Update Your Details</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={accountDetails.firstName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={accountDetails.lastName}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={accountDetails.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={accountDetails.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleUpdateDetails}>Update Details</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Account;