import { StyleSheet, View, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const deleteInsumo = () => {
  const [userName, setUserName]= useState('')

  const deleteInsumo = () => {
    console.log('deleteInsumo');
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM insumos WHERE userName = ?',
        [userName],
        (tx, results) => {
          console.log("results", results);
          if(results.rowsAffected > 0) {
            Alert.alert("Insumo eliminado");
          }
          else{
            Alert.alert("El insumo no existe");
          }
          }
        }
      )
    }
  
  }


const DeleteInsumo = () => {
  return (
 <SafeAreaView style={styles.container}>
  <View style={styles.generalView}>
    <View style={styles.generalView}>
      <MyInputText
      placeholder="Nombre Insumo"
      onChangeText={(text) => setUserName(text)}/>
      <MySingleButton title="Borrar Insumo" customPress={}/>
     
    </View>
  </View>
 </SafeAreaView>
   
  )
}

export default DeleteInsumo

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