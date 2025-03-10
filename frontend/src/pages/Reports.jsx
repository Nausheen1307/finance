import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Bar } from "react-chartjs-2"; // Use named export for Bar chart
import "chart.js/auto"; // Import chart.js with auto configuration
import "../styles/Reports.css";

const Reports = () => {
  const chartData = {
    labels: ["January", "February"],
    datasets: [
      {
        label: "Expenses",
        data: [1200, 1500],
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Professional blue for bars
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false, // Allow custom sizing without aspect ratio constraints
    responsive: true, // Ensure the chart remains responsive
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#333",
        },
      },
      title: {
        display: true,
        text: "Monthly Expenses",
        font: {
          size: 18,
          weight: "bold",
        },
        color: "#007bff", // Blue for professionalism
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
          font: { size: 14, weight: "bold" },
          color: "#333",
        },
        ticks: {
          font: { size: 12, weight: "normal" },
          color: "#666",
        },
      },
      x: {
        title: {
          display: true,
          text: "Months",
          font: { size: 14, weight: "bold" },
          color: "#333",
        },
        ticks: {
          font: { size: 12, weight: "normal" },
          color: "#666",
        },
      },
    },
    layout: {
      padding: 20, // Add padding inside the chart
    },
    maxWidth: 600, // Limit the chart width to 600px
  };

  return (
    <Container fluid className="reports-container">
      <Row className="align-items-center mb-4">
        <Col>
          <h2 className="reports-heading d-inline">Reports</h2>
        </Col>
        <Col xs="auto" className="ms-3">
          <Form.Group>
            <Form.Control as="select" className="date-range-select d-inline">
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
              <option value="custom">Custom Range</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <div className="financial-summary-card">
            <h3 className="summary-title">Financial Summary</h3>
            <p className="summary-item">Total Income: $5,000.00</p>
            <p className="summary-item">Total Expenses: $3,200.00</p>
            <p className="summary-item">Total Savings: $1,800.00</p>
          </div>
        </Col>
        <Col md={6}>
          <div className="chart-container">
            <h3 className="chart-title">Expenses by Category</h3>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Reports;