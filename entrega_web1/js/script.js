'use strict';


/*inicio*/
$(document).ready(function () {
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
});
