'use strict';

/*inicio*/
$(document).ready(function () {
  navigate('html/home.html');
});


/*Partial Render */
function navigate(url) {
    $.get(url, function (data) {
        $('.main-content').html(data);
        
    });
}
