export default function ContextMenu({
    menuPosition,
    setMenuPosition,
    rowId,
    setExpenses,
    setEditRowId,
    expenses,
    setExpense
}) {
    if (!menuPosition?.left) return
    return (
        <div className="context-menu" style={{ ...menuPosition }}>
            <div onClick={() => {
                const { title, category, amount } = expenses.find((prevExpense) => prevExpense.id === rowId);
                setExpense({ title, category, amount });
                setEditRowId(rowId);
                setMenuPosition({});
            }}>Edit</div>
            <div onClick={() => {
                setExpenses((preState) => {
                    return preState.filter((expense) => expense.id !== rowId)
                })
                setMenuPosition({});
            }}>Delete</div>
        </div>
    )
}