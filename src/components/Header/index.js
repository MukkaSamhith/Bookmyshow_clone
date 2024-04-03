import {Link} from 'react-router-dom'
import './index.css'

const Header = ()=>(
    <div>
        <div className='header-bg'>
            <Link to="/hollywood"  className='head1'>
                <p>Hollywood</p>
            </Link>
            <Link to="/bollywood"  className='head1'>
                <p>Bollywood</p>
            </Link>
            <Link to = "/tollywood"  className='head1'>
                <p>Tollywood</p>
            </Link>
            <Link to='/hollywood/tollywood' className='head1'>
                <p>Hollywood & Bollywood</p>
            </Link>
        </div>
    </div>
)

export default Header