import React from 'react';
import axios from 'axios';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import StartButton from '../assets/start-button.png'
export default function CategoryListItem(props) {
    const { category, onPress } = props;

    // const onSelect = React.useCallback(
    //     id => {
    //       const newSelected = new Map(selected);
    //       newSelected.set(id, !selected.get(id));
    
    //       setSelected(newSelected);
    //     },
    //     [selected],
    // );

    return (
    <TouchableOpacity 
        activeOpacity={0.3} 
        onPress={onPress}
    >
        <View style={[ myStyles.container, myStyles.shadow ]}>
            <Text style={myStyles.title}> { category.name } </Text>
            <Image style={myStyles.categoryImage} source={StartButton} />
            <Ionicons name="ios-information-circle-outline" size={24} color="black" />
        </View>
    </TouchableOpacity>
    );
}

const myStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        marginBottom: 16
    },
    shadow : {
        shadowColor: '#30C1DD',
        shadowOpacity: 10,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: { width: 0, height: 4}
    },
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});