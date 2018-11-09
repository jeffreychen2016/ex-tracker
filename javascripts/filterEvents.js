// when hit enter or click the "filter" button to trigger this function
const filterLocationCards = (e) => {
  $('.ex-card').show();
  $('.location-card').show();
  // 13 = enter, 1 = click
  // search cards when press "Enter" in input field or click on the "filter" button
  if ((e.which === 13 || e.which === 1) && (e.target.id === 'filter-cards' || e.target.id === 'filter-btn')) {
    // it is used to fix bug where when "enter" key is hit, the page gets reloaded
    e.preventDefault();

    const userInput = $('#filter-cards').val();
    $('.location-card').each((i,locationCard) => {
      const cardLocationTitle = $(locationCard).find('h3').html();
      const cardLocationAddress = $(locationCard).find('p').html();
      const cardLocationEx = $(locationCard).find('.exs-name').html();
      if (userInput === cardLocationTitle ||
        userInput === cardLocationAddress ||
        // if the card contains the ex name that being searched then also show the card
        cardLocationEx.indexOf(userInput) >= 0) {
        $(locationCard).show();
      } else {
        $(locationCard).hide();
      };
    });
    // search cards when click on the ex cards
  } else if (e.which === 1 && $(e.target).closest('.thumbnail').attr('class').split(' ')[0] === 'ex-card') {
    const exNameOnExCard = $(e.target).closest('.thumbnail').attr('id');
    // only keep the ex card that being clicked
    $('.ex-card').hide();
    $(`#${exNameOnExCard}`).show();
    // pre-append the back button
    $('#goBackBtn').remove();
    const goBackBtn = '<a href="#" class="btn btn-default find-location-btn reduce-padding" role="button" id="goBackBtn">Back</a>';
    $(goBackBtn).insertBefore(`#${exNameOnExCard}`);

    $('.location-card').each((i,locationCard) => {
      const exNameOnLocationCard = $(locationCard).find('.exs-name').html();
      if (exNameOnLocationCard.indexOf(exNameOnExCard) >= 0) {
        $(locationCard).show();
      } else {
        $(locationCard).hide();
      };
    });
  };
};

const unfilterLocationCards = () => {
  $('.location-card').show();
  $('.ex-card').show();
  $('#filter-cards').val('');
  $('#goBackBtn').remove();
};

const bindFilterEvents = () => {
  $('#filter-cards').on('keypress',filterLocationCards);
  $('#filter-btn').on('click',filterLocationCards);
  $('.ex-card').on('click',filterLocationCards);
  $('#unfilter-btn').on('click',unfilterLocationCards);
  $('body').on('click','#goBackBtn',unfilterLocationCards);
};

module.exports = {
  bindFilterEvents,
};
