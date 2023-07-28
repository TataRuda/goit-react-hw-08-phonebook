import { useSelector } from "react-redux";
import {
    selectUser, 
    selectIsLoggedIn, 
    selectIsRefreshing,
    selectIsRegistered,
} from 'redux/auth/selectors';

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectIsRefreshing);
    const isRegistered = useSelector(selectIsRegistered);

    return {
        isLoggedIn, 
        isRefreshing,
        user,
        isRegistered,
    }

}