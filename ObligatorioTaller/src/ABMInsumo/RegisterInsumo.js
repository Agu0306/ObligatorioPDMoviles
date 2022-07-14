import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'

import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const RegisterInsumo = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [cantidad, setCantidad] = useState('');
  

  const registerInsumo = () => {
    console.log(userName, cantidad);
    // validaciones estados
    if(!userName) {
      alert('Ingrese su nombre de Insumo');
      return;
    }

    if(!cantidad) {
      alert('Ingrese cantidad');
      return;
    }
}

    // guardar los datos
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO insumos (userName, cantidad) VALUES (?, ?)`,
        [userName, cantidad], (tx, results) => {
          console.log('results', results);
          // validar resultado
          if(results.rowsAffected > 0){
            Alert.alert('Insumo registrado');
            navigation.navigate('HomeScreen');
          }
        }
      )
    })
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={styles.generalView}>
            <ScrollView>
              <KeyboardAvoidingView style={styles.keyboardView}>
                <MyInputText
                  placeholder="Nombre insumo"
                  onchangeText={(text) => setUserName(text)}
                />

                <MyInputText
                  placeholder="Cantidad"
                  onchangeText={(text) => setCantidad(text)}
                />

                <MySingleButton title="Guardar insumo" onPress={registerInsumo}/>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
    </SafeAreaView>
  )


export default RegisterInsumo

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  generalView: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
    justifyContent: "space-between",
  },
  nameInput: {
    padding: 15,
    textAlignVertical: "top"
  },
  passwordInput: {
    padding: 15,
    textAlignVertical: "top"
  },
  emailInput: {
    padding: 15,
    textAlignVertical: "top"
  }
})