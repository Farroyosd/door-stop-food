import React from 'react';
import NavBarContainer from '../NavBarContainer';
import { Link } from 'react-router-dom';

class SearchResultsContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    handleMenu(event) {
        const { dispatch } = this.props;
        const id = event.target.id;
    }

    render() {

        const { searchData } = this.props;

        return (
            <div className="searchResultsContainer">
                <div className="searchResultsHeader">
                    <NavBarContainer />
                </div>
                <div className="resultListings">
                    {!!searchData && searchData.map(restaurant => {
                        return <Link to={`${restaurant.id}`} onClick={this.runStuff}>
                            <div className="result">
                            {/* {console.log("shiza",restaurant.restaurant)} */}
                                <img src={restaurant.restaurant} />
                                <h3>{restaurant.restaurant_name}</h3>
                                <p>{restaurant.food_type}</p>
                            </div>
                        </Link>
                    })
                    }
                </div>
            </div>
        )
    }
}

export default SearchResultsContainer;