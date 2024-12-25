# Wallet-Wizard

 **Wallet Wizard** is a user-friendly expense management system designed to help users efficiently track and manage their finances.

---

## Features
- **Expense Tracking**: Add, view, and manage daily expenses.
- **Categories**: Organize expenses by categories (e.g., Food, Travel, Shopping).
- **User Authentication**: Secure login and signup functionality.
- **Responsive Design**: Optimized for use across devices.
- **Insights**: Generate reports and visualizations of spending patterns.

---

## Technology Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: CSS/Bootstrap

---
## Installation and Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Khushi9035/Wallet-Wizard.git
   cd Wallet-Wizard
   ```

2. **Install Dependencies**:
   For the server:
   ```bash
   cd server
   npm install
   ```
   For the client:
   ```bash
   cd client
   npm install
   ```
3. **Environment Variables**:
   Create a `.env` file in the root of the `server` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. **Start the Application**:
   - Start the backend server:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```
    - run concurrently:
     ```bash
      npm run dev
     ```
5. **Access the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---



