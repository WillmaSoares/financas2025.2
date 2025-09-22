import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AuthProvider from "./app/context/auth";
import Routes from "./app/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

