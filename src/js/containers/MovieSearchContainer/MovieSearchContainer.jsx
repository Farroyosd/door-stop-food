import React from 'react';
import { getMovieData } from './movieSearchActions';
import { Link } from 'react-router-dom';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleMovieSearch = this.handleMovieSearch.bind(this);

  }

  handleMovieSearch() {
    var movie = document.getElementById('movieSearch').value;
    const { dispatch } = this.props;



    dispatch(getMovieData(movie));

  }

  render() {
    const { movieData } = this.props

    if (movieData === "") {
      return (
        <div className="container">
          <div className="jumbotron">

            <h1 className="display-3 text-center">Movie Finder</h1>


          </div>
          <form>
            <div className="form-row">
              <div className="col">
                <div className="input-group">
                  <input type="text" id="movieSearch" className="form-control" placeholder="Let's find you a movie" aria-label="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-danger" type="button" onClick={this.handleMovieSearch}>Go!</button>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }
    if (movieData.error === true) {
      return (
        <div className="container">
          <div className="jumbotron">

            <h1 className="display-3 text-center">Movie Finder</h1>


          </div>
          <form>
            <div className="form-row">
              <div className="col">
                <div className="input-group">
                  <input type="text" id="movieSearch" className="form-control" placeholder="Let's find you a movie" aria-label="Search for..." />
                  <span className="input-group-btn">
                    <button className="btn btn-danger" type="button" onClick={this.handleMovieSearch}>Go!</button>
                  </span>
                </div>
                <div className="card error p-1">
                  <p className="errorP">Unable to match movie title name</p>
                  <p>Please check spelling of the movie and try again</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="jumbotron">

          <h1 className="display-3 text-center">Movie Finder</h1>


        </div>
        <form>
          <div className="form-row">
            <div className="col">
              <div className="input-group">
                <input type="text" id="movieSearch" className="form-control" placeholder="Let's find you a movie" aria-label="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="button" onClick={this.handleMovieSearch}>Go!</button>
                </span>
              </div>
            </div>
          </div>
        </form>
        <div className="movieSearchDiv">
        {
          movieData.map(movieData =>{
          
          return(
          <div className="movieSearchInline" key={movieData.imdbID}>
            <div className="movieSearchPosterDiv">
              <img className="poster" src={movieData.Poster} />
            </div>
            <div className="movieSearchInfoDiv">
              <p className="movieSearchTitle"><strong>{movieData.Title}</strong></p>
              <p className="movieSearchP">({movieData.Year})</p>
              <p className="movieSearchP">{movieData.Type}</p>
              <Link to={'/movie/' + movieData.imdbID}><button className="btn btn-primary">More Information</button></Link>
            </div>
          </div>
          )
        })
        }
        </div>
      </div>
    )
  }
}

export default MovieSearchContainer;