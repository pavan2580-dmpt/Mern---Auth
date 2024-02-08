import React from 'react';
import './Login.css'; 
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="main-login-container">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
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
                            {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 5,
                                    message: 'Password must be at least 8 characters long',
                                },
                            })}
                        />
                        {errors.password && <p className='p'>{errors.password.message}</p>}
                    </div>
                    <div className="form-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <h4>
                    Don't have account? 
                    <span>
                        <Link to='/register'> Register</Link>                        
                    </span>
                </h4>
            </div>
        </div>
    );
};

export default Login;
