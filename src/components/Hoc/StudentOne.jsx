
import Hoc from "./Hoc";
const StudentOne = (props) => {
    return (
        <>
          <div>
               <h6>Student 1 {props.count}</h6>
               {/* <button onClick={()=>props.handle()}>Count Increse</button> */}
               <button onClick={()=>props.handleEvent()}>Count Inc</button>
          </div>
        </>
    )
}

export default Hoc(StudentOne);