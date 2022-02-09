import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Login.css'

function Login() {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({ type: 'LOGIN_START' });
        try {
            const res = await axios.post('/auth/login', {
                username,
                password
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })

        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE' })
        }
    }
    // console.log(user)
    return <div>Login Page
        <form action="" className='loginForm' onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="username" name="username" id="username" placeholder='email' onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input type="password" name="password" id="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            <p>New around here <span><Link to='/register'>Register</Link></span></p>
        </form>
    </div>;
}

export default Login;
