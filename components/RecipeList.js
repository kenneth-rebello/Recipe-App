import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import RecipeItem from '../components/RecipeItem';

const RecipeList = ({listData, navigation}) => {

    const renderEachRecipe = itemData => {

        return <RecipeItem 
            onSelect={()=>{
                navigation.navigate({
                    routeName:'MealDetails',
                    params:{
                        recipeId: itemData.item.id,
                        recipeTitle: itemData.item.title
                    }
                })
            }}
            recipe={itemData.item}
        />
    }

    return (
        <View style={styles.screen}>
            <FlatList data={listData} renderItem={renderEachRecipe} style={styles.list}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingVertical:10,
        paddingHorizontal:5
    },
    list:{
        width:'100%'
    }
})

export default RecipeList