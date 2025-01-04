import { useState } from "react";
import ExpenseFormstate from "./ExpenseFormState";
import ExpenseTable from "./ExpenseTable";
import expenseData from "../expenseData";
import { useNavigate } from "react-router";
import StudentOne from "./Hoc/StudentOne";




const Expense = () => {
    const [expenses, setExpenses] = useState(expenseData);
    const navigate  = useNavigate();
    return (
        <main>
            <h1>Track Your Expense</h1>
            <button onClick={()=>{navigate('/memo')}} className="btn btn-primary">Memo Call</button>
            {/* <button onClick={()=>{navigate('/high')}} className="btn btn-primary">High</button> */}
            <div className="expense-tracker">
                <ExpenseFormstate setExpenses={setExpenses} />
                <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
                <StudentOne/>
            </div>
        </main>
    );
}

export default Expense;