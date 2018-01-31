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
      success:function(result){
        $(".main-content").html(result);
      }
    })
  })
});

/*
function iniciarForo(){
}
*/

let groupId = 1135;
let servicioRest = 'https://web-unicen.herokuapp.com/api/thing';

function probando(){

  event.preventDefault();
  let info ={
    group: groupId,
    thing: servicioRest,
  };

  $.ajax({
    method: "GET",
    dataType:'JSON',
    url: "https://web-unicen.herokuapp.com/api/thing/group/1135",
    success: function(resultData){
     $(".probando").html(html);
    },
    error: function (jqxml, status, errorThrown) {
      console.log(errorThrown);
      alert ("asdfg");
    }
  });

}


/* compruebo que los campos esten completos para continuar, sino tiro un alert y pido todos los campos
function agregarComentario(){
$('.enviar').attr('disable', true);

let contenido = {
nombre : $('.js-input-nombre').val(),
comentario : $('.js-input-comentario').val();
}
let completo = true;

for (let campo in completo) {
if (!contenido[campo]) {
alert("Completar todos los campos");
completo = false;
break;
}
}
if (completo) {
$('.js-input-nombre').val('');
$('.js-input-comentario').val('');
subirComemtario(contenido, function(){
leerForo();
$('.enviar').attr('disabled', false);
});
else {
$('enviar').attr('disabled', false);
}
}
}

function leerForo(){
$('.tabla-topten tbody').html('<div class="loading"><i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div>');
}
*/
/*
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
*/
