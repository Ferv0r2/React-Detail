import React from "react";
import ExpensesForm from "./ExpensesForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpensesForm onSaveExpenseData={saveExpenseDataHander} />
    </div>
  );
};

export default NewExpense;
