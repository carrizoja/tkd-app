import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import ProfileStack from './ProfileStack';
import TabBarIcon from "../components/TabBarIcon";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from "../global/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
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
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Shopping" icon="shop" 
            />;
          },
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon
                focused={focused}
                text="Carrito"
                icon="shopping-cart"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Pedidos" icon="list" />;
          },
        }}
      />
       <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Perfil" icon="user" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        height: 60,
        paddingBottom: 5,
    },
    });