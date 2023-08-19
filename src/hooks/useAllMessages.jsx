
import useAxiosSecure from './useAxiosSecure';
import useUserInfo from './useUserInfo';
import { useQuery } from 'react-query';

const useAllMessages = () => {
    
    const [axiosSecure] = useAxiosSecure();
    const [userInfo, loading] = useUserInfo();
    // console.log(userInfo.username)

    const { data: messages = [], isLoading } = useQuery({
        queryKey: ['messages'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/u/${userInfo?.username}`);
            console.log(res)
            return res.data;
        }
    });

    return [messages, isLoading]
};

export default useAllMessages;