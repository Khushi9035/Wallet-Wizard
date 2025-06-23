import React from 'react';
import { Progress } from 'antd';
import '../styles/Analytics.css'; // Make sure to create this file

const Analytics = ({ allTransection }) => {
  const categories = [
    'salary', 'fees', 'bills', 'tax', 'medical',
    'food', 'household', 'fashion', 'study', 'party', 'other'
  ];

  // Totals
  const totalTransection = allTransection.length;
  const totalIncomeTransection = allTransection.filter(t => t.type === 'income');
  const totalExpenseTransection = allTransection.filter(t => t.type === 'expense');
  const totalIncomePercent = (totalIncomeTransection.length / totalTransection) * 100;
  const totalExpensePercent = (totalExpenseTransection.length / totalTransection) * 100;

  const totalTurnover = allTransection.reduce((acc, t) => acc + t.amount, 0);
  const totalIncomeTurnover = totalIncomeTransection.reduce((acc, t) => acc + t.amount, 0);
  const totalExpenseTurnover = totalExpenseTransection.reduce((acc, t) => acc + t.amount, 0);

  const totalIncomeTurnoverPercent = (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercent = (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <div className="analytics-container container mt-4">
      <div className="row mb-4">
        {/* Total Transactions */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header fw-bold">Total Transactions: {totalTransection}</div>
            <div className="card-body d-flex justify-content-around align-items-center flex-wrap">
              <div>
                <h6 className="text-success">Income: {totalIncomeTransection.length}</h6>
                <Progress type="circle" strokeColor="green" percent={totalIncomePercent.toFixed(0)} />
              </div>
              <div>
                <h6 className="text-danger">Expense: {totalExpenseTransection.length}</h6>
                <Progress type="circle" strokeColor="red" percent={totalExpensePercent.toFixed(0)} />
              </div>
            </div>
          </div>
        </div>

        {/* Total Turnover */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header fw-bold">Total Turnover: ₹{totalTurnover}</div>
            <div className="card-body d-flex justify-content-around align-items-center flex-wrap">
              <div>
                <h6 className="text-success">Income: ₹{totalIncomeTurnover}</h6>
                <Progress type="circle" strokeColor="green" percent={totalIncomeTurnoverPercent.toFixed(0)} />
              </div>
              <div>
                <h6 className="text-danger">Expense: ₹{totalExpenseTurnover}</h6>
                <Progress type="circle" strokeColor="red" percent={totalExpenseTurnoverPercent.toFixed(0)} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categorywise Income */}
      <div className="row">
        <div className="col-md-6 mb-4">
          <h5 className="text-primary">Category-wise Income</h5>
          {categories.map(category => {
            const amount = allTransection
              .filter(t => t.type === 'income' && t.category === category)
              .reduce((acc, t) => acc + t.amount, 0);

            return amount > 0 && (
              <div key={category} className="card category-card shadow-sm mb-2">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <span>{category}</span>
                    <span>₹{amount}</span>
                  </div>
                  <Progress percent={((amount / totalIncomeTurnover) * 100).toFixed(0)} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Categorywise Expense */}
        <div className="col-md-6 mb-4">
          <h5 className="text-danger">Category-wise Expense</h5>
          {categories.map(category => {
            const amount = allTransection
              .filter(t => t.type === 'expense' && t.category === category)
              .reduce((acc, t) => acc + t.amount, 0);

            return amount > 0 && (
              <div key={category} className="card category-card shadow-sm mb-2">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <span>{category}</span>
                    <span>₹{amount}</span>
                  </div>
                  <Progress percent={((amount / totalExpenseTurnover) * 100).toFixed(0)} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
