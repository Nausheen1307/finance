import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <Row className="summary-cards">
        {/* Summary Cards */}
        <Col md={4} lg={4}>
          <Card className="summary-card">
            <Card.Body>
              <Card.Title>Total Income</Card.Title>
              <h3>$5000</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className="summary-card">
            <Card.Body>
              <Card.Title>Total Expenses</Card.Title>
              <h3>$3200</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className="summary-card">
            <Card.Body>
              <Card.Title>Total Savings</Card.Title>
              <h3>$1800</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Row className="quick-actions mt-4">
        <Col md={6} lg={6}>
          <Button variant="primary" className="action-button w-100">
            Add Transaction
          </Button>
        </Col>
        <Col md={6} lg={6}>
          <Button variant="success" className="action-button w-100">
            Set Budget
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;