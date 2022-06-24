import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const MySingleButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customPress}>
        <View>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    </TouchableOpacity>

  )
}

export default MySingleButton;

const styles = StyleSheet.create({
    button: {
        alignContent: 'center',
        padding: 10,
        marginTop: 16,
        marginBotton: 16,
        marginRight: 16,
        borderRadius: 5
    },
    text: {
        color: 'white',
    }
})