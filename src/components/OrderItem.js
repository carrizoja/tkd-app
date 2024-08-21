import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {colors} from "../global/colors"

const OrderItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
            <Text style={styles.date}>{new Date(item.createdAt).toLocaleDateString()}</Text>
        <Text style={styles.total}>$ {item.total}</Text> 
      </View>
      <AntDesign name="search1" size={48} color="black" />  
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%',
        backgroundColor: colors.white,
        marginVertical: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 10,
    },
    containerText: {
        width: '80%',
        gap: 10,
    },
    date: {
        fontSize: 16,

    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
    },
 
})