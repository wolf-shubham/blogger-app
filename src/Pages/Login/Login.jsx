import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    return <div>Login Page
        <form action="" className='loginForm'>
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder='email' />
            <label>Password</label>
            <input type="password" name="password" id="password" placeholder='password' />
            <button type="submit">Login</button>
            <p>New around here <span><Link to='/register'>Register</Link></span></p>
        </form>
    </div>;
}

export default Login;
