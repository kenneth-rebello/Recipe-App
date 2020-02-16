import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { View, Platform } from 'react-native';
import { Colors } from '../utils/Colors';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} 
            color={Platform.OS === 'android' ? 'white':Colors.accent}
        />
    )
}

export default CustomHeaderButton