import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {

    const user = {
        id:1,
        name:"John Doe"
    }

    if(!user) {
        return <Navigate to="/signup" replace />
    }
    return children;
}

export default ProtectedRoute