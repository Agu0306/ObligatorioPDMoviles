import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import React, {useState} from 'react'
import MyInputText from '../components/MyInputText'
import MyText from '../components/MyText'
import MySingleButton from '../components/MySingleButton'

import DatabaseConnection from "../database/database-connection";
import Vehiculos from '../screens/Vehiculos'
const db = DatabaseConnection.getConnection();

const getVehiculoData = () => {
  console.log('getVehiculoData');
  setVehiculoData({})
  db.transaction (tx=> {
    tx.executeSql(
      'SELECT * FROM vehiculos WHERE vehiculo = ?',
      [Vehiculos], [tx, results] => {
        console.log('results', results);
      if(results.row.length >0){
        setVehiculoData(resuts.row.item(0));
      }
      else{
        Alert.alert('El vehiculo no existe');
      }
      }
   )
  )
}
const ViewVehiculo = () => {
  const[vehiculo, setVehiculo] = useState('');
  const[VehiculoData, setVehiculoData] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.generalView}>
          <MyText style={styles.inputStyle}>Filtro de vehiculo</MyText>
          <MyInputText style={styles.inputStyle}
          placeholder="Matricula"
          onChangeText={(Text) => setVehuiculo(Text)}
          />
          <MySingleButton title="Buscar" customPress={getVehiculoData}/>
          <View style={styles.presenterView}>
            <MyText>Matricula: {vehiculoData.vehiculo} </MyText>
            <MyText>Marca: {vehiculoData}</MyText>
            <MyText>Color: {vehiculoData}</MyText>
            <MyText>Motor: {vehiculoData}</MyText>
            <MyText>Ver Vehiculo</MyText>
          </View>
        </View>
    </View>
  </SafeAreaView>
  )
}

export default ViewVehiculo

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