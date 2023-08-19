import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const [fireError, setFireError] = useState('');

    const { signIn } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    title: `<p> Welcome back ${user.displayName} </p>`,
                    // position: 'top-end',
                    icon: 'success'
                });
                navigate(from, { replace: true });
                navigate("/h")
                reset();
            })
            .catch(err=>{
                console.log(err);
                setFireError('Somethings is wrong! Check email and password and try again')
            })
    }



    return (
        <div className='bg-base-200'>
            <h1 className="text-5xl font-bold text-center pt-10">Login now!</h1>
            <div className="hero min-h-[38rem] mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {
                                    errors.email?.type === 'required' &&
                                    <label className="label">
                                        <p className="label-text text-right text-red-600">
                                            Email is required
                                        </p>
                                    </label>
                                }
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 16
                                    })}
                                />
                                {
                                    errors &&
                                    <label className="label">
                                        <p className="label-text text-right text-red-600">
                                            {errors.password?.type === 'required' && 'Password is required'}
                                            {errors.password?.type === 'minLength' && 'Password must be 6 characters'}
                                            {errors.password?.type === 'maxLength' && 'Password must be less than 16 characters'}
                                        </p>
                                    </label>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <p className="label-text text-red-600">{fireError}</p>
                        </form>
                        <div className="m-5" >
                            <div className='text-center mt-3'>
                                <p>Do not have any account? <Link to='/register' className='text-blue-700 underline' >Create now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;