import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'

import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const RegisterUser = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [apellido, setApellido] = useState('');
  let [cedula, setCedula] = useState('');
  let [auto, setAuto] = useState('');

  const registerUser = () => {
    console.log(userName, apellido, cedula, auto);
  
    if(!userName) {
      alert('Ingrese su nombre de usuario');
      return;
    }

    if(!apellido) {
      alert('Ingrese su apellido');
      return;
    }

    if(!cedula) {
      alert('Ingrese su cedula');
      return;
    }
    if(!auto) {
      alert('Ingrese su matricula');
      return;
    }

    // guardar los datos
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO users (userName, apellido, cedula, auto) VALUES (?, ?, ?, ?)`,
        [userName,apellido, cedula, auto], (tx, results) => {
          console.log('results', results);
          // validar resultado
          if(results.rowsAffected > 0){
            Alert.alert('Usuario registrado');
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
                  placeholder="Nombre de Usuario"
                  onChangeText={(text) => setUserName(text)}
                />
                 <MyInputText
                  placeholder="Apellido de Usuario"
                  onChangeText={(text) => setUserName(text)}
                />
                 <MyInputText
                  placeholder="Cedula"
                  onChangeText={(text) => setUserName(text)}
                />
                 <MyInputText
                  placeholder="Auto"
                  onChangeText={(text) => setUserName(text)}
                />

               

                <MySingleButton title="Guardar Usuario" onPress={registerUser}/>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default RegisterUser

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