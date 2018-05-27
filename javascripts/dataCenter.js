/* ----------- Using Promises ----------- */
const getExs = () => {
  return new Promise((resolve,reject) => {
    $.get('../db/ex.json')
      .done((exData) => {
        resolve(exData.exs);
      })
      .fail((err) => {
        reject('I got an error!',err);
      });
  });
};

const getLocations = () => {
  return new Promise((resolve,reject) => {
    $.get('../db/locations.json')
      .done((locationData) => {
        resolve(locationData.locations);
      })
      .fail((err) => {
        reject('I got an error!',err);
      });
  });
};

module.exports = {
  getExs,
  getLocations,
};
