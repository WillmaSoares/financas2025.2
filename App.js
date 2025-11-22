import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AuthProvider from "./app/context/auth";
import Routes from "./app/routes/index";
import MovProvider from "./app/context/movimentacao";


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MovProvider>
          <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
          <Routes />
        </MovProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

