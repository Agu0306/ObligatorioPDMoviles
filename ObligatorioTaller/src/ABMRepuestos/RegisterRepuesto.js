import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'

import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const RegisterRepuesto = ({ navigation }) => {
  let [repuestoName, setRepuestoName] = useState('');
  let [cantidad, setCantidad] = useState('');
 

  const registerRepuesto = () => {
    console.log(repuestoName, cantidad);
    // validaciones estados
    if(!repuestoName) {
      alert('Ingrese nombre del repuesto');
      return;
    }

    if(!cantidad) {
      alert('Ingrese cantidad');
      return;
    }

    // guardar los datos
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO repuesto (repuestoName, cantidad) VALUES (?, ?)`,
        [repuestoName, cantidad], (tx, results) => {
          console.log('results', results);
          // validar resultado
          if(results.rowsAffected > 0){
            Alert.alert('Repuesto registrado');
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
                  placeholder="Nombre Repuesto"
                  onchangeText={(text) => setRepuestoName(text)}
                />

                <MyInputText
                  placeholder="Cantidad"
                  onchangeText={(text) => setCantidad(text)}
                />
                <MySingleButton title="Guardar Repuesto" onPress={registerRepuesto}/>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default RegisterRepuesto

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