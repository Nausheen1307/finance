# Finance Manager Tool

## Overview
The **Finance Manager Tool** is a full-stack application designed to help individuals manage their finances. It allows users to track their expenses, income, and view financial reports. The app has a modern user interface built with React and styled using Bootstrap, while the backend provides API endpoints for data storage and retrieval.

---

## Features
- **Expense Tracking**: Add, edit, and delete expenses.
- **Income Tracking**: Add, edit, and delete income records.
- **Reports**: View summary reports of your financial data.
- **User Authentication**: Secure login and registration system.
- **Responsive UI**: Built with Bootstrap for a responsive and mobile-friendly interface.
  
---

## Tech Stack
- **Frontend**: React, Vite, Bootstrap
- **Backend**: Node.js, Express
- **Database**: MongoDB (for storing financial data)
- **Authentication**: JWT (JSON Web Token) for user authentication and authorization

---

## Installation

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a cloud MongoDB instance like MongoDB Atlas)

### Setting Up the Backend
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables. Create a `.env` file in the `backend` directory and add the following:
    ```
    MONGO_URI=<Your MongoDB connection URI>
    JWT_SECRET=<Your JWT secret key>
    PORT=5000
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

   The backend will run on `http://localhost:5000` by default.

---

### Setting Up the Frontend
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

   The frontend will run on `http://localhost:3000` by default.

---

## API Endpoints

### Authentication
- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Login with credentials

### Finance Management
- **GET** `/api/transactions`: Get all transactions (expenses and income)
- **POST** `/api/transactions`: Add a new transaction (expense or income)
- **PUT** `/api/transactions/:id`: Update a specific transaction
- **DELETE** `/api/transactions/:id`: Delete a specific transaction

### Reports
- **GET** `/api/reports`: Get financial summary (income, expenses, and balance)

---

## File Structure

/finance-manager-tool ├── /backend │ ├── /models │ ├── /routes │ ├── /controllers │ ├── server.js │ ├── .env │ └── package.json ├── /frontend │
├── /src │ │ ├── /components │ │ ├── /pages │ │ ├── /services │ │ ├── App.js │ │ ├── index.js │ │ └── package.json ├── /README.md


## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT Authentication](https://jwt.io/)

---

## Contact

For questions or inquiries, feel free to reach out to [Nausheen Jilani] at [jilaninausheen13@gmail.com].
