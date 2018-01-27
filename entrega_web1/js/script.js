'use strict';
/*cargar home en index*/
$(document).ready(function () {
    navigate('html/home.html');
});
function navigate(url) {
    $.get(url, function (data) {
        $('.main-content').html(data);
        if (!list.length) {
                    initRanking();
                } else {
                    renderList();
                }
    });
}

/*partial render*/
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


/*comentarios*/
