import { useAuth } from "hooks";
import { Navigate } from 'react-router-dom';


export const RestrictedRoute = ({ redirectTo = '/', component: Component}) => {
    const { isLogged } = useAuth();

    return isLogged ? <Navigate to={redirectTo} /> : Component
}
