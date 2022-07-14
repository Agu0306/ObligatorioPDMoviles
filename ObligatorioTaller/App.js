import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './src/route';

export default function App() {
  return (
    <View>
          <RootStack/>
    </View>
  
  )
   
     
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
