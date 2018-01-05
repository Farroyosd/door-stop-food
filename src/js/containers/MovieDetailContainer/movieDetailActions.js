import axios from 'axios';

export function getMovieDataDetails(movie) {

    return {
        type: 'GET_MOVIE_DATA_DETAILS',
        payload:
        axios
        .get('https://www.omdbapi.com/?i=' + movie + '&apikey=8730e0e')
        .then(response =>{
            
            var movieDataDetails = {
                title: response.data.Title,
                year: response.data.Year,
                rated: response.data.Rated,
                mins:  response.data.Runtime,
                genre: response.data.Genre,
                actors: response.data.Actors,
                plot: response.data.Plot,
                awards: response.data.Awards,
                poster: response.data.Poster,
                metascore: response.data.Metascore,
                IMDBscore: response.data.imdbRating,
                IMDBid: '/movie/'+ response.data.imdbID,
            }
            return movieDataDetails;
        })
        .catch(error => {
                const movieDataDetails = {
                     error: true
                }

                return movieDataDetails;
            })

    }
}