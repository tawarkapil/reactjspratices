import { useState } from "react";
import expenseData from "../expenseData";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";

const Home = () => {
    const [expenses, setExpenses] = useState(expenseData)
    return (
        <main>
            <h1>Track Your Expense</h1>
            <div className="expense-tracker">
                <ExpenseForm setExpenses={setExpenses} />
                <ExpenseTable expenses={expenses} setExpenses={ExpenseTable}/>
            </div>
        </main>
    )
};

export default  Home;