import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/HeaderButton'
import { Colors } from '../utils/Colors';
import { setFilters } from '../redux/actions/recipes.action';
import { useDispatch } from 'react-redux';


const Filters = ({navigation}) => {

    const [isGlutenFree, setIsGlutenFree] = useState(false)
    const [isLactoseFree, setIsLactoseFree] = useState(false)
    const [isVegetarian, setIsVegetarian] = useState(false)
    const [isVegan, setIsVegan] = useState(false)

    const [saved, save] = useState({
        isGlutenFree: false,
        isLactoseFree: false,
        isVegan: false,
        isVegetarian: false
    })

    const saveFilters = useCallback(() => {
        save({
            isGlutenFree: isGlutenFree,
            isLactoseFree: isLactoseFree ,
            isVegan: isVegan,
            isVegetarian: isVegetarian
        })
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setFilters(saved))
    },[saved])

    useEffect(()=>{
        navigation.setParams({save: saveFilters})
    },[saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>
            <View style={styles.container}>
                <Text style={styles.label}>Gluten Free</Text>
                <Switch 
                    value={isGlutenFree} 
                    onValueChange={value=>setIsGlutenFree(value)}
                    trackColor= {{true: Colors.accent}}
                    thumbColor= {isGlutenFree ? Colors.accent : Colors.light}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.label}>Lactose Free</Text>
                <Switch 
                    value={isLactoseFree} 
                    onValueChange={value=>setIsLactoseFree(value)}
                    trackColor= {{true: Colors.accent}}
                    thumbColor= {isLactoseFree ? Colors.accent : Colors.light}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.label}>Vegetarian</Text>
                <Switch 
                    value={isVegetarian} 
                    onValueChange={value=>setIsVegetarian(value)}
                    trackColor= {{true: Colors.accent}}
                    thumbColor= {isVegetarian ? Colors.accent : Colors.light}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.label}>Vegan</Text>
                <Switch 
                    value={isVegan} 
                    onValueChange={value =>setIsVegan(value)}
                    trackColor= {{true: Colors.accent}}
                    thumbColor= {isVegan ? Colors.accent : Colors.light}
                />
            </View>
        </View>
    )
}

Filters.navigationOptions = navData => {
    return {
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title="Menu" iconName="ios-menu" onPress={()=>{
              navData.navigation.toggleDrawer()
          }} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Save" iconName="ios-save" onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:18,
        textAlign:'center',
        fontFamily:'merriweather-bold',
        margin:10,
        color:Colors.accent
    },
    container:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:10
    },
    label:{
        fontFamily:'merriweather'
    }
})

export default Filters