const dataCenter = require('./dataCenter');

let googleMapKey = '';

const setKey = (key) => {
  googleMapKey = key;
};

// build script tab to call the API
// the initMap gets passed is a function not a value
// so have to dynamically generate the script tag
const searchGoogleDB = () => {
  const head = $('#google-map-script');
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapKey.apiKeys.googleDB.apiKey}&callback=initMap`;
  head.append(script);
};

const getLatAndLng = (e) => {
  // const locationData = dataCenter.getLocationData();
  return new Promise((resolve,reject) => {
    const coordinate = {};
    dataCenter.getLocations().then((locations) => {
      const locationData = locations;
      // this condition statement is used to surpress the error
      // when page load, the API was called while the value of locationData has been set
      if (locationData && e) {
        locationData.forEach((location) => {
          if ($(e.target).closest('.thumbnail').attr('id') * 1 === location.id) {
            coordinate.lng = location.lng;
            coordinate.lat = location.lat;
          };
        });
        resolve(coordinate);
      };
    });
  });
};

// added Window. to make initMap function visible from the global scope
window.initMap = (e) => {
  getLatAndLng(e).then((coordinate) => {
    // let coordinate = '';
    let latitude = '';
    let langitude = '';
    // this condition statement is used to surpress the error
    // when page load, the API was called while "e" still have no value
    if (e) {
      latitude = coordinate.lat;
      langitude = coordinate.lng;
    };

    if (latitude) {
      // add map
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: langitude,},
        zoom: 15,
      });

      // add marker
      const marker = new google.maps.Marker({
        position: {lat: latitude, lng: langitude,},
        map: map,
        animation: google.maps.Animation.DROP,
      });

      // add window
      const infoWindow = new google.maps.InfoWindow({
        content: '<p>Your EX might be here...so watch out!!!</p>',
      });

      marker.addListener('click', () => {
        infoWindow.open(map,marker);
      });
    };
  });
};

const bindViewMapEvents = () => {
  $('.view-map-btn').on('click', initMap);
};

module.exports = {
  getLatAndLng,
  bindViewMapEvents,
  setKey,
  searchGoogleDB,
};
