import { useParams } from "react-router-dom";
import Details from '../bollywoodDetails'

const Samhith1 = ()=>{
    let params = useParams()
    const {id} = params
    console.log(id)
    return(
        <div>
        {<Details tes1={id}/>}
        </div>
    )
}

export default Samhith1