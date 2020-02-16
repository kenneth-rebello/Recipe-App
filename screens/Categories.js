import React from 'react'
import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/Dummy'
import Tile from '../components/Tile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton';


const Categories = ({navigation}) => {


    const renderGridItem = itemData => {
        return (
            <Tile onSelect={()=>{
                navigation.navigate({
                    routeName:'CategoryMeals',
                    params:{
                        categoryId: itemData.item.id
                    }
                }
                )}} 
                title={itemData.item.title} 
                color={itemData.item.color}
            />
        )
    }

    return (
        <FlatList  numColumns={2} data={CATEGORIES} 
            renderItem={renderGridItem}
        />
    )
}

Categories.navigationOptions = navData => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Menu" iconName="ios-menu" onPress={()=>{
              navData.navigation.toggleDrawer()
          }} />
        </HeaderButtons>
    }
}

export default Categories