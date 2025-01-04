
import { useState } from "react";
const Hoc = (Student) => {
    const ReturnCompont = () => {
        const [count, setCount] = useState(0);
        const handleEvent = () =>{
            setCount((pre)=>pre+1);
        }
        return (
            <div>
                <Student count={count} handleEvent={handleEvent}  />
            </div>
        )
    }
    return ReturnCompont
}
export default Hoc;

// import {useState} from 'react'

// const  Higherordercom=(Student)=> {
//     const Highrordercominner =() =>{
//         const [num, setNum] = useState(0)
//         const handleEvent=()=>{
//             setNum(num+10)
//         }
//         return(
//             <Student num={num} handleEvent={handleEvent}/>
//         )
//     }
//   return Highrordercominner;
// }
// export default Higherordercom

