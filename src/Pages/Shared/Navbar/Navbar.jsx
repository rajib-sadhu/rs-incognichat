import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {



    const navigate = useNavigate();

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/h");

                Swal.fire({
                    icon: 'success',
                    title: `${user?.email} logout successfully `,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div className="fixed">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">incogniChat</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user ?
                                <>
                                    <li><Link to='/messages/allMessages' >Messages</Link></li>
                                    <li><p className="badge">{user?.displayName} </p></li>
                                    <li><button onClick={handleLogOut} >Logout</button></li>
                                </>
                                :
                                <li><button>Login</button></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;