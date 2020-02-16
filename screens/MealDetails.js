import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { Colors } from '../utils/Colors'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFav } from '../redux/actions/recipes.action'

const MealDetails = ({navigation}) => {

    const id = navigation.getParam('recipeId')
    const allRecipes = useSelector(state => state.recipe.recipes)
    const recipe = allRecipes.find(recipe => recipe.id===id)

    const favorites = useSelector(state => state.recipe.favorite)
    

    useEffect(()=>{
        const exists = favorites.filter(fav => fav.id===id)
        if(exists.length>0){
            navigation.setParams({fav: true})
        }else{
            navigation.setParams({fav: false})
        }
    },[favorites])
    
    const dispatch = useDispatch();
    const handleFavorite = useCallback(() => {
        dispatch(toggleFav(id));
    }, [dispatch, id])

    useEffect(()=>{
        navigation.setParams({favorite: handleFavorite})
    },[handleFavorite])

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

    const isFav = navigationData.navigation.getParam('fav')
    const favorite = navigationData.navigation.getParam('favorite')

    const icon = isFav ? "ios-star" : "ios-star-outline"
    return{
        title:navigationData.navigation.getParam('recipeTitle'),
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Favorite" iconName={icon} onPress={favorite}/>
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