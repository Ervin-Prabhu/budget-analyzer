import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");
    const expenseFilterHandler = (selectedYear) => 
    {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)
    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    onExpressFilter={expenseFilterHandler}
                    selected={filteredYear}
                />
                <ExpensesChart expenses = {filteredExpenses} />
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    );
};
export default Expenses;
