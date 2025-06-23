// import React from 'react'
// import { Progress } from "antd";

// const Analytics = ({ allTransection }) => {
//     //category
//     const categories=["salary","fees","bills","tax","medical","food","household","fashion","study","party","other"]

//     //total transection
//    const totalTransection = allTransection.length;
//    const totalIncomeTransection = allTransection.filter(transection => transection.type === 'income');
//    const totalExpenseTransection = allTransection.filter(transection => transection.type === 'expense');
//     const totalIncomePercent = (totalIncomeTransection.length / totalTransection) * 100;
//     const totalExpensePercent= (totalExpenseTransection.length / totalTransection) * 100;

//      //total turnover
//   const totalTurnover = allTransection.reduce(
//     (acc, transection) => acc + transection.amount,0 );
//   const totalIncomeTurnover = allTransection
//     .filter((transection) => transection.type === "income")
//     .reduce((acc, transection) => acc + transection.amount, 0);

//   const totalExpenseTurnover = allTransection
//     .filter((transection) => transection.type === "expense")
//     .reduce((acc, transection) => acc + transection.amount, 0);

//   const totalIncomeTurnoverPercent =
//     (totalIncomeTurnover / totalTurnover) * 100;
//   const totalExpenseTurnoverPercent =
//     (totalExpenseTurnover / totalTurnover) * 100;

//     return (
//         <>
//         <div className="row m-3">
//           <div className="col-md-4">
//             <div className="card">
//               <div className="card-header">
//                 Total Transactions : {totalTransection}
//                 </div>
//               <div className="card-body">
//                 <h5 className="text-success">
//                   Income : {totalIncomeTransection.length}
//                 </h5>
//                 <h5 className="text-danger">
//                   Expense : {totalExpenseTransection.length}
//                 </h5>
//                 <Progress
//                   type="circle"
//                   strokeColor={"green"}
//                   className="mx-2"
//                   percent={totalIncomePercent.toFixed(0)}
//                 />
//                 <Progress
//                   type="circle"
//                   strokeColor={"red"}
//                   className="mx-2"
//                   percent={totalExpensePercent.toFixed(0)}
//                 />
                
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* turnover */}
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-header">Total TurnOver : {totalTurnover}</div>
//             <div className="card-body">
//               <h5 className="text-success">Income : {totalIncomeTurnover}</h5>
//               <h5 className="text-danger">Expense : {totalExpenseTurnover}</h5>
//               <div>
//                 <Progress
//                   type="circle"
//                   strokeColor={"green"}
//                   className="mx-2"
//                   percent={totalIncomeTurnoverPercent.toFixed(0)}
//                 />
//                 <Progress
//                   type="circle"
//                   strokeColor={"red"}
//                   className="mx-2"
//                   percent={totalExpenseTurnoverPercent.toFixed(0)}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Categorywise income */}
//         <div className='row mt-3'>
//             <div className='col-md-5'>
//                 <h4>Categorywise Income</h4>
//                 {categories.map(category=>{
//                     const amount=allTransection.filter(transection => transection.type === 'income'  
//                     && transection.category === category).reduce((acc,transection)=>acc + transection.amount,0)

//                     return(
//                         amount >0 &&
//                         <div className='card'>
//                         <div className='card-body'>
//                             <h5>{category}</h5>
//                             <Progress 
//                             percent={((amount/totalIncomeTurnover)*100).toFixed(0)}/>
//                         </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>

//         {/* categorywise expense */}
//         <div className='row mt-3'>
//             <div className='col-md-5'>
//                 <h4>Categorywise Expense</h4>
//                 {categories.map(category=>{
//                     const amount=allTransection.filter(transection => transection.type === 'expense'  
//                     && transection.category === category).reduce((acc,transection)=>acc + transection.amount,0)

//                     return(
//                         amount >0 &&
//                         <div className='card'>
//                         <div className='card-body'>
//                             <h5>{category}</h5>
//                             <Progress 
//                             percent={((amount/totalExpenseTurnover)*100).toFixed(0)}/>
//                         </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//         </>
//     )
// }

// export default Analytics


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
