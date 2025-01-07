import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slice/Counter/counterSlice';


export default function DataShow() {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const handleClick = () => {
        import('../data').then((module) => setDatas(module.todos))
    }
    return (
        <>
            <h2>Redux Count value {count} </h2>
            <button onClick={()=>dispatch(increment())}>Increment Redux</button>
            <button onClick={handleClick}>Data Show</button>
            <div>
                {datas.map(
                    (val) => (<div key={val.id}>{val.title}</div>)
                )}
            </div>
        </>
    )
} 