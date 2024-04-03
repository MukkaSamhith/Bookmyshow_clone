import { useParams } from "react-router-dom";
import Details from '../hollywoodDetails'

const Samhith = ()=>{
    let params = useParams()
    const {id} = params
    console.log(id)
    return(
        <div>
        {<Details tes1={id}/>}
        </div>
    )
}

export default Samhith