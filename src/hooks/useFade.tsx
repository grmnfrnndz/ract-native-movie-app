import React, { useRef } from 'react';
import { Animated } from 'react-native';

export const useFade = () => {

    const duration = 3000;
    const opacity = useRef(new Animated.Value(0.1)).current;
    
    const fadeIn = (callback?: Function) => {
        Animated.timing(
            opacity, 
            {
                toValue: 1,
                duration,
                useNativeDriver: true
            }
        ).start(() => callback ? callback() : null);
    }

    const fadeOut = () => {
        Animated.timing(
            opacity, 
            {
                toValue: 0,
                duration,
                useNativeDriver: true
            }
        ).start();
    }


    return {
        opacity,
        fadeIn,
        fadeOut,
    }
}
