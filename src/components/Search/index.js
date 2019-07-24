import React, { Component } from 'react';

import { withAuthorization } from '../Session';
import Script from 'react-load-script';

const SearchPage = () => (
    <Search />
);

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://gympoint-osrm.herokuapp.com/table/v1/car/" +
    "-118.329763,34.089558;-118.274532,34.126846?" +
    "sources=0&destinations=1&annotations=distance")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          console.log(result["distances"]);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(SearchPage);

export { Search };
