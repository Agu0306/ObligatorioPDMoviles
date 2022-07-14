import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterInsumo from '../ABMInsumo/RegisterInsumo'
import UpdateInsumo from '../ABMInsumo/UpdateInsumo'
import DeleteInsumo from '../ABMInsumo/DeleteInsumo'
import ViewInsumo from '../ABMInsumo/ViewInsumo'
import ViewAllInsumos from '../ABMInsumo/ViewAllInsumos'
import { ScrollView } from 'react-native-gesture-handler'

const Inusmos = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View>
      <RegisterInsumo/>
    </View>
    <View>
      <UpdateInsumo/>
    </View>
    <View>
      <DeleteInsumo/>
    </View>
    <View>
      <ViewInsumo/>
    </View>
    <View>
      <ViewAllInsumos/>
    </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Inusmos
const styles = StyleSheet.create({})