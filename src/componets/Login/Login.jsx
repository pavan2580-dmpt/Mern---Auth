import React from 'react';
import './Login.css'; 
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';


const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const response = await axios.post("http://localhost:4000/login",{
            email:data.email,
            pass :data.password
        })
        if(response.data === "Wrong password" || response.data ==="Invalid email")
        {
            toast(response.data)
        }
        else{
            Cookies.set("Token",response.data)
            let jwt =await jwtDecode(response.data);
            if(jwt.user.status){
                navigate('/p')
        }
        }
    };

    return (
        <div className="main-login-container">
            <ToastContainer/>
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
