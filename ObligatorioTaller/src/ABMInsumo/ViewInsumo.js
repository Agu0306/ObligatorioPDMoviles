import { SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native'
import React, {useState} from 'react'
import MyInputText from '../components/MyInputText'
import MyText from '../components/MyText'
import MySingleButton from '../components/MySingleButton'

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const getInsumoData = () => {
  console.log('getInsumoData');
  setInsumoData({})
  db.transaction (tx=> {
    tx.executeSql(
      'SELECT * FROM insumos WHERE userInsumo = ?',
      [userInsumo], [tx, results] => {
        console.log('results', results);
      if(results.row.length >0){
        setInsumoData(resuts.row.item(0));
      }
      else{
        Alert.alert('El usuario no existe');
      }
      }
   )
  )
}
const ViewInsumo = () => {
  const[insumoName, setInsumoName] = useState('');
  const[insumoData, setInsumoData] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.generalView}>
          <MyText style={styles.inputStyle}>Filtro de insumos</MyText>
          <MyInputText style={styles.inputStyle}
          placeholder="Nomre de insumo"
          onChangeText={(Text) => setInsumoName(Text)}
          />
          <MySingleButton title="Buscar" customPress={getInsumoData}/>
          <View style={styles.presenterView}>
            <MyText>Nombre de Insumo: {insumoData.insumoName} </MyText>
            <MyText>Cantidad: {insumoData}</MyText>
            <MyText>Ver Insumo</MyText>
          </View>
        </View>
    </View>
  </SafeAreaView>
  )
}

export default ViewInsumo

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