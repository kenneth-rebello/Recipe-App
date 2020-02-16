import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native';
import { Colors } from '../utils/Colors';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetails from '../screens/MealDetails';
import Favorites from '../screens/Favorites';
import Filters from '../screens/Filters';


const defaultStackConfig = {
  headerStyle: {
    backgroundColor: Platform.OS=="ios" ? 'white' : Colors.primary 
  },
  headerTintColor: Platform.OS=="ios" ? Colors.primary : Colors.accent,
  headerTitleAlign:'center',
  headerTitleStyle:{
    fontFamily:'lemonada',
    fontSize:20
  },
  headerBackTitleStyle:{
    fontFamily:'merriweather',
    fontSize:15
  }
}


const MealsStack = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions:{
        title:'Bon Apetit'
      }
    },
    CategoryMeals: {
      screen: CategoryMeals,
      navigationOptions:{
      }
    },
    MealDetails: {
      screen: MealDetails,
      navigationOptions:{
      }
    }
  },
  {
    defaultNavigationOptions: defaultStackConfig
  }
);

const FavoriteStack = createStackNavigator(
  {
    Favorites: {
      screen: Favorites,
      navigationOptions:{
        title:'Bon Apetit'
      }
    },
    MealDetails: {
      screen: MealDetails,
      navigationOptions:{

      }
    }
  },
  {
    defaultNavigationOptions: defaultStackConfig
  }
);

const tabConfig = {
  Recipes: {
    screen: MealsStack,
    navigationOptions:{
      tabBarIcon: (info) => {
        return <Ionicons name="ios-restaurant" size={25} color={info.tintColor}/>
      }
    }
  },
  Favorites:{
    screen: FavoriteStack,
    navigationOptions:{
      tabBarIcon: (info) => {
        return <Ionicons name="ios-star" size={25} color={info.tintColor}/>
      } 
    }
  }
}



const TabNavigator = Platform.OS==='android' ? 
  createMaterialBottomTabNavigator(tabConfig,
    {
      activeColor: Colors.accent,
      shifting:true,
      barStyle:{
        backgroundColor: Colors.secondary
      }
    }
  )
: 
  createBottomTabNavigator(tabConfig,
    {
      tabBarOptions:{
        activeTintColor:Colors.accent,
      }
    }
  )

const FilterNavigator = createStackNavigator({
    Filters: Filters
  },
  {
    defaultNavigationOptions: defaultStackConfig
  }
)

const MainNavigator = createDrawerNavigator({
  Recipes:{
    screen: TabNavigator
  },
  Filters:{
    screen: FilterNavigator
  }
},
{
  contentOptions:{
    activeTintColor: Colors.accent,
    labelStyle:{
      fontFamily:'merriweather-bold'
    }
  }
})

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer