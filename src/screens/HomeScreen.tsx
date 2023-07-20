import React from 'react';
import { ActivityIndicator, Dimensions, Text, View,FlatList, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWitdh} = Dimensions.get('window');

export const HomeScreen = () => {
    const {moviesCinema, moviesPopular, moviesTopRated, moviesUpcoming, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

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
                    />
                </View>

                <HorizontalSlider title='Popular' movies={moviesPopular}/>                
                <HorizontalSlider title='TopRated' movies={moviesTopRated}/>                
                <HorizontalSlider title='Upcoming' movies={moviesUpcoming}/>                
            </View>
        </ScrollView>
    )
}
