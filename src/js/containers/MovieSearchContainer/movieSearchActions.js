import axios from 'axios';

export function getMovieData(movie) {



    return {
        type: 'GET_MOVIE_DATA',
        payload:
        axios
            .get('https://www.omdbapi.com/?s=' + movie + '&apikey=8730e0e')
            .then(response => {
                var movieSearch = response.data.Search;
                

                return movieSearch;
            })
            .catch(error => {
                const movieSearch = {
                    error: true
                }

                return movieSearch;
            })

    }
}
