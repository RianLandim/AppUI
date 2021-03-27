import React from "react";
import { View, StyleSheet, Dimensions,TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome({ navigation }){
    return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.Logo}>Welcome to app</Text>    
                </View> 
                <View style={{padding: 15,marginTop: 200,}}>
                <TouchableOpacity  style={styles.signin} onPress={ () => navigation.navigate("SignIn")} >
                        <Text style={styles.signintxt}>Sign In</Text>
                </TouchableOpacity>
                </View>  
                <View style={{padding: 15}}>
                <TouchableOpacity style={styles.signup} onPress={ () => navigation.navigate("SignUp")} >
                    <Text style={styles.signuptxt}>Sign Up</Text>
                    </TouchableOpacity> 
                </View>
            </SafeAreaView>
    )
}

const {width: screenWidth, height: screenHeight } = Dimensions.get("window")

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#06717F",
    },
    Logo:{
        fontSize: 40,
        color:"#fff",
        fontWeight:"bold",
    },
    signin:{
        backgroundColor:"#fff",    
        color:"#000",
        borderRadius: 15,
        height: 50,
        width: screenWidth - 80,
        alignItems: "center",
        justifyContent: "center",

    },
    signup:{
        backgroundColor:"#14EAA4",    
        color:"#fff",
        borderRadius: 15,
        height: 50,
        width: screenWidth - 80,
        alignItems: "center",
        justifyContent: "center",
    },
    signintxt:{
        fontSize: 20,
        color:"#000",
        fontWeight:"600",
    },
    signuptxt:{
        fontSize: 20,
        color:"#fff",
        fontWeight:"700",
    }
})