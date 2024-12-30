import { useState } from "react"
import expenseData from "../expenseData";
import ExpenseTable from "./ExpenseTable";
import Input from "./Common/Input";

export default function ExpenseFormValidation() {

    const [expenses, setExpenses] = useState(expenseData)

    const [expense, setExpense] = useState({
        title: '',
        category: '',
        amount: ''
    });

    const [errors, setErrors] = useState({})

    const validate = (fromData) => {
        console.log(fromData)
        const errorData = {}
        if (!fromData.title) {
            errorData.title = 'Title Is Required';
        }
        if (!fromData.category) {
            errorData.category = 'Please Select a Category';
        }
        if (!fromData.amount) {
            errorData.amount = 'amount is required';
        }
        setErrors(errorData);
        return errorData;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validateResult = validate(expense);
        if (Object.keys(validateResult).length) return;

        setExpenses((preState) => [...preState,
        { ...expense, id: crypto.randomUUID() }
        ])
        setExpense({
            title: '',
            category: '',
            amount: ''
        })
        setErrors({});
    }

    const handleChange = (e) => {
        setExpense((preState) => ({ ...preState, title: e.target.value }))
    }

    return (
        <main>
            <h1>Track Your Expense Validation</h1>
            <div className="expense-tracker">
                <form className="expense-form" onSubmit={handleSubmit}>
                    <Input 
                        label = 'Title'
                        id = 'title'
                        name='title'
                        value={expense.title}
                        onChange={handleChange}
                        error={errors.title}
                    />
                    <div className="input-container">
                        <label htmlFor="category">Category</label>
                        <select id="category" name="category" onChange={(e) => setExpense((preState) => ({ ...preState, category: e.target.value }))}>
                            <option value="" hidden>
                                Select Category
                            </option>
                            <option value="grocery">Grocery</option>
                            <option value="clothes">Clothes</option>
                            <option value="bills">Bills</option>
                            <option value="education">Education</option>
                            <option value="medicine">Medicine</option>
                        </select>
                        <p className='error'>{errors.category}</p>
                    </div>
                    <Input 
                        label='Amount'
                        id='amount'
                        name='amount'
                        value={expense.amount}
                        onChange={handleChange}
                        error={errors.amount}
                    />
                    <button className="add-btn">Add</button>
                </form>
                <ExpenseTable expenses={expenses} />
            </div>
        </main>
    )
}