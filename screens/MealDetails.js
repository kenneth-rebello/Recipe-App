import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native'
import { RECIPES } from '../data/Dummy'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { Colors } from '../utils/Colors'

const MealDetails = ({navigation}) => {

    const id = navigation.getParam('recipeId')
    const recipe = RECIPES.find(recipe => recipe.id===id)

    const { duration, complexity, affordability, imageUrl } = recipe

    return (
        <ScrollView style={styles.screen}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <Text style={styles.detail}>{duration} m</Text>
                <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
                <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {recipe.ingredients.map(ingredient => <Text key={ingredient} style={styles.para}>
                {ingredient}
            </Text>)}
            <Text style={styles.title}>Steps</Text>
            {recipe.steps.map(step => <Text key={step} style={styles.para}>
                {step}
            </Text>)}
        </ScrollView>
    )
}

MealDetails.navigationOptions = navigationData => {
    const id = navigationData.navigation.getParam('recipeId')
    const recipe = RECIPES.find(recipe => recipe.id===id)
    return{
        title:recipe.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName="ios-star" onPress={()=>{console.log(recipe.title)}}/>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10
    },
    image:{
        height:180,
        width:'100%'
    },
    details:{
        flexDirection:'row',
        padding:5,
        justifyContent:'space-around',
        backgroundColor:Colors.primary
    },
    detail:{
        color: Colors.accent
    },
    title:{
        fontSize:20,
        fontFamily:'lemonada',
        margin:5,
        color:Colors.accent
    },
    para:{
        fontFamily:'merriweather',
        margin:5,
        padding:5,
        borderWidth:1,
        borderColor:Colors.pale
    }
})

export default MealDetails