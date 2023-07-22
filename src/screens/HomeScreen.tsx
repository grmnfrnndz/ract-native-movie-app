import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Dimensions, Text, View,FlatList, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';


const {width: windowWitdh} = Dimensions.get('window');

export const HomeScreen = () => {
    const {moviesCinema, moviesPopular, moviesTopRated, moviesUpcoming, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();
    const {setMainColors} = useContext(GradientContext);

    const getPosterColors = async (index: number) => {
        const movie = moviesCinema[index];
        const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);

        setMainColors({primary, secondary});

    }


    useEffect(() => {
        if (moviesCinema.length > 0) {
            getPosterColors(0);
        }
    }, [moviesCinema]);
    


    if (isLoading) {
        return <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
            
        }}><Text>
            <ActivityIndicator color={'grey'} size={200}/>
            </Text>
        </View>
    }

    // (!isLoading) && console.log(moviesCinema[0].title);

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{
                    marginTop: top + 20,
                }}>
                    
                    {/* <MoviePoster movie={moviesCinema[0]}/> */}

                    <View style={{height: 440}}>
                        <Carousel
                        data={moviesCinema}
                        renderItem={({item}: any) => <MoviePoster movie={item}/>}
                        sliderWidth={windowWitdh}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>

                    <HorizontalSlider title='Popular' movies={moviesPopular}/>                
                    <HorizontalSlider title='TopRated' movies={moviesTopRated}/>                
                    <HorizontalSlider title='Upcoming' movies={moviesUpcoming}/>                
                </View>
            </ScrollView>
        </GradientBackground>
    )
}
