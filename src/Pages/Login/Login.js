import React from 'react';
import {FaGoogle, FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Login = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
    }
    return (
        <div className='login-container'>
            <h1 className='title'>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className='login-form'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='' placeholder='Your email address' />
                </div>
                <div className='login-form'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='' placeholder='Your password' />
                </div>
                {/* <p className='text-danger'>{error}</p> */}
                <button className='submit-button'>Submit</button>
            </form>
            <p className='login-text'>New to Education Better? <Link to='/signup' className='login-text'>Create a New Account</Link></p>
            <button className='google-button'>
                <FaGoogle /> Continue With Google</button>
            <button className='google-button'>
                <FaGithub /> Continue With Github</button>
        </div>
    );
};

export default Login;