import { useSelector } from "react-redux";
import { getUser } from "redux/user/user-selector";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {
    const {token} = useSelector(getUser)
    return (
        <>{!token ? children : <Navigate to="/home" replace/>}</>
    )
}

