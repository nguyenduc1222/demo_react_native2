import React from 'react';
import axios from 'axios';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ProductListItem from '../components/ProductListItem';

export default class Category extends React.Component {
    
    // static navigationOptions = {
    //     title: this.props.route.params.categoryName,
    // };

    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        const params = this.props.route.params;

        axios.get('http://45.76.106.225/api/product.php?categories=' + params.categoryId)
        .then(res => {
            this.setState({
                products: res.data
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    // static navigationOptions = ({ route, navigation }) => {
    //     return {
    //         title: route.params.categoryName,
    //     }
    // };


    render() {
        const { navigation } = this.props;
        
        const params = this.props.route.params;
        console.log(params);
        
        return (
            <View>
                <Text>{params.categoryName}</Text>

                <FlatList
                    contentContainerStyle={myStyles.container}
                    data={this.state.products}
                    numColumns={2}
                    renderItem={({ item }) => 
                        <View style={myStyles.wrapper}>
                            <ProductListItem 
                                product={item}
                                onPressDetail={
                                    ( ) => navigation.navigate('Product', {
                                        item: item
                                    })
                                }
                            />
                        </View>
                    }
                    keyExtractor={(item) => `${item.id}` }
                />  
            </View>
        );
    }    
}

const myStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,

        // paddingVertical: 16
        paddingTop: 16
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8
    }
})


