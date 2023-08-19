
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserInfo = () => {

    const {user} = useAuth();

    const [ axiosSecure ] = useAxiosSecure();

    const { data: userInfo = [], isLoading: loading } = useQuery({
        queryKey: ['userInfo'],
        // enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/user/info?email=${user?.email}`);
            // console.log(res)
            return res.data;
        }
    })

    return [userInfo, loading];
};

export default useUserInfo;