import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native'
import { Colors } from '../utils/Colors'

const RecipeItem = ({recipe, onSelect}) => {

    const {title, duration, affordability, complexity, imageUrl } = recipe

    let TouchableItem = TouchableOpacity

    if(Platform.OS==='android' && Platform.Version >= 21){
        TouchableItem = TouchableNativeFeedback
    }

    return (
        <View style={styles.container}>
            <TouchableItem onPress={onSelect}>
                <View>
                    <View style={{...styles.row, ...styles.mealHeader}}>
                        <ImageBackground source={{uri:imageUrl}} style={styles.bgImage}>
                            <Text style={styles.title} >{title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.row, ...styles.mealDetails}}>
                        <Text style={styles.detail}>{duration} m</Text>
                        <Text style={styles.detail}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detail}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableItem>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:180,
        width:'100%',
        backgroundColor:Colors.accent,
        marginVertical:7,
        elevation:8,
        shadowColor:'grey',
        shadowOpacity:0.5,
        shadowOffset:{width:0,height:2},
        shadowRadius: 10,
        borderRadius:10,
        overflow:'hidden'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    row:{
        flexDirection:'row'
    },
    mealHeader:{
        height:'88%'
    },
    mealDetails:{
        paddingHorizontal: 20,
        justifyContent:'space-between',
        marginBottom:0,
        height:'12%'
    },
    detail:{
        fontFamily:'merriweather-italic'
    },
    title:{
        fontFamily:'lemonada',
        fontSize:18,
        color:'ghostwhite',
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:1,
        textAlign:'center'
    }
})

export default RecipeItem