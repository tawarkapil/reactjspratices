
import { useState , useMemo } from "react";
import MemoCount from "./MemoCount";
import { useNavigate } from "react-router";


export default function Memo (){
    const [count, setCount] = useState(0)
    const nevigate = useNavigate();

    const myBioData = useMemo(() => {
        return {
          name: "thapa",
          age: 30,
        };
    }, []);
    // object bar bar create hone ke karan new Memory Create krta hai.
    // isliye  object ko props ki tarah pas me new Memory banane ke karan ye phir se render ho jata hai.

    return (
        <div>
            <button onClick={()=>{ nevigate('/useMemoHook') } }>useMemo Hook Call</button>
            <br />
            <br />
            <br />
            <button onClick={()=>nevigate('/useCallbackHook')}>useCallback Hook Call</button>
            <br />
            <br />
            <br />
            <button onClick={()=>setCount(count+1)}> Increment </button> Memo  { count }
            <MemoCount  myBioData={myBioData}/>
        </div>
    )
}