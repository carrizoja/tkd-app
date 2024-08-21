import { NavigationContainer } from "@react-navigation/native";
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";
import { colors } from "../global/colors";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            ...styles.tabBar,
          },
        }}
      
      >
        <Tab.Screen
         name="Shop"
         component={ShopStack}
         options={{
           tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Shop" icon="shop"/>         
         }}
         } />
        <Tab.Screen
         name="Cart" 
         component={CartStack}
         options={{
          tabBarIcon: ({ focused }) => {
           return <TabBarIcon focused={focused} text="Cart" icon="shopping-cart"/>         
        }}
        }
          />
        <Tab.Screen
         name="Orders"
          component={OrdersStack}
          options={{
            tabBarIcon: ({ focused }) => {
             return <TabBarIcon focused={focused} text="Shop" icon="list"/>         
          }}
          }
          />
      </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Navigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    height: 60,
    paddingBottom: 5,
  }
})