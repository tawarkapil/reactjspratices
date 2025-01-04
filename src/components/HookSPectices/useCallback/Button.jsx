import { memo } from "react";

const Button = ({ onClick, children }) => {
    console.log(`Rendring Children Button ${children}`)
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )

}

export default memo(Button);