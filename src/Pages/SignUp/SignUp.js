import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value
        const contactNumber = form.contactNumber.value
    }
    return (
        <div className='login-container'>
            <h1 className='title'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='login-form'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' id='' placeholder='Your email address' />
                </div>
                <div className='login-form'>
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input type="number" name='contactNumber' id='' placeholder='Your Contact Number' />
                </div>
                <div className='login-form'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='' placeholder='Your email address' />
                </div>
                <div className='login-form'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='' placeholder='Your password' />
                </div>
                {/* <p className='text-error'>{error}</p> */}
                <button className='submit-button' >Submit</button>
            </form>
            <p className='login-text'>Already Have an account? <Link className='login-text' to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;