import {useNavigate} from 'react-router-dom'
import './index.css'

const Login=()=>{
    let u=''
    let p=''
    const navigate = useNavigate()
    const handleSubmit=(event)=>{
        event.preventDeault()
    }

    const changeOn=(event)=>{
        u = event.target.value
    }

    const changeOn1=(event)=>{
        p = event.target.value
    }


    const submitOn=()=>{
        if(u==="sam" && p==="sam"){
            navigate('/hollywood')
        }
        else{
            alert("Invalid Username")
        }
    }
        return(
        <div className='login1'>
            <div className='card1'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='sam'>Username</label><br/>
                    <input type="text" id='sam' onChange={changeOn} placeholder='UserName'/><br/>
                    <label htmlFor='sam1'>Password</label><br/>
                    <input type="password" id='sam1' onChange={changeOn1} placeholder='Password'/><br/><br/>
                    <button type="button" className='btn12' onClick={submitOn}>Login</button>
                </form>
            </div>
        </div>
        )
}

export default Login