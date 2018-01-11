import React from 'react';
import { Link } from 'react-router-dom';

class FooterContainer extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <footer>
        <p>&copy;2018 Door Stop Food | San Diego, CA | F.A | K.N | C.K  </p>
      </footer>
    );
  }
}

export default FooterContainer;