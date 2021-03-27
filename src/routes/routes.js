import React from "react";
import { createStackNavigator } from "@react-navigation/stack"

import Welcome from "../screens/welcome"
import SignIn from "../screens/signin";
import SignUp from "../screens/signup";

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown: false, animationTypeForReplace:"pop" }}  >
            <Stack.Screen name="Welcome" component={Welcome}  />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}