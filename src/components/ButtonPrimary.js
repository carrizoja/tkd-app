import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../global/colors'

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
   /*  width: 100,
    height: 40,
    justifyContent: 'center', */
    backgroundColor: colors.primary,
    width: "80%",
    marginHorizontal: "10%",
    height: 45,
    borderRadius: 5,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textButton: {
    color: colors.white,
    fontSize: 18,
  } 
})