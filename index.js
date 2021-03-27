import React, { useState } from "react";
import { View, TextInput, Button, Text} from "react-native";
import 'react-native-gesture-handler';
import {Picker} from "@react-native-picker/picker"

export default function calcular(){

  const [value, setValue] = useState("");
  const [preco, setPreco] = useState();
  const [produto, setProduto] = useState("");
  const [math, setMath] = useState();

  const [ip, setIp] = useState();


  function Calc(){
    var numero = 1
    var outronumero = 2
    var operacao = "+"
    
    if(operacao === "+"){
      const resultado = numero + outronumero 
      setMath(resultado);
   }
   if(operacao === "-"){
       const resultado = numero - outronumero
       console.log(resultado);
       setMath(resultado);
   }
   if(operacao === ""){
       const resultado = 0
       console.log(resultado)
       setMath(resultado);
   }
}

 function ip2int(){
    setIp(ip.split('.').reduce(function(ipInt, octet){
      return(ipInt<<8) + parseInt(octet, 10)}, 0 ) >>> 0 )
 }
  return(

    <View style={{flex:1, marginTop: 20}}>

      <TextInput placeholder="Produto" value={produto} onChangeText={(produto) => setProduto(produto)} />
      <TextInput placeholder="Valor" keyboardType="numeric"  value={preco} onChangeText={(preco) => setPreco(preco)}/>

      <Picker selectedValue={value} onValueChange={(itemValue) => setValue(itemValue)} >
        <Picker.Item label="Nacional" value="nacional" />  
        <Picker.Item label="Importado" value="importado" />
      </Picker>

      <Button title="Calcular" onPress={Calc}/>

      <Text>Preço do {produto} importado é:</Text>
      <Text>R$:{math}</Text>

      <TextInput placeholder="seu ip: xxx.xxx.xxx.xx" keyboardType="numeric" value ={ip} onChangeText={(ip) => {setIp(ip)}} />
      <Button title="Calcular Ip" onPress={ip2int} />

      <Text>Seu ip inteiro é: {ip} </Text>
    </View>
  
  ) 
}
