const viewMapEvents = require('./viewMapEvents');

const apiKeys = () => {
  return new Promise((resolve,reject) => {
    $.ajax('../db/apiKeys.json')
      .done((apiKeys) => {
        resolve(apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((apiKeys) => {
      viewMapEvents.setKey(apiKeys);
      viewMapEvents.searchGoogleDB();
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  retrieveKeys,
};
