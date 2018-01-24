'use strict';

/*inicio*/
$(document).ready(function () {
  navigate('html/Animes.html');
});


/*Partial Render */
function navigate(url) {
  $.get(url, function (data) {
    $('.navigate').appendTo('.main-content');
  });
}
