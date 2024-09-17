import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Header from '../components/Header'
import Register from '../screens/Register'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
        screenOptions={(
          ({route}) => {
            return {
                header: () => <Header title={route.name === "Login" ? "Inicio de Sesión": "Registrarme"} />,
            }
          }
        )
           
        }
    >
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ title: 'Registro' }}
      />
    </Stack.Navigator>
  )
}

export default AuthStack

