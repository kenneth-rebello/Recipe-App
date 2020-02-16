import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const Tile = ({title, onSelect, color}) => {

    let TouchableTile = TouchableOpacity

    if(Platform.OS==='android' && Platform.Version >= 21){
        TouchableTile = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
                <TouchableTile onPress={onSelect}>
                    <View style={{...styles.touchTile, backgroundColor:color}}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </TouchableTile>
            </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:10,
        borderWidth:2,
        borderColor:'goldenrod',
        height:120,
        borderRadius:10,
        overflow:'hidden',
        shadowColor:'grey',
        shadowOpacity:0.5,
        shadowOffset:{width:0,height:2},
        shadowRadius: 10,
        elevation:8
    },
    touchTile:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        padding:8,
        fontSize:13,
        fontFamily:'merriweather-bold'
    }
})

export default Tile;