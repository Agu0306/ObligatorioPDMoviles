import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import React, {useState} from 'react'
import MyInputText from '../components/MyInputText'
import MyText from '../components/MyText'
import MySingleButton from '../components/MySingleButton'

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const getUserData = () => {
  console.log('getUserData');
  setUserData({})
  db.transaction (tx=> {
    tx.executeSql(
      'SELECT * FROM users WHERE userName = ?',
      [userName], [tx, results] => {
        console.log('results', results);
      if(results.row.length >0){
        setUserData(resuts.row.item(0));
      }
      else{
        Alert.alert('El usuario no existe');
      }
      }
   )
  )
}
const ViewUser = () => {
  constn[userName, setUserName] = useState('');
  const[userData, setUserData] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.generalView}>
          <MyText style={styles.inputStyle}>Filtro de usuario</MyText>
          <MyInputText style={styles.inputStyle}
          placeholder="Nombre de usuario"
          onChangeText={(Text) => setUserName(Text)}
          />
          <MySingleButton title="Buscar" customPress={getUserData}/>
          <View style={styles.presenterView}>
            <MyText>Nombre de Usuario: {userData.userName} </MyText>
            <MyText>Apellido: {userData}</MyText>
            <MyText>Cedula: {userData}</MyText>
            <MyText>Vehiculo: {userData}</MyText>
            <MyText>ViewUser</MyText>
          </View>
        </View>
    </View>
  </SafeAreaView>
  )
}

export default ViewUser

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  viewContainer:{
    flex:1,
    backgroundColor: "white",
  },
  generalView:{

  },
  inputStyle:{
    padding: 15,
  },
  presenterView:{
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  }
   

})