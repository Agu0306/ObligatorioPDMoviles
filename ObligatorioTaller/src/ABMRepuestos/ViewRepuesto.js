import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import React, {useState} from 'react'
import MyInputText from '../components/MyInputText'
import MyText from '../components/MyText'
import MySingleButton from '../components/MySingleButton'

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const getRepuestosData = () => {
  console.log('getRepuestosData');
  setRepuestosData({})
  db.transaction (tx=> {
    tx.executeSql(
      'SELECT * FROM repuestos WHERE repuestoName = ?',
      [repuestoName], [tx, results] => {
        console.log('results', results);
      if(results.row.length >0){
        setRepuestosData(resuts.row.item(0));
      }
      else{
        Alert.alert('El repuesto no existe');
      }
      }
   )
  )
}
const ViewRepuesto = () => {
  const[repuestoName, setRepuestoName] = useState('');
  const[repuestoData, setRepuestoData] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.generalView}>
          <MyText style={styles.inputStyle}>Filtro de repuesto</MyText>
          <MyInputText style={styles.inputStyle}
          placeholder="Nomre de repuesto"
          onChangeText={(Text) => setRepuestoName(Text)}
          />
          <MySingleButton title="Buscar" customPress={getRepuestoData}/>
          <View style={styles.presenterView}>
            <MyText>Nombre de Repuesto: {repuestoData.repuestoName} </MyText>
            <MyText>Cantidad: {repuestoData}</MyText>
            <MyText>ViewUser</MyText>
          </View>
        </View>
    </View>
  </SafeAreaView>
  )
}

export default ViewRepuesto

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