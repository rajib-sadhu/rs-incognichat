import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {

    const location = useLocation();
    // console.log(location)

    return (
        <div>
            { location.pathname=='/' || <Navbar/> }
            <Outlet/>
        </div>
    );
};

export default Main;