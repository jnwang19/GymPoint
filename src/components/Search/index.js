import React, { Component } from 'react';

import Script from 'react-load-script';

const SearchPage = () => (
    <Search />
);

class Search extends Component {
  constructor(props) {
    super(props);
    let url = "https://maps.googleapis.com/maps/api/js?key="
    + process.env.REACT_APP_GOOGLE_API_KEY
    + "&libraries=places";
    this.state = {
      url: url
    };
  }

  /*global google*/
  handleScriptLoad = () => {
    let pos;
    let self = this;
    this.infoWindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
      var location_timeout = setTimeout("handleLocationError(false)", 10000);

      navigator.geolocation.getCurrentPosition(function(position) {
        clearTimeout(location_timeout);
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        self.map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 15
        });
        // self.getNearbyPlaces(pos);

        var options = {

        };

        self.autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('searchbar'),
          options,
        );

        self.autocomplete.addListener('place_changed', self.handlePlaceSelect);
    }, function(error) {
      clearTimeout(location_timeout);
      self.handleLocationError(true);
    });
    } else {
      this.handleLocationError(false);
    }
  };

  handleLocationError = browserHasGeolocation => {
    let pos = {lat: -33.856, lng: 151.215};

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 15
    });

    this.infoWindow.setPosition(pos);
    this.infoWindow.setContent(browserHasGeolocation ?
    'Geolocation permissions denied. Using default location.' :
    'Error: Your browser doesn\'t support geolocation.');
    this.infoWindow.open(this.map);
  }

  getNearbyPlaces = position => {
    let request = {
      location: position,
      radius: 50000,
      //rankBy: google.maps.places.RankBy.DISTANCE,
      type: 'gym'
    };

    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch(request, this.nearbyCallback);
  }

  nearbyCallback = (results, status, pagination) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
      if (pagination.hasNextPage) {
        pagination.nextPage();
      }
    } else {
      console.log("error");
    }
 }

 handlePlaceSelect = () => {
   console.log(this.autocomplete.getPlace());
 }

  render() {
    return (
      <div>
        <Script url={this.state.url} onLoad={this.handleScriptLoad} />
        <input type="text" id="searchbar"></input>
        <div id="map"></div>
      </div>
    );
  }
}

export default SearchPage;

export { Search };
