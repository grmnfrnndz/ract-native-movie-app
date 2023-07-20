import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/movieInterface';

interface Props {
    actor: Cast
}

export const CastItem = ({actor}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && <Image source={{uri}} style={{width: 50, height: 50, borderRadius: 10}}
            />
            }                

            <View style={styles.actorInfo}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
                <Text style={{fontSize: 16, color: 'black'}}>{actor.character}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        marginRight: 15,
        paddingRight: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 9,
        elevation: 7,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 3,
    }
});