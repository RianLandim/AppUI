import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {screenWidth} from "../utils/screensize"
import {imgsignup} from "../utils/links"

export default function Header(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imgcontainer}>
                <Image source={{uri: imgsignup}} style={styles.img}/>
            </View>
            <View style={styles.txtcontainer}>
            <Text style={styles.nametxt}>Bill Gates</Text>
            <Text style={{color:"#fff"}}>CEO of Microsoft</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent:"center",
        flexDirection:"row",
        width: screenWidth,
        height: 250,
        backgroundColor:"#062F31",
        borderBottomColor: "#213032",
        borderBottomWidth: 1,
    },
    img:{
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    txtcontainer:{
        marginLeft: 15,

    },
    nametxt:{
        color:"#12EFA4",
        fontSize: 25,
        fontWeight:"bold",
    }
})