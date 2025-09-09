import { View } from "react-native-web";
import { AuthRoutes } from '../routes/auth.routes'

function Rotas(){
    const loading = false;
    const signed = false;

    return(
        signed ? <View></View> : <AuthRoutes/>
    )
}

export default Rotas