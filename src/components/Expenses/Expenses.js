import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filtered, setFiltered] = useState("2021");
  const expenseFilterHandler = (filteredYear) => {
    setFiltered(filteredYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onExpressFilter={expenseFilterHandler}
          selected={filtered}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
