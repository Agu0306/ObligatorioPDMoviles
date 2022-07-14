import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import MyInputText from '../components/MyInputText';
import MyButton from '../components/MyButton';
import MySingleButton from '../components/MySingleButton';

import DatabaseConnection from "../database/database-connection";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import MyText from '../components/MyText';
const db = DatabaseConnection.getConnection();

const UpdateVehiculo = () => {
  const [vehiculo, setVehiculo] = useState({});

  const UpdateUser
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.generalView}>
          <ScrollView keyboardShouldPersistTaps="handled"/>
            <KeyboardAvoidingView behavior='padding' style={styles.keyboardView}>
              <MyText text="Buscar Vehiculo"/>
              <MyInputText
              placeholder="Ingrese matricula"
              style={styles.inputStyle}/>
              <MySingleButton title = "Buscar" customPress={} />

              <MyInputText 
              placeholder="Ingrese matricula"
              value={user.userName}/>
              <MyInputText 
              placeholder="Ingrese marca"
              value ={}/>
               <MyInputText 
              placeholder="Ingrese color"
              value ={}/>
               <MyInputText 
              placeholder="Ingrese serial de motor"
              value ={}/>
              <MyButton title = "Actualizar" customPress={UpdateVehiculo}/>
            </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
    
  )
}

export default UpdateVehiculo

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex:1,
    backgroundColor: 'white',
  },
  generalView: {
    flex: 1,
  },
  inputStyle: {
    padding: 15,
  },
  keyboardView:{
    flex:1,
    justifyContent: 'space-between',
  },


})