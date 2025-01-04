import { useMemo } from "react";

const ExpensiveComponent = () => {
    //   Expensive calculation function
    const sum = () => {
        console.log("Calculating sum...");
        let i = 0;
        for (i = 0; i <= 1000000000; i++) {
            i = i + 1;
        }
        return i;
    };

    const total = useMemo(() => sum(),[]);
    // ye kevel function ke kisi expensive calcution ke use hota hai;
    // ye total ki value ko cache me rakha lega;
    // const total = sum();
    return (
        <p>total {total}</p>
    )
}

export default ExpensiveComponent;