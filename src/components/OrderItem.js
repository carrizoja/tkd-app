import { StyleSheet, Text, View, Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import {colors} from "../global/colors"
import { useNavigation } from '@react-navigation/native';

const OrderItem = ({item}) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
            <Text style={styles.date}>{item.createdAt}</Text>
        <Text style={styles.total}>$ {item.total}</Text> 
      </View>
      <Pressable onPress={() => navigation.navigate("Detalle de Pedido", {id:item.id})}>
        <AntDesign name="search1" size={24} color="black" />
      </Pressable>
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