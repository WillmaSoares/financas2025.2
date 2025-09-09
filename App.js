import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Rotas from "./app/routes";
import AuthProvider from "./app/context/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
        <Rotas/>
      </AuthProvider>
    </NavigationContainer>
  );
}

