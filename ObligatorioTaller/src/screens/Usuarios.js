import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import RegisterUser from '../ABMTratamiento/RegisterTratamiento'
import DeleteUser from '../ABMUsuario/DeleteUser'
import UpdateUser from '../ABMUsuario/UpdateUser'
import ViewAllUsers from '../ABMUsuario/ViewAllUsers'
import ViewUser from '../ABMUsuario/ViewUser'


const Usuarios = () => {
  return (
    <SafeAreaView>
      <View>
        <RegisterUser/>
      </View>
      <View>
        <UpdateUser/>
      </View>
      <View>
        <DeleteUser/>
      </View>
      <View>
        <ViewUser/>
      </View>
      <View>
        <ViewAllUsers/>
      </View>
    </SafeAreaView>
  )
}

export default Usuarios

const styles = StyleSheet.create({})