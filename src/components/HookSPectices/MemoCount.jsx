import { memo, useRef } from "react";
const MemoCount = (props) => {
    console.log(props);
    const count = useRef(0);
    return (
        <div>
            <h1> {props.myBioData.name }</h1>
            Memo Count {count.current++}
        </div>
    )
}

export default memo(MemoCount);