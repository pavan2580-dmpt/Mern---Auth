import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit =async (data) => {
      const resp =  await axios.post('http://localhost:4000/register',{
            username:data.username,
            email:data.email,
            pass:data.password
        })
        console.log(resp)

    };

    return (
        <div className="main-register-container">
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="input"
                            {...register('username', {
                                required: 'Username is required',
                            })}
                        />
                        {errors.username && <p className='p'>{errors.username.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="input"
                            {...register('email', {
                                required: 'Email is required',
                            })}
                        />
                        {errors.email && <p className='p'>{errors.email.message}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input"
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                            })}
                        />
                        {errors.password && <p className='p'>{errors.password.message}</p>}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">Register</button>
                    </div>
                </form>
               
                     <h4>Already have an account? 
                     <Link to="/"> Login </Link>
                    </h4>
            </div>
        </div>
    );
};

export default Register;
