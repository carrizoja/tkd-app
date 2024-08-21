import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputPrimary = () => {
  return (
    <TextInput style={styles.input} placeholder='Add a task'></TextInput>
  )
}

export default InputPrimary

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex:2,
    margin:10,
  }
})