import React,{useState} from "react";
import axios from "axios";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Zocial, Fontisto } from "@expo/vector-icons";

import {screenWidth} from "../utils/screensize"
import { imgsignup } from "../utils/links";

async function HandleSubmit(){
    try {
        const response = await axios.post("http://localhost:3000/Users",{username, password, email, telefone})
        return response
    } catch (error) {
        console.log(error);
    }
}

export default function SignUp(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.imgcontainer}>
                <Image  source={{uri: imgsignup }} style={styles.imglogo}  />
                <View style={{justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity>
                        <Text style={styles.mudarimagem}>Mudar Imagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.input}>
                <Zocial name="guest" size={24} color="white" style={styles.icon}/>
                <TextInput 
                value={username}
                onChangeText={ username => setUsername(username)}
                placeholder= "Username"
                placeholderTextColor="rgba(255,255,255, 0.9)"
                style={{color:"#fff"}} 
                />
            </View>
            <View style={styles.input}>
                <Fontisto name="locked" size={24} color="white" style={styles.icon} />
                <TextInput 
                value={password}
                onChangeText={ password => setPassword(password)}
                placeholder= "Password"
                placeholderTextColor="rgba(255,255,255, 0.9)"
                style={{color:"#fff"}} 
                />
            </View>
            <View style={styles.input}>
                <Zocial name="email" size={24} color="white" style={styles.icon}/>
                <TextInput 
                value={email}
                onChangeText={ email => setEmail(email)}
                placeholder= "Email"
                placeholderTextColor="rgba(255,255,255, 0.9)"
                style={{color:"#fff"}} 
                />
            </View>
            <View style={styles.input}>
                <Zocial name="call" size={24} color="white" style={styles.icon}/>
                <TextInput 
                value={telefone}
                onChangeText={ telefone => setTelefone(telefone)}
                placeholder= "Telefone"
                placeholderTextColor="rgba(255,255,255, 0.9)"
                style={{color:"#fff"}} 
                />
            </View>
            <View stlye={{padding: 15,}}>
            <TouchableOpacity style={styles.Button} onPress={HandleSubmit} >
                <Text style={styles.criarConta}  >Criar Conta</Text>
            </TouchableOpacity>
            </View>       
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#062F31",
    },
    input:{
        justifyContent:"center",
        width: screenWidth - 100,
        height: 50,
        borderWidth: 0.5,
        borderColor: "#fff",
        borderRadius: 5,
        paddingLeft: 45,
        marginBottom: 25,
    },
    Button:{
        marginTop: 25,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#14EAA4",
        width: screenWidth - 100,
        height: 50,
        borderRadius: 5,
    },
    criarConta:{
        fontWeight: "800",
        fontSize: 20,
    },
    imglogo:{
        borderRadius: 75,
        height: 150,
        width: 150, 
        borderColor: "#fff",
        borderWidth: 2,
    },
    icon:{
        position: "absolute", 
        left:5,
        top: 10, 
        borderRightColor: "rgba(255,255,255, 0.9)", 
        borderRightWidth: 1, 
        paddingRight: 10,
    },
    imgcontainer:{
        marginBottom: 25, 
        marginTop: 50, 
        justifyContent:"center", 
        alignItems:"center",
    },
    mudarimagem:{
        color:"#14EAA4",
    }
})