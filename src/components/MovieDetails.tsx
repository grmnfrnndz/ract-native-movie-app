import React from 'react';
import { Text, View } from 'react-native';
import { Cast, MovieFull } from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetails = ({movieFull, cast}: Props) => {

    return (
        <>
            {/* details */}
            <View style={{marginHorizontal: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <Icon name='star-outline' color='grey' size={16}/>
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{marginLeft: 5}}>- {movieFull.genres.map(g => g.name).join(',')}</Text>
                </View>

                <Text style={{fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>
                    History
                </Text>
                <Text style={{fontSize: 15, marginTop: 5}}>
                    {movieFull.overview}
                </Text>
                <Text style={{fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>
                    Budget
                </Text>
                <Text style={{fontSize: 15, marginTop: 5}}>
                    {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
                </Text>
            </View>

            {/* casting */}
            <View style={{marginTop: 10, marginHorizontal: 20, marginBottom: 100}}>
                <Text style={{fontSize: 20, marginTop: 15, fontWeight: 'bold'}}>
                    Actors
                </Text>


                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CastItem actor={item}/>}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{marginTop: 10, height: 70}}
                
                />
                {/* <CastItem actor={cast[0]}/> */}
            </View>

            


        </>
    )
}
