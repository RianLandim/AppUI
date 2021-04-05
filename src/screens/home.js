import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/header"
import Navbar from "../components/sidenavbar"

export default function Home({navigation}){
    return(
       <SafeAreaView style={styles.container} >
            <Header />

            <Navbar navigation={navigation} />
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#062F31",
    }
})