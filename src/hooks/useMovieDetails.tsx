import React, { useEffect, useState } from 'react';
import { Cast, Movie, MovieCast, MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MovieDetails {
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[],
}



export const useMovieDetails = (movieId: number) => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    })

    const getMovieDetails = async () => {

        const movieFullPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<MovieCast>(`/${movieId}/credits`);

        const [movieFullResponse, castResponse] = await Promise.all([movieFullPromise, castPromise]);

        setMovieDetails({
            isLoading: false,
            movieFull: movieFullResponse.data,
            cast: castResponse.data.cast,
        })
    }

    useEffect(() => {
        getMovieDetails();
    }, []);
  
    return {
        ...movieDetails
    }
}
