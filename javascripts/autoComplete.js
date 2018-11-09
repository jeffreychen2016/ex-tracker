const { easyAutocomplete, } = require('../lib/node_modules/easy-autocomplete');

const autoComplete = (locations,exs) => {
  // combine all locations titles and addresses to an array
  // new array will be used for auto-complete function
  const allLocationTitles = [];
  const allLocationAddresses = [];
  const allLocationExs = [];
  let allSearchOptions = [];

  $(locations).each((i,location) => {
    allLocationTitles.push(location.name);
    allLocationAddresses.push(location.address);
  });

  $(exs).each((i,ex) => {
    allLocationExs.push(ex.name);
  });

  allSearchOptions = $.unique($.merge($.merge(allLocationTitles,allLocationAddresses),allLocationExs));

  const options = {
    data: allSearchOptions,

    list: {
      match: {
        enabled: true,
      },
    },
  };

  $('#filter-cards').easyAutocomplete(options);
};

module.exports = autoComplete;
