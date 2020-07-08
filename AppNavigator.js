import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Categroy from './screens/Category';
import Categories from './screens/Categories';

import Cart from './screens/Cart';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

const CategoryStack = createStackNavigator({
    Categories,
    Categroy
});
CategoryStack.navigationOptions = {
    tabBarLable: 'Home'
};

const CartStack = createStackNavigator({
    Cart
});
CartStack.navigationOptions = {
    tabBarLable: 'Cart'
};

const OrderStack = createStackNavigator({
    Order
});
OrderStack.navigationOptions = {
    tabBarLable: 'OrderStack'
};

CartStack.navigationOptions = {
    tabBarLable: 'Cart'
};
CartStack.navigationOptions = {
    tabBarLable: 'CartStack'
};

const SettingStack = createStackNavigator({
    Settings
});
SettingStack.navigationOptions = {
    tabBarLable: 'SettingStack'
};

const AppNavigator = createBottomTabNavigator({
    CategoryStack,
    CartStack,
    OrderStack,
    SettingStack
})

export default AppNavigator;