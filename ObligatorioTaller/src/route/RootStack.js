import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import HomeScreen from "../screens/HomeScreen";
import Usuarios from "../screens/Usuarios";
import Vehiculos from "../screens/Vehiculos";
import Tratamientos from "../screens/Tratamientos";
import Insumos from "../screens/Insumos";
import Repuestos from "../screens/Repuestos";



const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"> 
                <Stack.Screen name="Home" 
                              component={HomeScreen} />
                              options={{
                                    title: "Home",
                                    headerStyle: {backgroundColor: "#f4511e"},
                                    headerTintColor: "#fff",
                                    headerTitleStyle: {fontWeight: "bold"}
                                    }
                                  }    
                <Stack.Screen name="Usuarios" component={Usuarios} />
                <Stack.Screen name="Vehiculos" component={Vehiculos} />
                <Stack.Screen name="Tratamientos" component={Tratamientos} />
                <Stack.Screen name="Insumos" component={Insumos} />
                <Stack.Screen name="Repuestos" component={Repuestos} />
              </Stack.Navigator>
        </NavigationContainer>
    );

}

export default RootStack;

