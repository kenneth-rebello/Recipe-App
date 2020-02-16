import React from 'react'
import RecipeList from '../components/RecipeList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { useSelector } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../utils/Colors';

const Favorites = ({navigation}) => {

    const favRecipes = useSelector(state => state.recipe.favorite)

    return (
        !favRecipes || favRecipes.length<1 ? <View style={styles.screen}><Text style={styles.msg}>
            No Favorites Yet
        </Text></View> :
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

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.light
    },
    msg:{
        fontFamily:'merriweather-italic',
        fontSize:20,
        color: Colors.primary
    }
})

export default Favorites;