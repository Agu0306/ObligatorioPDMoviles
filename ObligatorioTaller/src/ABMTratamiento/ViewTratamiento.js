import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import React, {useState} from 'react'
import MyInputText from '../components/MyInputText'
import MyText from '../components/MyText'
import MySingleButton from '../components/MySingleButton'

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const getTratamientoData = () => {
  console.log('getTratamientoData');
  setTratamientoData({})
  db.transaction (tx=> {
    tx.executeSql(
      'SELECT * FROM tratamientos WHERE tratamientoName = ?',
      [tratamientoName], [tx, results] => {
        console.log('results', results);
      if(results.row.length >0){
        setTratamientoData(resuts.row.item(0));
      }
      else{
        Alert.alert('El tratamiento no existe');
      }
      }
   )
  )
}
const ViewTratamiento = () => {
  constn[tratamientoName, setTratamientoName] = useState('');
  const[userData, setUserData] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.generalView}>
          <MyText style={styles.inputStyle}>Filtro de usuario</MyText>
          <MyInputText style={styles.inputStyle}
          placeholder="Nomre del tratamiento"
          onChangeText={(Text) => setTratamientoName(Text)}
          />
          <MySingleButton title="Buscar" customPress={getTratamientoData}/>
          <View style={styles.presenterView}>
            <MyText>Nombre del tratamiento: {tratamientoData.tratamientoName} </MyText>
            <MyText>auto: {tratamientoData}</MyText>
            <MyText>Fecha Inicio: {tratamientoData}</MyText>
            <MyText>Fecha Fin: {tratamientoData}</MyText>
            <MyText>Costo: {tratamientoData}</MyText>
            <MyText>Insumo: {tratamientoData}</MyText>
            <MyText>Repuesto: {tratamientoData}</MyText>
            <MyText>Ver tratamiento</MyText>
          </View>
        </View>
    </View>
  </SafeAreaView>
  )
}

export default ViewTratamiento

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