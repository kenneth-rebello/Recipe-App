import React from 'react'
import { CATEGORIES, RECIPES } from '../data/Dummy'
import RecipeList from '../components/RecipeList'

const CategoryMeals = ({navigation}) => {

    const id = navigation.getParam('categoryId')    
    const recipes = RECIPES.filter(recipe => recipe.categoryId.includes(id))

    return (
        <RecipeList listData={recipes} navigation={navigation} />
    )
}

CategoryMeals.navigationOptions = navigationData => {
    const Cid = navigationData.navigation.getParam('categoryId')
    
    const selected = CATEGORIES.find(cat => cat.id === Cid)

    return{
        title: selected.title
    } 
}


export default CategoryMeals