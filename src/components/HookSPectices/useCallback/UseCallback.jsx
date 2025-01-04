import { useState, useCallback } from "react";
import Button from "./Button";

const UseCallback = () => {
    const [productCount,setProductCount] = useState(0); 
    
    const increment = useCallback(() => {
        console.dir('increment inside');
        setProductCount(prevCount => prevCount + 1);
    },[])

    // const decrement = () => {
    //     setProductCount(productCount-1);
    // }

    const decrement = useCallback(()=>{
        console.dir('decrement inside');
        setProductCount(prevCount => prevCount - 1);
    },[])
    
    // const decrement = useCallback(()=>setProductCount(productCount-1),[])
    

    return (
        <>
            <h1>Use Callback Hooks</h1>
            <h1> Total Product  { productCount} </h1>
            <Button onClick={increment}>Increment</Button>
            <br />
            <Button  onClick={decrement}>Decrement</Button> 
        </>
    )
}

export default UseCallback;

