import { Pressable, StyleSheet, Text} from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SubmitButton = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
})