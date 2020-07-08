import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Categories from './Categories';
import Category from './Category';
import Product from './Product';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const Stack = createStackNavigator();
        return (
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="Product" component={Product}  options={{ headerShown: false }} />
            </Stack.Navigator>

        )
    }
}