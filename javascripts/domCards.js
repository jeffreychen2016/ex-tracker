const dataCenter = require('./dataCenter');
const viewMapEvents = require('./viewMapEvents');
const autoComplete = require('./autoComplete');
const filterEvents = require('./filterEvents');
const buttonEvents = require('./buttonEvents');

const domEx = (exs) => {
  let domString = '';
  exs.forEach((ex) => {
    domString += `<div id='${ex.name}' class='ex-card thumbnail text-center'>`;
    domString +=  `<img src='${ex.url}'>`;
    domString +=   `<label>Name:${ex.name}</label>`;
    domString +=   `<label>Age:${ex.age}</label>`;
    domString +=   `<label>Flaws:${ex.flaws}</label>`;
    domString += `</div>`;
  });
  return domString;
};

const domLocations = (locations,exs) => {
  let domString = '';
  domString +=  `<div class="row text-center">`;
  locations.forEach((location) => {
    const locationTime = location.time.replace(' ','-');
    const exsName = location.exsName.join();
    domString += `<div class='location-card ${locationTime}'>`;
    domString +=  `<div class="col-sm-6 col-md-4">`;
    domString +=   `<div class="thumbnail" id="${location.id}">`;
    domString +=    `<div class="caption">`;
    domString +=     `<h3 class='no-margin-top location-card-title'>${location.name}</h3>`;
    domString +=    `</div>`;
    domString +=    `<div class='image-swap-wrapper'>`;
    domString +=      `<div class='view-map-slide'>`;
    domString +=        `<button type='button' class="btn view-map-btn" data-toggle="modal" data-target="#myModal">View Map</button>`;
    domString +=      `</div>`;
    domString +=      `<img class='location-image' src="${location.url}" alt="...">`;
    domString +=    `</div>`;
    domString +=    `<p>${location.address}</p>`;
    domString +=    `<h4 class='${locationTime}'>${location.time}</h4>`;
    domString +=    `<h4 class='${locationTime} exs-name'>${exsName}</h4>`;
    domString +=   `</div>`;
    domString +=  `</div>`;
    domString += `</div>`;
  });

  domString +=  `</div>`;
  return domString;
};

const returnLocationWithExNames = (exsArray,locationsArray) => {
  let exsTogether = [];
  locationsArray.forEach((location) => {
    exsArray.forEach((ex) => {
      for (let i = 0; i < ex.locationId.length; i++) {
        if (ex.locationId[i] === location.id) {
          exsTogether.push(ex.name);
        };
      };
    });
    location.exsName = exsTogether;
    exsTogether = [];
  });
  return locationsArray;
};

const printAllCards = () => {
  let exsArray = [];
  let locationsArray = [];
  dataCenter.getExs().then((exs) => {
    exsArray = exs;
    // excute a series of functions after ex data get returned
    $('#ex-holder').html(domEx(exs));
    buttonEvents.bindBtnEvents();
    return dataCenter.getLocations();
  }).then((locations) => {
    locationsArray = returnLocationWithExNames(exsArray,locations);
    // excute a series of functions after locations data get returned
    $('#locations-holder').append(domLocations(locationsArray,exsArray));
    autoComplete(locationsArray,exsArray);
    filterEvents.bindFilterEvents();
    // viewMapEvents.getLatAndLng(e);
    viewMapEvents.bindViewMapEvents();
    // clickExEvent.bindClickExEvent();
  });
};

module.exports = {
  domEx,
  domLocations,
  printAllCards,
};
