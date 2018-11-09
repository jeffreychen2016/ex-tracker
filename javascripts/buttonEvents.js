const findLocationCards = (e) => {
  $('.location-card').each((i,card) => {
    $(card).show();
    const btnClicked = e.target.innerHTML.replace(' ','-');
    $(card).not(`.${btnClicked}`).hide();
    $('.ex-card').css('display','block');
    $('#goBackBtn').remove();
  });
};

const bindBtnEvents = () => {
  $('body').on('click','.find-location-btn',findLocationCards);
};

module.exports = {
  bindBtnEvents,
};
