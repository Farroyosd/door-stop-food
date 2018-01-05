import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieDataDetails} from './movieDetailActions'

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    dispatch(getMovieDataDetails(this.props.match.params.id));
  }



  render() {
    const { movieDataDetails } = this.props


    return (

      <div className="container">
        <div className="jumbotron">

          <h1 className="display-3 text-center">Movie Finder</h1>


        </div>

        <div className="row">
          <div className="col-sm-4">
            <img className="posterMovieDetails" src={movieDataDetails.poster} />
            <Link to='/'><button className="btn btn-success back">Go Back</button></Link>
          </div>
          <div className="col-sm-8">
            <div className="card movieDetailCol">
              <div className="card-header alert-primary">
                Movie Details
  </div>
              <div className="card-body">
                <h1>{movieDataDetails.title}</h1>
                <p>{movieDataDetails.year}</p>
                <div className="roundInfo">
                  <span>{movieDataDetails.rated}</span>
                  <span>{movieDataDetails.mins}</span>
                  <span>{movieDataDetails.genre}</span>
                </div>
                <div className="pDiv mt-3">
                <p>{movieDataDetails.plot}</p>
                <p>Starring: {movieDataDetails.actors}</p>
                <p>{movieDataDetails.awards}</p>
                <p><strong>Metascore:</strong>{movieDataDetails.metascore}/100</p>
                <p><strong>IMDB:</strong>{movieDataDetails.IMDBscore}/10</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;