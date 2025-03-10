import React, { useState } from "react";
import { Accordion, Card, Button, Form } from "react-bootstrap";
import "../styles/Settings.css";

const Settings = () => {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");

  return (
    <div className="settings-container">
      <h1 className="settings-header">Finance Manager</h1>
      <div className="settings-grid">
        <Card className="settings-card">
          <Card.Body>
            <h3>Profile Settings</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="primary" className="save-button">Save Changes</Button>
            </Form>
          </Card.Body>
        </Card>

        <Card className="settings-card">
          <Card.Body>
            <h3>Appearance & Theme</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Theme</Form.Label>
                <Form.Select onChange={(e) => setTheme(e.target.value)}>
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Font Size</Form.Label>
                <Form.Select onChange={(e) => setFontSize(e.target.value)}>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>

        <Card className="settings-card">
          <Card.Body>
            <h3>Security & Privacy</h3>
            <Form>
              <Form.Check type="switch" label="Enable Two-Factor Authentication" />
              <Form.Check type="switch" label="Manage Linked Devices" className="mt-2" />
            </Form>
          </Card.Body>
        </Card>

        <Card className="settings-card">
          <Card.Body>
            <h3>Notifications & Alerts</h3>
            <Form>
              <Form.Check type="checkbox" label="Email Notifications" />
              <Form.Check type="checkbox" label="Monthly Budget Alerts" className="mt-2" />
              <Form.Check type="checkbox" label="Expense Limit Alerts" className="mt-2" />
            </Form>
          </Card.Body>
        </Card>

        <Card className="settings-card">
          <Card.Body>
            <h3>Financial Preferences</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Currency</Form.Label>
                <Form.Select>
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>INR (₹)</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Language</Form.Label>
                <Form.Select>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Settings;