import React, { useState } from "react";
import { Card, Form, ListGroup, Button, Table } from "react-bootstrap";
import "../styles/Savings.css";

const Savings = () => {
  const [savingsGoals, setSavingsGoals] = useState([]);
  const [goalAmount, setGoalAmount] = useState('');
  const [goalDescription, setGoalDescription] = useState('');

  const handleAddGoal = () => {
    if (goalAmount && goalDescription) {
      setSavingsGoals([...savingsGoals, { amount: parseFloat(goalAmount), description: goalDescription }]);
      setGoalAmount('');
      setGoalDescription('');
    }
  };

  return (
    <div className="savings-container">
      <h1 className="savings-header">Savings Goals</h1>
      <Card className="savings-card">
        <Card.Body>
          <h3>Add a New Goal</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={goalDescription}
                onChange={(e) => setGoalDescription(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleAddGoal}>Add Goal</Button>
          </Form>
        </Card.Body>
      </Card>

      <Card className="savings-card">
        <Card.Body>
          <h3>Current Goals</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {savingsGoals.map((goal, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>${goal.amount.toFixed(2)}</td>
                  <td>{goal.description}</td>
                  <td>
                    <Button variant="danger" className="btn-sm">Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Savings;