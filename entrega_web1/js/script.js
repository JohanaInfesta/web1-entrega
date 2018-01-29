'use strict'
/*cargar home en index*/
$(document).ready(function () {
  navigate('html/home.html');
});
function navigate(url) {
  $.get(url, function (data) {
    $('.main-content').html(data);
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
        $(".main-content ").html(result);
      }
    })
  })
});


/*comentarios
function renderList(){
  $('.contenido-comentario contenido-comentario').html('<div class="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div>');
  getRankingList().then(function(list){

    $('.contenido-comentario contenido-comentario').html('');

    list.sort(function(a, b){
      return a.position - b.position;
    });

    list.forEach(function(ranking){
      renderRanking(ranking);
    });
  });
}

function getRankingList(callback){
  let list = [];
  $.get(servicioRest + 'group/' + groupId, function (data) {
    data.information.forEach(function (i) {

      let thing = {};

      if (typeof i['thing'] === 'object')
      thing = i['thing'];

      thing.id = i['_id'];
      list.push(thing);
    });
    resolve(list);
  });
}

function iniciarForo(){
  let list =[{
    nombre : 'asd',
    comentario : 'asdfghj qwertyu zxcvbn',
  },{
    nombre :'qwerty',
    comentario : 'werty asdf pojvzxcv',
  }];

  cleanList().then(function (results) {
    let asdf = [];

    for (let i = 0; i < list.length; i++) {
      asdf.push(createRanking(list[i]));
    }

    callback.all(asdf).then(renderList);
  });
}
*/
