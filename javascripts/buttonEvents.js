const findLocationCards = (e) => {
  $('.location-card').each((i,card) => {
    $(card).show();
    const btnClicked = e.target.innerHTML.replace(' ','-');
    $(card).not(`.${btnClicked}`).hide();
  });
};

const bindBtnEvents = () => {
  $('body').on('click','.find-location-btn',findLocationCards);
};

module.exports = {
  bindBtnEvents,
};
