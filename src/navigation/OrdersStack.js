import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Orders from '../screens/Orders';
import OrderDetail from '../screens/OrderDetail';

const Stack = createNativeStackNavigator();
const OrdersStack = () => {
  return (
    <Stack.Navigator
        screenOptions={({route}) => {
            return {
                header: () => <Header title={
                    route.name === "Pedidos" ?
                    "Pedidos"
                    :
                    "Detalle de Pedido"
                } />,
        }
        }
        }
    >
      <Stack.Screen name="Pedidos" component={Orders} />
      <Stack.Screen name="Detalle de Pedido" component={OrderDetail} />
    </Stack.Navigator>
  )
}

export default OrdersStack

