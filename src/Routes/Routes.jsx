import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home2 from "../Pages/Home2/Home2";
import Messages from "../Pages/Messages/Messages";
import AllMessages from "../Pages/AllMessages/AllMessages";
import SentMessage from "../Pages/SentMessage/SentMessage";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:'',
        children:[
            {
                path:'/',
                element:<Home2/>
            },
            {
                path:'/h',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'messages',
                element:<Messages/>,
                children:[
                    {
                        path:'allMessages',
                        element:<AllMessages/>
                    }
                ]
            },
            {
                path:'sentMessage/:username',
                element:<SentMessage/>,
                loader:({params})=>params.username
            }
        ]
    }
])