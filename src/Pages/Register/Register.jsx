
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

const Register = () => {

    const { createUser, addNamePhoto } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const navigate = useNavigate();


    const onSubmit = data => {

        const { name, email, username, gender, password } = data;

        const savedUser = {
            name: name,
            email: email,
            username: username,
            gender: gender
        }

        createUser(email, password)
            .then(res => {
                if (res) {
                    addNamePhoto(res.user, name)
                        .then(() => {
                            axios.post('https://rs-incognichat-server.vercel.app/users', savedUser)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        reset();
                                        navigate("/messages/allMessages");

                                        Swal.fire({
                                            icon: 'success',
                                            title: `Account create successfully ${res.data?.displayName} `,
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                    }
                                })
                        })
                }
            })
    }
    console.log(errors)

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                <label className="label">
                                    <span className="label-text text-right text-red-600">
                                        {errors.name?.type === 'required' && 'Name is required'}
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                <label className="label">
                                    <span className="label-text text-right text-red-600">
                                        {errors.email?.type === 'required' && 'Email is required'}
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" placeholder="username" name="username" className="input input-bordered"
                                    {...register("username", { required: true, minLength: 4, maxLength: 10 })}
                                />
                                <label className="label">
                                    <span className="label-text text-right text-red-600">
                                        {errors.username?.type === 'required' && 'Username is required'}
                                        {errors.username?.type === 'minLength' && 'Username must be 4 characters'}
                                        {errors.username?.type === 'maxLength' && 'Username must be less than 10 characters'}

                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Gender</span>
                                </label>
                                <div className="flex gap-2" >
                                    Male<input className="radio" {...register("gender", { required: true })} type="radio" value="M" />
                                    Female<input className="radio" {...register("gender", { required: true })} type="radio" value="F" />
                                    Others<input className="radio" {...register("gender", { required: true })} type="radio" value="O" />
                                </div>
                                <label className="label">
                                    <span className="label-text text-right text-red-600">
                                        {errors.gender?.type === 'required' && 'Gender is required'}
                                    </span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered"
                                    {...register("password", { required: true, minLength: 6, maxLength: 16 })}
                                />
                                <label className="label">
                                    <span className="label-text text-right text-red-600">
                                        {errors.password?.type === 'required' && 'Password is required'}
                                        {errors.password?.type === 'minLength' && 'Password must be 6 characters'}
                                        {errors.password?.type === 'maxLength' && 'Password must be less than 16 characters'}

                                    </span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className="m-5" >
                            <div className='text-center mt-3'>
                                <p>Already have an account? <Link to='/login' className='text-blue-700 underline' >Login now</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;