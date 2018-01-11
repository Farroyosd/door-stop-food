import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="searchResultsContainer">
                <div className="searchResultsHeader">
                </div>
                <div className="resultListings">
                    <div className="result">
                    <img src="/images/sushi.jpg" />
                     <h3>Sushi Deli</h3>
                    </div>
                    <div className="result">
                    <img src="/images/taco.jpg" />
                    <h3>La Taquero</h3>
                    </div>
                    <div className="result">
                    <h3>Grab n' Go</h3>
                    </div>
                    <div className="result">
                    <h3>Chin's Sketchwan</h3>
                    </div>
                    <div className="result">
                    <h3>Poke Bowl</h3>
                    </div>
                    <div className="result">
                    <h3>Great Wall</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResultsContainer;