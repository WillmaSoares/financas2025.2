import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home/index";
import Registro from "../pages/Registro/index";



const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen
                name="Home"
                component={Home}
                options={{ drawerLabel: "Início" }}
            />
            <AppDrawer.Screen
                name="Registro"
                component={Registro}
                options={{ drawerLabel: "Registrar" }}
            />

        </AppDrawer.Navigator>


    );
}

export default AppRoutes;