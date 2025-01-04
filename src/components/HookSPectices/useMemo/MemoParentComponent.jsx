import ExpensiveComponent from "./ExpensiveComponent";
import { useState } from "react";

const MemoParentComponent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <ExpensiveComponent />
            <button
                onClick={() => setCount(count + 1)}
                className="py-3 px-6 bg-cyan-400 rounded-sm"
            >
                Re-render Parent
            </button>
            <p>Parent re-renders: {count}</p>
        </div>
    );
}

export default MemoParentComponent;
