import React from 'react';
import { Link } from 'react-router-dom';

class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="menuContainer">
                <div className="menuHeader">
                </div>
                <div className="menuBody">
                    <h1>La Taquero Menu</h1>
                    <div>
                        <div className="categoryHeader">
                            <h2 className="menuCategory">Appetizers</h2>
                        </div>
                        <div className="menuItems">
                            <div className="item">
                                <h5 className="foodName">Green Taco</h5>
                                <h5 className="foodPrice">4.75</h5>
                                <p className="foodDescription">Slices of avocado and cucumber wrapped in a lettuce leaf.</p>
                                <div className="middle">
                                    <div className="orderText">
                                    <h4>Add To Cart</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <h5 className="foodName">Stevie Salad </h5>
                                <h5 className="foodPrice">5.75</h5>
                                <p className="foodDescription">Cabbage salad with salsa fresca and jack cheese.</p>
                            </div>
                            <div className="item">
                                <h5 className="foodName">The Original Mexican Pizza</h5>
                                <h5 className="foodPrice">7.25</h5>
                                <p className="foodDescription">Bell peppers, tomatoes, onions, mushrooms, Pokez salsa, jack and cheddar cheese.</p>
                            </div>
                            <div className="item">
                                <h5 className="foodName">Tom’s Deep Plate</h5>
                                <h5 className="foodPrice">6.00</h5>
                                <p className="foodDescription">Beans, rice, sour cream, guacamole, salsa fresca, and corn or flour tortillas.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="categoryHeader">
                            <h2 className="menuCategory">Entrees</h2>
                        </div>
                        <div className="menuItems">
                            <div className="item">
                                <h5 className="foodName">Chicken Ranchero</h5>
                                <h5 className="foodPrice">10.25</h5>
                                <p className="foodDescription">Tender chicken, mushrooms, onions,  bell peppers and tomatoes sauteed to perfection.</p>
                            </div>
                            <div className="item">
                                <h5 className="foodName">Steak Ranchero</h5>
                                <h5 className="foodPrice">10.25</h5>
                                <p className="foodDescription">Tender chunks of beef, mushrooms, onions, bell peppers and tomatoes sauteed to perfection.</p>
                            </div>
                            <div className="item">
                                <h5 className="foodName">Fajitas</h5>
                                <h5 className="foodPrice">1.25</h5>
                                <p className="foodDescription">Sauteed strips of marinated chicken, steak, tofu or shrimp with tomatoes, bell peppers,mushrooms and onions. Garnished with guacamole, sour cream, salsa fresca and Limes. Comes with rice, beans and your choice of corn or flour tortillas.</p>
                            </div>
                            <div className="item">
                                <h5 className="foodName">Enchiladas Suiza</h5>
                                <h5 className="foodPrice">9.50</h5>
                                <p className="foodDescription">Two chicken enchiladas topped with a special green sauce, red chilies, cheddar cheese, and onions crowned with sour cream. Served with rice and beans.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="categoryHeader">
                            <h2 className="menuCategory">Breakfast</h2>

                        </div>
                        <div className="menuItems">
                            <div className="item">
                                <h5 className="foodName">Machaca</h5>
                                <h5 className="foodPrice">7.25</h5>
                                <p className="foodDescription">Eggs, sauteed onions, bell peppers and tomatoes with your choice of shredded beef, chicken or tofu.</p>
                            </div>
                            <div className="item">
                                <h5 className="foodName">Carne Asada Eggs</h5>
                                <h5 className="foodPrice">8.00</h5>
                                <p className="foodDescription">Tender chunks of beef, mushrooms, onions, bell peppers and tomatoes sauteed to perfection.</p>
                            </div>
                            <div className="item">
                                <h5 className="foodName">Huevos Rancheros </h5>
                                <h5 className="foodPrice">6.25</h5>
                                <p className="foodDescription">Soft corn tortilla covered with beans and two fried eggs or tofu, smothered in a ranchero sauce, melted cheese, sour cream.</p>
                            </div>
                            <div className="item">
                                <h5 className="foodName">Chillaquiles </h5>
                                <h5 className="foodPrice">7.00</h5>
                                <p className="foodDescription">Corn or Flour Tortillas sauteed in Pokez own hot sauce and cheese.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuContainer;