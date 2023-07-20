import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie: Movie,
    height?: number
    width?: number
    
}


export const MoviePoster = ({movie, height=420, width=300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('detailScreen', movie) }
            activeOpacity={0.9}
            style={{
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            
            }}
        >
            <View style={styles.imageContainer}>
                <Image source={{uri}} style={styles.image}/>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 100,
        elevation: 16,
    },
    image: {
        flex: 1,
        borderRadius: 20,
        
    }
});