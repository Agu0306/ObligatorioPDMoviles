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

const UpdateTratamiento = () => {
  const [tratamiento, setTratamiento] = useState({});

  const UpdateTratamiento
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.generalView}>
          <ScrollView keyboardShouldPersistTaps="handled"/>
            <KeyboardAvoidingView behavior='padding' style={styles.keyboardView}>
              <MyText text="Buscar Tratamiento"/>
              <MyInputText
              placeholder="Ingrese el nombre del tratamiento"
              style={styles.inputStyle}/>
              <MySingleButton title = "Buscar" customPress={} />

              <MyInputText 
              placeholder="Ingrese el nombre del tratamiento"
              value={user.userName}/>
              <MyInputText 
              placeholder="Ingrese vehiculo"
              value ={}/>
               <MyInputText 
              placeholder="Ingrese fecha de inicio"
              value ={}/>
               <MyInputText 
              placeholder="Ingrese fecha de finalizacion"
              value ={}/>
               <MyInputText 
              placeholder="Ingrese costo"
              value ={}/>
               <MyInputText 
              placeholder="Ingrese insumo"
              value ={}/>
               <MyInputText 
              placeholder="Ingrese repuesto"
              value ={}/>
              

              <MyButton title = "Actualizar" customPress={UpdateTratamiento}/>
            </KeyboardAvoidingView>
        </View>
      </View>
    </SafeAreaView>
    
  )
}

export default UpdateTratamiento

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