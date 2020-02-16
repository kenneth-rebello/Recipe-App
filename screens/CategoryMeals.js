import React from 'react';
import { CATEGORIES } from '../data/Dummy';
import { useSelector } from 'react-redux';
import RecipeList from '../components/RecipeList';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../utils/Colors';

const CategoryMeals = ({navigation}) => {

    const id = navigation.getParam('categoryId');  

    const filteredRecipes = useSelector(state => state.recipe.filtered)
    const recipes = filteredRecipes.filter(recipe => recipe.categoryId.includes(id))

    return (
        !recipes || recipes.length<1 ? <View style={styles.content}>
            <Text style={styles.msg}>Sorry, there are no recipes to display</Text>
        </View> : <RecipeList listData={recipes} navigation={navigation} />
    )
}

CategoryMeals.navigationOptions = navigationData => {
    const Cid = navigationData.navigation.getParam('categoryId')
    
    const selected = CATEGORIES.find(cat => cat.id === Cid)

    return{
        title: selected.title
    } 
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    msg:{
        fontFamily:'lemonada',
        fontSize:18,
        color: Colors.primary,
        textAlign:'center'
    }
})

export default CategoryMeals