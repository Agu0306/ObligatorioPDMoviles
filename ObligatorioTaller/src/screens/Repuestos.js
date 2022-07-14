import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterTratamiento from '../ABMTratamiento/RegisterTratamiento'
import UpdateTratamiento from '../ABMTratamiento/UpdateTartamiento'
import DeleteTratamiento from '../ABMTratamiento/DeleteTartamiento'
import ViewTratamiento from '../ABMTratamiento/ViewTratamiento'
import ViewAllTratamiento from '../ABMTratamiento/ViewAllTratamientos'
import { ScrollView } from 'react-native-gesture-handler'

const Tratamientos = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <RegisterTratamiento/>
    </View>
    <View>
      <UpdateTratamiento/>
    </View>
    <View>
      <DeleteTratamiento/>
    </View>
    <View>
      <ViewTratamiento/>
    </View>
    <View>
      <ViewAllTratamiento/>
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Tratamientos

const styles = StyleSheet.create({})