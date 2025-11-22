import  AuthRoutes  from '../routes/auth.routes'
import { useContext } from "react";
import { AuthContext } from '../context/auth'
import AppRoutes from './app.routes';

function Routes() {
    const { signed } = useContext(AuthContext);
    //const loading = false;

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;
