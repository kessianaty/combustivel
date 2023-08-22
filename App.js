import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, View, TextInput,Button, TouchableOpacity } from 'react-native';




export default function App(){

function CalculoCombustivel(){
  const resultado=km/combustivel;
  alert("O consumo do seu carro é "+resultado);
}
const [km,setkm]=useState('');
const [combustivel,setcombustivel]=useState('');





  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Consumo de combustivel
      </Text>
      <TextInput style={styles.input} 
      placeholder="Digite km percorridos"
      keyboardType="numeric"
      placeholderTextColor="#27026e"
      onChangeText={(km)=>setkm(km)}
      />

      <TextInput style={styles.input}
      placeholder="Digite a quantidade de combustivel"
      keyboardType="numeric"
      placeholderTextColor="#27026e"
      onChangeText={(combustivel)=>setcombustivel(combustivel)}
      />

      <TouchableOpacity style={styles.btn} onPress={CalculoCombustivel}>
      <Text style={styles.textobtn}> Calcular o consumo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#c4a8ff',
    padding:8,
    color:'#231fff'
  },
  paragraph:{
    margin:24,
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:60
  },
  btn:{ 
    alignItems:'center',
    backgroundColor:'#1b1047',
    borderRadius:10,
    padding:15,
    margin:15,
    marginTop:50
  },
  textobtn:{
    color:'#ffffff',
    fontSize:20
  },
  input:{
    fontSize:17,
    padding:20,
    backgroundColor:'#5b6be6',
    margin:15,
    borderRadius:10,
    color:'#27026e'
  }
});
