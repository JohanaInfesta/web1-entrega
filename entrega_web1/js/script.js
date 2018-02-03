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
$(".navigate").on("click", function(event)
{
  $.ajax({
    url: $(this).attr('href'),
    type: 'GET',
    dataType: "html",
    success:function(result){
      $(".main-content").html(result);
    },
    error: function(){
      $(".main-content").html("<h1>Error - Request Failed!</h1>");
    }
  });
  $(".main-content").html("<h1>Loading...</h1>");
  /*meter un if para cargar el foro */
  event.preventDefault();
});

function resetComentarios(){
  event.preventDefault();
  let grupo = 1136;
  $.ajax({
    method: "GET",
    dataType: 'JSON',
    url: "http://web-unicen.herokuapp.com/api/thing/group/" + grupo,
    success: function(resultData){
      //al ser tipo JSON resultData es un objeto listo para usar
      let html = "";
      for (let i = 0; i < resultData.information.length; i++) {
        html += "Id: " + resultData.information[i]['_id'] + "<br />";
        html += "Grupo: " + resultData.information[i]['group'] + "<br />";
        html += "Informacion: " + resultData.information[i]['thing.nombre'] + "<br />";
        html += "Informacion: " + resultData.information[i]['comentario'] + "<br />";
        html += "--------------------- <br />";
      }
      $("#infoGroup").html(html);
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
    }
  });
}

function enviarComentario(dbody){
  event.preventDefault();
  let grupo= 1136;
  let anda ={
    "nombre":$(".js-input-nombre").val(),
    "comentarios":$(".js-input-comentario").val(),
  };
  let info ={
    group: grupo,
    thing: anda,
  };
  if (grupo && anda){
    $.ajax({
      url:"http://web-unicen.herokuapp.com/api/thing",
      type:'POST',
      dataType: 'JSON',
      data:JSON.stringify(info),
      contentType: "application/json; charset=utf-8",
      success:function(resultData){
        $("#guardarAlert").html("Informacion guardada con ID =" + resultData.information._id);
        console.log(resultData);
      },
      error:function(jqxml, status, errorThrown){
        console.log(errorThrown);
      }
    });
  }
}


let list =[{
  "nombre" : 'Legend',
  "comentario" : 'Todo parece ser como lo es la empresa animadora de la serie Code Geass filtró un vídeo avance de la supuesta tercera temporada de esta famosa serie, el cual ha causado mucho revuelo puesto que prestigiosas paginas parecen avalar esta noticia, el titulo por la cual pretende regresar esta icónica serie es (Lelouch of the Resurrection) aun por lo pronto nada esta oficializado dado que la empresa Sunrise no ha anunciado el regreso de la tercera temporada aunque tampoco lo ha negado, entre las tantas posibilidades existe la probabilidad de que este sea un vídeo recopila-torio como la mayoría de las películas relacionadas a esta serie.',
},{
  "nombre" :'Yuna',
  "comentario" : 'Con la publicación de tercer tomo del manga Vigilante (Boku No Hero Academia ILLEGALS) la portada del tomo a hizo mención sobre la fecha de lanzamiento de la tercera temporada del anime Boku No Hero Academia, la fecha prevista para el día de lanzamiento es el 7 de abril.',
},{
  "nombre" :'Tidus',
  "comentario" : 'Con la publicación de tercer tomo del manga Vigilante (Boku No Hero Academia ILLEGALS) la portada del tomo a hizo mención sobre la fecha de lanzamiento de la tercera temporada del anime Boku No Hero Academia, la fecha prevista para el día de lanzamiento es el 7 de abril.',
}];
