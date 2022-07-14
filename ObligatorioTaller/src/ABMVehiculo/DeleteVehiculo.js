import { StyleSheet, View, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const deleteVehiculo = () => {
  const [vehiculo, setVehiculo] = useState('')

  const deleteVehiculo = () => {
    console.log('deleteVehiculo');
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM vehiculos WHERE vechiulo = ?',
        [userName],
        (tx, results) => {
          console.log("results", results);
          if(results.rowsAffected > 0) {
            Alert.alert("Vehiculo eliminado");
          }
          else{
            Alert.alert("El vehiculo no existe");
          }
          }
        }
      )
    }
  }
}

const DeleteVehiculo = () => {
  return (
 <SafeAreaView style={styles.container}>
  <View style={styles.generalView}>
    <View style={styles.generalView}>
      <MyInputText
      placeholder="Nombre de Vehiculo"
      onChangeText={(text) => setVehiculo(text)}/>
      <MySingleButton title="Borrar Vehiculo" customPress={deleteVehiculo}/>
     
    </View>
  </View>
 </SafeAreaView>
   
  )
}

export default DeleteVehiculo

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