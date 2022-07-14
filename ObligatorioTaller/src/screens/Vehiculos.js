import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import registerVehiculo from '../ABMVehiculo/RegisterVehiculo'
import updateVehiculo from '../ABMVehiculo/UpdateVehiculo'
import deleteVehiculo from '../ABMVehiculo/DeleteVehiculo'
import viewVehiculo from '../ABMVehiculo/ViewVehiculo'
import viewAllVeiculos from '../ABMVehiculo/ViewAllVehiculos'
import { ScrollView } from 'react-native-gesture-handler'

const Vehiculos = () => {
  return (
    <SafeAreaView>
    <ScrollView>
      <View>
        <registerVehiculo/>
      </View>
      <View>
        <updateVehiculo/>
      </View>
      <View>
        <deleteVehiculo/>
      </View>
      <View>
        <viewVehiculo/>
      </View>
      <View>
        <viewAllVeiculos/>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Vehiculos

const styles = StyleSheet.create({})