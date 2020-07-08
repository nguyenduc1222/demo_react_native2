import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'

// import { formatPrice } from '../utils/Number';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProductListItem(props){
    const { product, onAddToCartClick, onPressDetail } = props;
    
    return(
        <View style={myStyles.shadow} >
            <View style={myStyles.container}>
                <TouchableOpacity onPress={onPressDetail}>
                    <Image
                        style={myStyles.img} 
                        source={{ uri: product.images[0].url }}
                    />
                </TouchableOpacity>

                <View style={myStyles.info}>
                    <Text style={myStyles.name}>
                        { product.name }
                    </Text>
                    <Text style={myStyles.Price}>
                        { product.price } VND
                    </Text>
                    <TouchableOpacity onPress={onAddToCartClick}>
                        <Text style={myStyles.cartText}>
                            MUA +
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    ) 
}

const myStyles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow: 'hidden'
    },
    shadow : {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
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
    },
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    info: {
        padding: 8
    },
    img: {
        flex: 1,
        // width: 150,
        margin: 20,
        height: 150,
        resizeMode: 'contain',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
});