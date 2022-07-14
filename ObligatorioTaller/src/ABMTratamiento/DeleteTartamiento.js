import { StyleSheet, View, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const deleteTratamiento = () => {
  const [tratamientoName, setTratamientoName] = useState('')

  const deleteTratamiento = () => {
    console.log('deleteTratamiento');
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM tratamiento WHERE tratamientoName = ?',
        [tratamientoName],
        (tx, results) => {
          console.log("results", results);
          if(results.rowsAffected > 0) {
            Alert.alert("Tratamiento eliminado");
          }
          else{
            Alert.alert("El tratamiento no existe");
          }
          }
        }
      )
    }
  }
}

const DeleteTratamiento = () => {
  return (
 <SafeAreaView style={styles.container}>
  <View style={styles.generalView}>
    <View style={styles.generalView}>
      <MyInputText
      placeholder="Nombre de tratamiento"
      onChangeText={(text) => setTratamientoName(text)}/>
      <MySingleButton title="Borrar Tratamiento" customPress={}/>
     
    </View>
  </View>
 </SafeAreaView>
   
  )
}

export default deleteTratamiento

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