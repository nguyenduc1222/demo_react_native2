import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

import { ScrollView } from 'react-native';

export default class Product extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        }
    }
    
    componentDidMount() {
        const params = this.props.route.params;
        axios.get('http://45.76.106.225/api/productDetail.php?id=' + params.item.id)
        .then(res => {
            this.setState({
                products: res.data
            })
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        const params = this.props.route.params;
        console.log(params);

        const { navigation } = this.props;

        const recipes = [
            {
                name: "Pad Thai",
                info: "45 min | 2 servings",
                image: require("../assets/padthai.jpg"),
            },
            {
                name: "Seared Scallops with Romesco Sauce",
                info: "20 min | 4 servings",
                image: require("../assets/callops.jpg"),
            },
            {
                name: "Grilled Chicken with Lemon Butter",
                info: "60 min | 2 servings",
                image: require("../assets/chicken.jpg"),
            },

        ]

        return (
            <ScrollView>
                <Container>
                    <StatusBar barStyle='light-content' />
                    <RecipeBackground source={require('../assets/main/bg.jpg')} >
                        <SafeAreaView>
                            <MenuBar>
                                <Back>
                                    <AntDesign name='arrowleft' size={24} color='#fff' onPress={()=>{ navigation.navigate('Category') }} />
                                    <Text style={{ marginLeft: 10 }} >Ingredients</Text>
                                </Back>
                                <AntDesign name='heart' size={24} color='#fff'/>
                            </MenuBar>

                            <MainRecipe>
                                <Text title heavy>Spicy Shrimp</Text>
                                <Divider />
                                <Text bold>80 calories per 100g</Text>
                                <Text >3g fat | 10g protein | 8g carbs</Text>
                            </MainRecipe>

                            <Button>
                                <Text bold small>LEARN MORE</Text>
                            </Button>

                        </SafeAreaView>
                    </RecipeBackground>

                    <RecipesContainer>
                        <Text dark heavy large>
                            Recipes
                        </Text>
                        <Text dark small>
                            18 recipes available
                        </Text>
                        
                        <Recipes>
                            {recipes.map((recipe, index) => {

                                return(
                                    <Recipe key={index} >
                                        <RecipeImage source={recipe.image} />

                                        <RecipeInfo>
                                            <Text dark bold>{recipe.name}</Text>
                                            <Text dark bold>{recipe.info}</Text>
                                        </RecipeInfo>

                                        <AntDesign name='hearto' size={18} color='#000' />
                                    </Recipe>
                                )
                            })}
                        </Recipes>
                    </RecipesContainer>
                </Container>
            </ScrollView>
        );
    }    
}

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    height: auto;
`;

const RecipeBackground = styled.ImageBackground`
    width: 100%;
`;

const MenuBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0px 16px 16px 16px;
`;

const Back = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Text = styled.Text`
    color: ${ (props) => (props.dark ? '#000' : '#fff') };

    ${ 
        ({title, large, small}) => {
            switch(true) {
                case title:
                    return `font-size: 32px`;
                case large:
                    return `font-size: 20px`;
                case small:
                    return `font-size: 13px`;
            }
        }
    }

    ${
        ({ bold, heavy }) => {
            switch(true) {
                case bold:
                    return `font-weight: 600`;
                case heavy:
                    return `font-weight: 700`;
            }
        }
    }
`;

const MainRecipe = styled.View`
    padding: 0 24px;
    margin: 60px 0 18px 0;
`;

const Divider = styled.View`
    border-bottom-color: #fff;
    border-bottom-width: 2px;
    width: 150px;
    margin: 8px 0;
`;

const Button = styled.TouchableOpacity`
    margin: 0 0 48px 32px;
    background-color: rgba(255, 255, 255, 0.3);

    align-self: flex-start;
    padding: 6px 18px;
    border-radius: 100px;
`;

const RecipesContainer = styled.View`
    margin-top: -24px;
    padding: 32px;
    background-color: #fff;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`;

const Recipes = styled.View`
    margin-top: 16px;
`;

const Recipe = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;

const RecipeImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 8px;
`;

const RecipeInfo = styled.View`
    flex: 1;
    margin-left: 12px;
`;