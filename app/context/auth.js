import { createContext, useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import api from '../services/api'
import AsyncStorage from "@react-native-async-storage/async-storage";



export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false);

    const navigation = useNavigation();
    const [loadingApp, setLoadingApp] = useState(true); 

    useEffect(() => {
        setLoadingApp(false);
    }, []);

    async function signUp(nome, email, password) {
        setLoadingAuth(true);
        try {
            await api.post('/users', {
                name: nome,
                email: email,
                password: password,
            })

            setLoadingAuth(false);
            navigation.goBack();
        } catch (err) {
            console.log("ERRO AO CADASTRAR", err);
            setLoadingAuth(false);
        }
    }

    async function signIn(email, password) {
        setLoadingAuth(true);
        try {
            const response = await api.post("/login", {
                email,
                password,
            });

            const { user } = response.data;

            setUser({
                name: user?.name || "",
                email: user?.email || email,
            });

            setLoadingAuth(false);
        } catch (err) {
            console.log("ERRO AO LOGAR", err);
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear();
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{
            signed: !!user, user, signUp, signIn, loadingAuth, signOut, loadingApp,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;