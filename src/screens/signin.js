import React,{useState} from "react";
import axios from "axios";
import {View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Zocial, Fontisto } from "@expo/vector-icons";

import {screenWidth} from "../utils/screensize";
import { imgloginsc } from "../utils/links"

function Submit({navigation}){
    try {
        const  response = await axios.post("http://localhost:3000/users", {username, password})
        if(response.data.lenght > 0){
            navigation.navigate("Home")
        }else{
            Alert.alert(
                "Falha ao logar!",
                "Usuario ou senha incorretos!",
                [
                    {
                        text:"Ok",
                        onPress: () => console.log("Ok pressionado")
                    }
                ]
            );
        };
    } catch (error) {
        console.log(error);
    };
};

export default function SignIn(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
    <ImageBackground source={{uri: imgloginsc }} style={{flex:1, resizeMode: "cover"}}>
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.logo}>AppUI</Text>
            </View>
            <View style={styles.username}>
                <Zocial name="guest" size={24} color="white" style={styles.icon}/>
                <TextInput 
                placeholder="Username" 
                value={username} 
                onChangeText={username => setUsername(username)} 
                placeholderTextColor="rgba(255,255,255, 0.9)"
                style={{color:"#fff"}}  
                />
            </View>
            <View style={styles.password}>
                <Fontisto name="locked" size={24} color="white" style={styles.icon} />
                <TextInput 
                placeholder="Password" 
                value={password} 
                onChangeText={password => setPassword(password)} 
                placeholderTextColor="rgba(255,255,255, 0.9)"
                style={{color:"#fff"}} 
                />
            </View>
            <View style={{padding: 15,}}> 
                <TouchableOpacity style={styles.button} onPress={Submit} >
                    <Text style={styles.login} >Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    username:{
        marginTop: 100,
        justifyContent:"center",
        backgroundColor: "rgba(164, 193, 195, 0.4)",
        width: screenWidth - 100,
        height: 50,
        borderRadius: 5,
        paddingLeft: 50,
    },
    password:{
        marginTop: 15,
        justifyContent:"center",
        backgroundColor: "rgba(164, 193, 195, 0.4)",
        width: screenWidth - 100,
        height: 50,
        borderRadius: 5,
        paddingLeft: 50,
    },
    button:{
        borderRadius: 5,
        backgroundColor: "#14EAA4",
        width: screenWidth - 100,
        height: 50,
        alignItems:"center",
        justifyContent:"center",
    },
    login:{
        color:"#fff",
        fontSize: 20,
        fontWeight: "700", 
    },
    logo:{
        color:"#fff",
        fontSize: 50,
        fontWeight: "bold"
    },
    icon:{
        position: "absolute", 
        left:5,
        top: 10, 
        borderRightColor: "rgba(255,255,255, 0.9)", 
        borderRightWidth: 1, 
        paddingRight: 10,
    }
})