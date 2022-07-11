import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");
    const expenseFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)
    let expensesContent = <p>No Expenses Found.</p>
    if(filteredExpenses.length > 0)
    {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onExpressFilter={expenseFilterHandler}
                    selected={filteredYear}
                />
                {expensesContent}
            </Card>
        </div>
    );
};
export default Expenses;
