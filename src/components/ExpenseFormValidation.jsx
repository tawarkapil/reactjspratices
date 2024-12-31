import { useState } from "react"
import expenseData from "../expenseData";
import ExpenseTable from "./ExpenseTable";
import Input from "./Common/Input";
import Select from "./Common/Select";

export default function ExpenseFormValidation() {

    const [expenses, setExpenses] = useState(expenseData)

    const [editRowId, setEditRowId] = useState('');

    const [expense, setExpense] = useState({
        title: '',
        category: '',
        amount: ''
    });

    const [errors, setErrors] = useState({})

    const validationConfig = {
        title: [
            { required: true, message: 'Please enter title' },
            { minLength: 5, message: 'Title should be at least 5 characters long' },
        ],
        category: [{ required: true, message: 'Please select a category' }],
        amount: [{ required: true, message: 'Please enter an amount' }],
        email: [
            { required: true, message: 'Please enter an email' },
            {
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Please enter a valid email',
            },
        ],
    }

    const validate = (fromData) => {
        const errorData = {}
        Object.entries(fromData).forEach(([key, value]) => {
            validationConfig[key].some((rule) => {
                if (rule.required && !value) {
                    errorData[key] = rule.message;
                    return true;
                }
                if (rule.minLength && value.length < 5) {
                    errorData[key] = rule.message;
                    return true;
                }
                if (rule.pattern && !rule.pattern.test(value)) {
                    errorData[key] = rule.message;
                    return true;
                }
            })
        });
        setErrors(errorData);
        return errorData;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validateResult = validate(expense);
        if (Object.keys(validateResult).length) return;

        if (editRowId) {
            setExpenses((prevState) =>
                prevState.map((each) => {
                    if (each.id === editRowId) {
                        return { ...expense, id: editRowId }
                    }
                    return each;
                })
            )
            setExpense({
                title: '',
                category: '',
                amount: ''
            })
            setEditRowId('')
            return
        }
        setExpenses((prevState) => [...prevState,
        { ...expense, id: crypto.randomUUID() }
        ])
        setExpense({
            title: '',
            category: '',
            amount: ''
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense((preState) => ({ ...preState, [name]: value }))
        setErrors((preState) => ({ ...preState, [name]: '' }));
    }

    return (
        <main>
            <h1>Track Your Expense Validation</h1>
            <div className="expense-tracker">
                <form className="expense-form" onSubmit={handleSubmit}>
                    <Input
                        label='Title'
                        id='title'
                        name='title'
                        value={expense.title}
                        onChange={handleChange}
                        error={errors.title}
                    />
                    <Select
                        label="Category"
                        id="category"
                        name="category"
                        value={expense.category}
                        onChange={handleChange}
                        options={['Grocery', 'Clothes', 'Bills', 'Education', 'Medicine']}
                        defaultOption="Select Category"
                        error={errors.category}
                    />
                    <Input
                        label='Amount'
                        id='amount'
                        name='amount'
                        value={expense.amount}
                        onChange={handleChange}
                        error={errors.amount}
                    />
                    <button className="add-btn">{editRowId ? 'Update' : 'Add'}</button>
                </form>
                <ExpenseTable
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setEditRowId={setEditRowId}
                    setExpense={setExpense}
                />
            </div>
        </main>
    )
}