import { useState, useRef } from "react";
import expenseData from "../expenseData";
import ExpenseTable from "./ExpenseTable";

export default function ExpenseFormUseRef() {
    const [expenses, setExpenses] = useState(expenseData);

    const title = useRef();
    const category = useRef();
    const amount = useRef();
    
    function emptyObject(){
        title.current.value = "";
        category.current.value = "";
        amount.current.value = "";
    }
    async function  handleSubmit(e) {
        e.preventDefault();
        // Add new expense
        await setExpenses((prevState) => [
                ...prevState,
                {
                    title: title.current.value.trim(),
                    category: category.current.value,
                    amount: amount.current.value.trim(),
                    id: crypto.randomUUID(),
                },
            ]
        );
        await emptyObject();
    }

    return (
        <main>
            <h1>Track Your Expense use Ref</h1>
            <div className="expense-tracker">
                <form className="expense-form" onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="title">Title</label>
                        <input id="title" name="title" ref={title} />
                    </div>
                    <div className="input-container">
                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" ref={category}>
                            <option value="" hidden>
                                Select Category
                            </option>
                            <option value="grocery">Grocery</option>
                            <option value="clothes">Clothes</option>
                            <option value="bills">Bills</option>
                            <option value="education">Education</option>
                            <option value="medicine">Medicine</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="amount">Amount</label>
                        <input id="amount" name="amount" ref={amount} />
                    </div>
                    <button className="add-btn">Add</button>
                </form>
                <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
            </div>
        </main>
    );
}
