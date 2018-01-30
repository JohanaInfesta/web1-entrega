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
        if () {

        }
      }
    })
  })
});



/*comentarios
function renderList(){
  $('.contenido-comentario contenido-comentario').html('<div class="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div>');
  getRankingList().then(function(list){

    $('.contenido-comentario contenido-comentario').html('');

    list.forEach(function(foro){
      renderRanking(foro);
    });
  });
}*/
  /*
  function getRankingList() {
    return new Promise(function (resolve, reject) {
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
    });
}
*/

/*
function iniciarForo(){
  let list =[{
    nombre : 'Legend',
    comentario : 'Todo parece ser como lo es la empresa animadora de la serie Code Geass filtró un vídeo avance de la supuesta tercera temporada de esta famosa serie, el cual ha causado mucho revuelo puesto que prestigiosas paginas parecen avalar esta noticia, el titulo por la cual pretende regresar esta icónica serie es (Lelouch of the Resurrection) aun por lo pronto nada esta oficializado dado que la empresa Sunrise no ha anunciado el regreso de la tercera temporada aunque tampoco lo ha negado, entre las tantas posibilidades existe la probabilidad de que este sea un vídeo recopila-torio como la mayoría de las películas relacionadas a esta serie.',
  },{
    nombre :'Yuna',
    comentario : 'Con la publicación de tercer tomo del manga Vigilante (Boku No Hero Academia ILLEGALS) la portada del tomo a hizo mención sobre la fecha de lanzamiento de la tercera temporada del anime Boku No Hero Academia, la fecha prevista para el día de lanzamiento es el 7 de abril.',
  },{
    nombre :'Yuna',
    comentario : 'Con la publicación de tercer tomo del manga Vigilante (Boku No Hero Academia ILLEGALS) la portada del tomo a hizo mención sobre la fecha de lanzamiento de la tercera temporada del anime Boku No Hero Academia, la fecha prevista para el día de lanzamiento es el 7 de abril.',
  }];

}
*/
/*cleanList().then(function (results) {
let asdf = [];

for (let i = 0; i < list.length; i++) {
asdf.push(createRanking(list[i]));
}

callback.all(asdf).then(renderList);
});
*/
