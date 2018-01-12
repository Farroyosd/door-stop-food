import React from 'react';
import { Link } from 'react-router-dom';

class SearchResultsContainer extends React.Component {
    constructor(props) {
        super(props);

    }
// Am I saved????????????????
    handleMenu(event) {
        const { dispatch } = this.props;
        const id = event.target.id
    }

    render() {

        const { searchData } = this.props;
        console.log("searchData", searchData)

        return (
            <div className="searchResultsContainer">
                <div className="searchResultsHeader">
                </div>
                <div className="resultListings">
                    {!!searchData && searchData.map(restaurant => {
                        return <Link to=""><a href="#" onClick={this.runStuff}>
                            <div className="result">
                                <img src="/images/sushi.jpg" />
                                <h3>{restaurant.restaurant_name}</h3>
                                <p></p>
                            </div>
                        </a>
                        </Link>
                    })
                    }
                </div>
            </div>
        )
    }
}

export default SearchResultsContainer;