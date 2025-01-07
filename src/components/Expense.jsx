import { useState } from "react";
import ExpenseFormstate from "./ExpenseFormState";
import ExpenseTable from "./ExpenseTable";
import expenseData from "../expenseData";
import { useNavigate } from "react-router";
import StudentOne from "./Hoc/StudentOne";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../slice/Counter/counterSlice";




const Expense = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const [expenses, setExpenses] = useState(expenseData);
    const navigate = useNavigate();

    return (
        <main>
            <h2>{count}</h2>
            <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
            <h1>Track Your Expense</h1>
            <button onClick={() => { navigate('/memo') }} className="btn btn-primary">Memo Call</button>
            <div className="expense-tracker">
                <ExpenseFormstate setExpenses={setExpenses} />
                <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
                <StudentOne />
            </div>
        </main>
    );
}

export default Expense;