import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'

import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const RegisterTratamiento = ({ navigation }) => {
  let [tratamiento, setTratamiento] = useState('');
  let [auto, setAuto] = useState('');
  let [inicio, setInicio] = useState('');
  let [fin, setFin] = useState('');
  let [costo, setCosto] = useState('');
  let [insumo, setInsumo] = useState('');
  let [repuesto, setRepuesto] = useState('');

  const registerTratamiento = () => {
    console.log(tratamiento, auto, inicio, fin, costo, insumo, repuesto);
    // validaciones estados
    if(!tratamiento) {
      alert('Ingrese nombre de tratamiento');
      return;
    }

    if(!auto) {
      alert('Ingrese vehiculo');
      return;
    }

    if(!inicio) {
      alert('Ingrese fecha de inicio');
      return;
    }
    if(!fin) {
      alert('Ingrese fecha final');
      return;
    }
    if(!costo) {
      alert('Ingrese costo');
      return;
    }
    if(!insumo) {
      alert('Ingrese nombre del insumo');
      return;
    }
    if(!repuesto) {
      alert('Ingrese nombre del repuesto');
      return;
    }

    // guardar los datos
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO tratamientos (tratamiento, auto, inicio, fin, costo, insumo, repuesto) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [tratamiento, auto, inicio, fin, costo, insumo, repuesto], (tx, results) => {
          console.log('results', results);
          // validar resultado
          if(results.rowsAffected > 0){
            Alert.alert('Tratamiento registrado con exito!');
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
                  placeholder="Nombre de Tratamiento"
                  onchangeText={(text) => setTratamiento(text)}
                />

                <MyInputText
                  placeholder="Auto"
                  onchangeText={(text) => setAuto(text)}
                />
                   <MyInputText
                  placeholder="Fecha de inicio"
                  onchangeText={(text) => setInicio(text)}
                />
                  <MyInputText
                  placeholder="Fecha de finalizacion"
                  onchangeText={(text) => setFin(text)}
                />
                  <MyInputText
                  placeholder="Costo"
                  onchangeText={(text) => setCosto(text)}
                />
                  <MyInputText
                  placeholder="Insumo"
                  onchangeText={(text) => setInsumo(text)}
                />
                  <MyInputText
                  placeholder="Repuesto"
                  onchangeText={(text) => setRepuesto(text)}
                />


                <MySingleButton title="Guardar Tratamiento" onPress={registerTratamiento}/>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default RegisterTratamiento

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