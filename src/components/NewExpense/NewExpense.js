import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing , setIsEditing] = useState(false)
    const saveExpenseDataHandler = (userEnteredExpenses) =>
    {
        const expense = {
            ...userEnteredExpenses,
            id: (Math.random()*1000).toString()
        }
        props.onAddExpense(expense);
        setIsEditing(false);
    }

    const isEditingHandler = () =>
    {
        setIsEditing(true)
    }  
    
    return (
    <div className="new-expense">
        {!isEditing && <button onClick = {isEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} isEditing = {setIsEditing}/> } 
    </div>)
}

export default NewExpense;