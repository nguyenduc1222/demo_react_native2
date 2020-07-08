import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import axios from 'axios';
import CategoryListItem from '../components/CategoryListItem'
import { NavigationContainer } from '@react-navigation/native';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categories: []
    }
  }

  componentDidMount() {
    axios.get('http://45.76.106.225/api/categories.json')
    .then(res => {
        console.log(res.data.categories)

        this.setState({
            categories: res.data.categories
        })
    })
    .catch(error => {
        console.error(error)
    })
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    
    return (
      <View>
          <FlatList 
            data={categories}
            renderItem={
              ({ item }) => 
                <CategoryListItem 
                    category={item}
                    onPress={
                        ( ) => navigation.navigate('Category', {
                            categoryName: item.name,
                            categoryId: item.id
                        })
                    }

                    options={{ title: "hahaha" }}
                />
            }
            keyExtractor={item => `${item.id}` }
            contentContainerStyle={{ paddingLeft: 5, paddingRight: 5, paddingTop: 15, backgroundColor: '#aaa' }}
          />
      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  body: {
    paddingTop: 20
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
