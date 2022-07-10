import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (userEnteredExpenses) =>
    {
        const expense = {
            ...userEnteredExpenses,
            id: (Math.random()*1000).toString()
        }
        props.onAddExpense(expense);
    }

    return (
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>)
}

export default NewExpense;