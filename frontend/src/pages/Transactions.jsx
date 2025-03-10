import React from "react";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import "../styles/Transactions.css"; // We'll create this CSS file

const Transactions = () => {
  const transactions = [
    { id: 1, date: "2025-02-22", category: "Groceries", amount: "-$50", description: "Weekly grocery shopping" },
    { id: 2, date: "2025-02-21", category: "Salary", amount: "+$2000", description: "Monthly salary deposit" },
    { id: 3, date: "2025-02-20", category: "Rent", amount: "-$800", description: "Monthly rent payment" },
  ];

  return (
    <Container fluid className="transactions-container">
      <Row>
        <Col>
          <h2 className="transactions-heading mb-4">Transactions</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id}>
                  <td>{new Date(txn.date).toLocaleDateString("en-US", { dateStyle: "medium" })}</td>
                  <td>{txn.category}</td>
                  <td>{txn.description}</td>
                  <td className={txn.amount.startsWith("+") ? "income" : "expense"}>{txn.amount}</td>
                  <td>
                    <Button variant="warning" size="sm" className="me-2 action-button">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm" className="action-button">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Transactions;