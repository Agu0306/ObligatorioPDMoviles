import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'

import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const RegisterVehiculo = ({ navigation }) => {
  let [vehiculo, setVehiculo] = useState('');
  let [marca, setMarca] = useState('');
  let [color, setColor] = useState('');
  let [motor, setMotor] = useState('');

  const registerVehiculo = () => {
    console.log(vehiculo, marca, color, motor);
    // validaciones estados
    if(!vehiculo) {
      alert('Ingrese matricula');
      return;
    }

    if(!marca) {
      alert('Ingrese marca');
      return;
    }

    if(!color) {
      alert('Ingrese color');
      return;
    }
    if(!motor) {
      alert('Ingrese serie del motor');
      return;
    }

    // guardar los datos
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO vehiculo (vehiculo, marca, color, motor) VALUES (?, ?, ?, ?)`,
        [vehiculo, marca, color, motor], (tx, results) => {
          console.log('results', results);
          // validar resultado
          if(results.rowsAffected > 0){
            Alert.alert('Vehiculo registrado');
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
                  placeholder="Matricula"
                  onchangeText={(text) => setVehiculo(text)}
                />

                <MyInputText
                  placeholder="Marca"
                  onchangeText={(text) => setMarca(text)}
                />
                 <MyInputText
                  placeholder="Color"
                  onchangeText={(text) => setColor(text)}
                />
                 <MyInputText
                  placeholder="Motor"
                  onchangeText={(text) => setMotor(text)}
                />              

                <MySingleButton title="Guardar Vehiculo" onPress={registerVehiculo}/>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default RegisterVehiculo

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