import { StyleSheet, Text, Pressable } from 'react-native'


const ButtonPrimary = ({text, onPress, children}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
    {children}
    <Text style={styles.textButton}>{text}</Text>
  </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    
  button: {
    width: 100,
    height: 40,
    backgroundColor: '#FF6666',
    flex: 1,
    margin: 10,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
  } 
})