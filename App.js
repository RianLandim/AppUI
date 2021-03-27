import React from "react";
import Routes from "./src/routes/routes"
import {  NavigationContainer  } from "@react-navigation/native";
import {  StatusBar  } from "react-native";
import 'react-native-gesture-handler';

export default function App(){
    return(
        <NavigationContainer>
            <StatusBar translucent backgroundColor="transparent" barStyle="default" />
            <Routes />
        </NavigationContainer>
    )
}