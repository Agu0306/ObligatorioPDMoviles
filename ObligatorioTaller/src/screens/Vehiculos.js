import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import registerVehiculo from '../ABMVehiculo/registerVehiculo'
import updateVehiculo from '../ABMVehiculo/UpdateVehiculo'
import deleteVehiculo from '../ABMVehiculo/DeleteVehiculo'
import viewVehiculo from '../ABMVehiculo/ViewVehiculo'
import viewAllVeiculos from '../ABMVehiculo/ViewAllVehiculos'

const Vehiculos = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

export default Vehiculos

const styles = StyleSheet.create({})