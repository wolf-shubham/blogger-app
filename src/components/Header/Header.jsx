import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return <div className="header">
        <div className='blogTitle'>
            <h1>.blog</h1>
        </div>
        <div className="links">
            <ul className='linkTab'>
                <li className='listItem'><Link to='/'>HOME</Link></li>
                <li className='listItem'>PROFILE</li>
                <li className='listItem'>CREATE</li>
                <li className='listItem'>CONTACT AT</li>
            </ul>
        </div>
        <div className='userDetail'>
            <h1>image</h1>
            <ul className="logLinks">
                <li className="loginLink">
                    <Link to='/login' className='linkAttribute'>LOGIN</Link>
                </li>
                <li className="loginLink">
                    <Link to='/register' className='linkAttribute'>REGISTER</Link>
                </li>
            </ul>
        </div>
    </div>;
}

export default Header;
