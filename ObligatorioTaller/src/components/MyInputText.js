import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const MyInputText = (props) => {
  return (
    <View>
      <TextInput
          underlineColorAndroid="transparent"
          placeholder={props.placeholder}
          placeholderTextColor="grey"
          keyboardType={props.keyboardType}
          returnKeyType={props.returnKeyType}
          numberOfLines={props.numberOfLines}
          multiline={props.multiline}
          onSubmitEditing={props.onSubmitEditing}
          style={styles.input}
          blurOnSubmit={false}
          value={props.value}
          />
    </View>
  )
}

export default MyInputText

const styles = StyleSheet.create({})