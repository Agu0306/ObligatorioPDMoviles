import { StyleSheet, View, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const deleteUser = () => {
  const [userName, setUserName] useState('')

  const deleteUser = () => {
    console.log('deleteUser');
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM users WHERE userName = ?',
        [userName],
        (tx, results) => {
          console.log("results", results);
          if(results.rowsAffected > 0) {
            Alert.alert("Usuario eliminado");
          }
          else{
            Alert.alert("El usuario no existe");
          }
          }
        }
      )
    }
  }
}

const DeleteUser = () => {
  return (
 <SafeAreaView style={styles.container}>
  <View style={styles.generalView}>
    <View style={styles.generalView}>
      <MyInputText
      placeholder="Nombre de usuario"
      onChangeText={(text) => setUserName(text)}/>
      <MySingleButton title="Borrar Usuario" customPress={}/>
     
    </View>
  </View>
 </SafeAreaView>
   
  )
}

export default DeleteUser

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