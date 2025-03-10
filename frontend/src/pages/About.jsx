import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-header">About Finance Manager</h1>
      <Card className="about-card">
        <Card.Body>
          <Row>
            <Col md={6}>
              <h3>Our Mission</h3>
              <p>
                Our mission is to provide users with a simple, intuitive, and powerful tool to manage their finances.
                We believe that financial health is essential for overall well-being, and our app aims to make financial management accessible to everyone.
              </p>
            </Col>
            <Col md={6}>
              <h3>Features</h3>
              <ul>
                <li>Dashboard for an overview of your finances</li>
                <li>Transaction tracking and categorization</li>
                <li>Budget planning and monitoring</li>
                <li>Savings goals and alerts</li>
                <li>Secure and private data storage</li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <h3>Contact Us</h3>
              <p>
                If you have any questions, feedback, or need assistance, please don't hesitate to reach out to us.
                <br />
                Email: <a href="mailto:contact@financemanager.com">contact@financemanager.com</a>
                <br />
                Our support team is available 24/7 to help you with any issues you may encounter.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;