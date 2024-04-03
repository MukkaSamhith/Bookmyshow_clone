import { useParams } from "react-router-dom";
import Seats from '../Seats'

const SeatSearch = ()=>{
    let params = useParams()
    const {id} = params
    return(
        <div>
            {<Seats tes2={id}/>}
        </div>
    )
}

export default SeatSearch