import React, {useState} from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'

import MyInputText from '../components/MyInputText';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
const db = DatabaseConnection.getConnection();

const RegisterUser = ({ navigation }) => {
  let [userName, setUserName] = useState('');
  let [password, setPassword] = useState('');
  let [email, setEmail] = useState('');

  const registerUser = () => {
    console.log(userName, password, email);
    // validaciones estados
    if(!userName) {
      alert('Ingrese su nombre de usuario');
      return;
    }

    if(!password) {
      alert('Ingrese su contraseña');
      return;
    }

    if(!email) {
      alert('Ingrese su email');
      return;
    }

    // guardar los datos
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO users (userName, password, email) VALUES (?, ?, ?)`,
        [userName, password, email], (tx, results) => {
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
                  onchangeText={(text) => setUserName(text)}
                />

                <MyInputText
                  placeholder="Contraseña"
                  minLength={8}
                  maxLength={16}
                  onchangeText={(text) => setPassword(text)}
                />

                <MyInputText 
                  placeholder="Correo Electronico"
                  keyboardType="email-address"
                  onchangeText={(text) => setEmail(text)}
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