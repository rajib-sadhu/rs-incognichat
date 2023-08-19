import Lottie from 'lottie-react';

import loadingWave from '../../assets/wave.json';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Home = () => {
    const { user } = useAuth()
    return (
        <div className="grid place-items-center min-h-screen">
            <div>
                <h2 className="md:text-6xl text-2xl font-semibold text-center" >Welcome to incogniChat</h2>
                <div className='w-[10rem] mx-auto text-black'>
                    <Lottie animationData={loadingWave} className='' />
                </div>
                <div className='text-center capitalize m-5'>
                    {user && <NavLink to="/messages/allMessages" className="btn btn-sm btn-error" >See Ur Dashboard</NavLink>}
                </div>
                <div className='grid grid-cols-2'>
                    <Link to='/login' className='rounded-e-none btn btn-lg btn-accent'><button >Login</button></Link>
                    <Link to='/register' className='rounded-s-none btn btn-lg btn-success'><button  >Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;