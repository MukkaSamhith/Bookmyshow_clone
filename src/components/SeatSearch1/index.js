import { useParams } from "react-router-dom";
import Seats1 from "../seats1";

const SeatSearch1 = ()=>{
    let params = useParams()
    const {id} = params
    console.log(id)
    return(
        <div>
            {<Seats1 tes2={id}/>}
        </div>
    )
}

export default SeatSearch1