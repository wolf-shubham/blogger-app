import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
    return <div>Register User
        <form action="" className='registerForm'>
            <label>Name</label>
            <input type="text" name="username" id="username" />
            <label>Email</label>
            <input type="email" name="email" id="email" />
            <label>Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Register</button>
            <p>Already have an account <span><Link to='/login'>Login</Link></span></p>

        </form>
    </div>;
}

export default Register;
