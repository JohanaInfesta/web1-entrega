'use strict';


/*inicio*/
/*  $(document).ready(function () {
  $(document).on('click', 'a.navigate',function(e){
    e.preventDefault();

    $.ajax({
      url: $(this).attr('href'),
      type: 'GET',
      success: function(result){
        $(".main-content").html(result);
      }
    })
  })
});  */
$(document).ready(function () {
  $('.navbar-link').on('click', function(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    var $navigate = $('.main-content'),
    url = $(this).data('url');

    $.get(url, function(data) {
      $navigate.replaceWith(data);
    });
  })
});
