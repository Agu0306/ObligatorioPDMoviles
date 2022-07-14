import { StyleSheet, SafeAreaView, View } from 'react-native'
import React from 'react'
import MyButton from "../components/MyButton";
import DatabaseConnection from "../database/database-connection";
import Usuarios from Usuarios
import Vehiculos from Vehiculos
import Tratamientos from Tratamientos
import Insumos from Insumos
import Repuestos from Repuestos

const db = DatabaseConnection.getConnection();

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <View>
            <MyButton
            title="Usuarios"
            btncolor="green"
            btnIcon="user-plus"
            customPress={() => {Usuarios}} />
            <MyButton
            title="Vehiculos"
            btncolor="green"
            btnIcon="user-plus"
            customPress={() => {Vehiculos}} />
            <MyButton
            title="Tratamientos"
            btncolor="green"
            btnIcon="user-plus"
            customPress={() => {Tratamientos}} />
              <MyButton
            title="Insumos"
            btncolor="green"
            btnIcon="user-plus"
            customPress={() => {Insumos}} />
              <MyButton
            title="Repuestos"
            btncolor="green"
            btnIcon="user-plus"
            customPress={() => {Repuestos}} />
          </View>
        </View>
      </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  viewContainer:{
    
  }
})