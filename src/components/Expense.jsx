import { useState } from "react";
import ExpenseFormstate from "./ExpenseFormState";
import ExpenseTable from "./ExpenseTable";
import expenseData from "../expenseData";




const Expense = () => {
    const [expenses, setExpenses] = useState(expenseData);
    return (
        <main>
            <h1>Track Your Expense</h1>
            <div className="expense-tracker">
                <ExpenseFormstate setExpenses={setExpenses} />
                <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
            </div>
        </main>
    );
}

export default Expense;