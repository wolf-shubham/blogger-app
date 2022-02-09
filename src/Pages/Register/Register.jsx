import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('/auth/register', {
            username,
            email,
            password
        })
        console.log(res)
    }

    return <div>Register User
        <form action="" className='registerForm' onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
            <label>Email</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" >Register</button>
            <p>Already have an account <span><Link to='/login'>Login</Link></span></p>

        </form>
    </div>;
}

export default Register;
