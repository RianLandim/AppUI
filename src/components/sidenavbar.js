import React, {useState} from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Zocial} from "@expo/vector-icons";

export default function Navbar({navigation}){

    //const [color, setColor] = useState("#062F31");

    return(
        <SafeAreaView style={styles.container}>
            <TouchableHighlight onPress={() => navigation.navigate("Home")} underlayColor={"#0F3A3C"} >
                <View style={styles.iconContainer}>
                     <Zocial name="guest" size={24} color="white"/>
                </View>
            </TouchableHighlight>        
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
    },
    iconContainer:{
        borderWidth: 1,
        borderColor: "#213032",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },
})

