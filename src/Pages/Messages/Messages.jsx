import { Link, Outlet } from "react-router-dom";
import useUserInfo from "../../hooks/useUserInfo";
import useAllMessages from "../../hooks/useAllMessages";

const Messages = () => {

    const [userInfo] = useUserInfo();
    const [messages] = useAllMessages();

    return (
        <div className="md:px-20 p-3" >
            <div className="stats shadow w-full">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Messages</div>
                    <div className="stat-value text-primary">{messages?.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Secret Message Link</div>
                    <div className="stat-desc badge badge-outline p-5"><Link 

                    to={`https://rs-incognichat.web.app/sentMessage/${userInfo?.username}`} className="btn btn-link lowercase" >sentMessage/{userInfo?.username}</Link></div>
                </div>

                <div className="stat">
                    {/* <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div> */}
                    <div className="stat-value">{userInfo?.name}</div>
                    <div className="stat-title">Username: {userInfo?.username}</div>
                    <div className="stat-desc text-secondary">Email: {userInfo?.email}</div>
                </div>
            </div>
            <div>
                <button className="btn btn-sm capitalize" >See All Messages</button>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Messages;