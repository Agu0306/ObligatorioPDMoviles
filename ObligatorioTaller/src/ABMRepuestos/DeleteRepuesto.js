import { StyleSheet, View, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const deleteRepuesto = () => {
  const [repuestoName, setRepuestoName] = useState('')

  const deleteRepuesto = () => {
    console.log('deleteRepuesto');
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM users WHERE repuestoName = ?',
        [repuestoName],
        (tx, results) => {
          console.log("results", results);
          if(results.rowsAffected > 0) {
            Alert.alert("Repuesto eliminado");
          }
          else{
            Alert.alert("El repuesto no existe");
          }
          }
        }
      )
    }
  }
}

const DeleteRepuesto = () => {
  return (
 <SafeAreaView style={styles.container}>
  <View style={styles.generalView}>
    <View style={styles.generalView}>
      <MyInputText
      placeholder="Nombre de repuesto"
      onChangeText={(text) => setRepuestoName(text)}/>
      <MySingleButton title="Borrar repuesto" customPress={}/>
     
    </View>
  </View>
 </SafeAreaView>
   
  )
}

export default DeleteRepuesto

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  viewContainer:{
    flex:1,
    backgroundColor: 'white',
  },
  generalView:{
    flex:1,
  },
  inputStyle:{
    padding:15,
  }


})