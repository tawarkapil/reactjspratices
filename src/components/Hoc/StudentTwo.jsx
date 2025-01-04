import Hoc from "./Hoc"


const StudentTwo = (props) => {
    return (
        <div>
            <h6>Student 2 {props.count}</h6>
            <button onClick={()=>props.handleEvent()}>count inc</button>
        </div>
    )
}

export default Hoc(StudentTwo);