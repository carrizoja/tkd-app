import { StyleSheet, Text, View, TextInput } from 'react-native'


const InputForm = ({label, value, onChangeText, isSecure, error}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isSecure}
        />
        <View>
          <Text style={styles.error}>{error ? error : ""}</Text>
        </View>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginVertical: 12,
    },
    titleInput: {
        fontSize: 16,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
    },
    error: {
        color: 'red',
        fontSize: 14,
    },
})