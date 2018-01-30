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
        leerForo();
        $(".main-content").html(result);

      }
    })
  })
});

/*
function iniciarForo(){


}*/
let groupId = 135;
let servicioRest = 'https://web-unicen.herokuapp.com/api/thing/';

function crearForo(Foro) {

  let info = {
    group: groupId,
    thing: ranking,
  };
  $.ajax({
    method: "POST",
    dataType: 'JSON',
    data: JSON.stringify(info),
    contentType: "application/json; charset=utf-8",
    url: servicioRest,
    success: function (resultData) {
      leerForo();
    },
    error: function (jqxml, status, errorThrown) {

    }
  });
}

function leerForo (){

  let list =[{
    nombre : 'Legend',
    comentario : 'Todo parece ser como lo es la empresa animadora de la serie Code Geass filtró un vídeo avance de la supuesta tercera temporada de esta famosa serie, el cual ha causado mucho revuelo puesto que prestigiosas paginas parecen avalar esta noticia, el titulo por la cual pretende regresar esta icónica serie es (Lelouch of the Resurrection) aun por lo pronto nada esta oficializado dado que la empresa Sunrise no ha anunciado el regreso de la tercera temporada aunque tampoco lo ha negado, entre las tantas posibilidades existe la probabilidad de que este sea un vídeo recopila-torio como la mayoría de las películas relacionadas a esta serie.',
  },{
    nombre :'Yuna',
    comentario : 'Con la publicación de tercer tomo del manga Vigilante (Boku No Hero Academia ILLEGALS) la portada del tomo a hizo mención sobre la fecha de lanzamiento de la tercera temporada del anime Boku No Hero Academia, la fecha prevista para el día de lanzamiento es el 7 de abril.',
  },{
    nombre :'Tidus',
    comentario : 'Con la publicación de tercer tomo del manga Vigilante (Boku No Hero Academia ILLEGALS) la portada del tomo a hizo mención sobre la fecha de lanzamiento de la tercera temporada del anime Boku No Hero Academia, la fecha prevista para el día de lanzamiento es el 7 de abril.',
  }];
}

/*
cleanList().then(function(results){
let coments = [];
for (let i = 0; i < list.length; i++) {
coments.push(createRanking(list[i]));
}
return this(coments).then(renderList);
})
/*
let myNombre = document.createElement('.js-foro-nombre');
myNombre.textContent = list['nombre'];
header.appendChild(myNombre);

console.log(myNombre.textContent);

let myComentario = document.createElement('.js-foro-comentario');
myComentario.textContent = list['comentario'];
header.appendChild(myComentario); */
}


/*comentarios
function renderList(){
$('.contenido-comentario contenido-comentario').html('<div class="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div>');
getRankingList().then(function(list){

$('.contenido-comentario contenido-comentario').html('');

list.forEach(function(foro){
renderRanking(foro);
});
});
}

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





cleanList().then(function (results) {
let promises = [];

for (let i = 0; i < list.length; i++) {
promises.push(createRanking(list[i]));
}

Promise.all(promises).then(renderList);
});
}
*/
