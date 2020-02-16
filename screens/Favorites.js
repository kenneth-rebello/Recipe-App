import React from 'react'
import RecipeList from '../components/RecipeList';
import { RECIPES } from '../data/Dummy';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'

const Favorites = ({navigation}) => {

    const favRecipes = RECIPES.filter(recipe => recipe.id==='m1' || recipe.id==='m2')

    return (
        <RecipeList listData={favRecipes} navigation={navigation}/>
    )
}

Favorites.navigationOptions = navData => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Menu" iconName="ios-menu" onPress={()=>{
              navData.navigation.toggleDrawer()
          }} />
        </HeaderButtons>
    }
}

export default Favorites;