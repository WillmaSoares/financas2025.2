import { View } from "react-native-web";
import { AuthRoutes } from '../routes/auth.routes'

function Routes(){
    const loading = false;
    const signed = false;

    return(
        signed ? <View></View> : <AuthRoutes/>
    )
}

export default Routes