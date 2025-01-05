import { useState } from 'react';


export default function DataShow() {
    const [datas, setDatas] = useState([]);
    const handleClick = () => {
        import('../data').then((module) => setDatas(module.todos))
    }
    return (
        <>
            <button onClick={handleClick}>Data Show</button>
            <div>
                {datas.map(
                    (val) => (<div key={val.id}>{val.title}</div>)
                )}
            </div>
        </>
    )
} 