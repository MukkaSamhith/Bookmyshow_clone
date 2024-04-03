import { useNavigate } from 'react-router-dom'
import './index.css'

const Header1=()=>{
    const navigate = useNavigate()
    
    const changeOn=()=>{
        navigate('/')
    }

    return(
    <div className='main-heading'>
     <h1 className='name-bg'>SKPP Cinemas</h1>
     <button type="button" className='logout-button' onClick={changeOn}>Logout</button>
     </div>
     )
}

export default Header1