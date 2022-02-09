import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Header.css'

function Header() {

    const { user, dispatch } = useContext(Context)

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }

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

            <ul className="logLinks">
                <li className="logout" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
                <div >
                    {user ?
                        (<h1>image</h1>)
                        :
                        (
                            <ul className='logLink'>
                                <li className="loginLink">
                                    <Link to='/login' className='linkAttribute'>LOGIN</Link>
                                </li>
                                <li className="loginLink">
                                    <Link to='/register' className='linkAttribute'>REGISTER</Link>
                                </li>
                            </ul>)
                    }
                </div>

            </ul>
        </div>
    </div>;
}

export default Header;
