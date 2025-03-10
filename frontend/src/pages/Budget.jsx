import React from "react";
import { Container, Table, ProgressBar, Row, Col } from "react-bootstrap";
import "../styles/Budget.css"; // Ensure this CSS file exists

const Budget = () => {
  const budgets = [
    { category: "Groceries", limit: 300, spent: 200 },
    { category: "Entertainment", limit: 150, spent: 120 },
    { category: "Rent", limit: 800, spent: 800 },
  ];

  return (
    <Container fluid className="budget-container">
      <Row className="h-100">
        <Col className="h-100">
          <h2 className="budget-heading mb-4">Budget</h2>
          <Table striped bordered hover responsive className="budget-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Budget Limit</th>
                <th>Spent</th>
                <th>Remaining</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {budgets.map((budget, index) => {
                const remaining = budget.limit - budget.spent;
                const percentage = (budget.spent / budget.limit) * 100;

                return (
                  <tr key={index}>
                    <td>{budget.category}</td>
                    <td>${budget.limit.toFixed(2)}</td>
                    <td>${budget.spent.toFixed(2)}</td>
                    <td>${remaining.toFixed(2)}</td>
                    <td>
                      <ProgressBar
                        now={percentage}
                        label={`${percentage.toFixed(1)}%`}
                        variant={
                          percentage >= 100 ? "danger" : percentage > 80 ? "warning" : "success"
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Budget;