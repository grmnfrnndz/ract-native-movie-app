import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';



interface Props extends StackScreenProps<RootStackParams, 'detailScreen'> {}


const {height: windowHeight} = Dimensions.get('window');


export const DetailsScreen = ({route, navigation}: Props) => {
    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image source={{uri}} style={styles.posterImage}/>
                </View>
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>

            </View>
            {/* <Icon name="star-outline" size={30} color="#900" /> */}

            {
                isLoading
                ? <ActivityIndicator color={'grey'} size={35} style={{marginTop: 20}}/>
                : <MovieDetails movieFull={movieFull!} cast={cast}/>
            }

            {/* button close */}
            <TouchableOpacity
                onPress={() => navigation.pop()}
                style={styles.backButton}
            >
                <Icon name='arrow-back-outline' size={60} color='orange' /> 
            </TouchableOpacity>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({

    posterImage: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: windowHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 100,
        elevation: 16,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    title: {
        fontSize: 16,
        opacity: 0.8,
    },
    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 10,
    }
});