'use strict'
let groupID=1137;
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
      if ($(".main-content").find(".tabla-foro")) {
        leerList();
      }
      /*meter un if para cargar el foro */
    },
    error: function(){
      $(".main-content").html("<h1>Error - Request Failed!</h1>");
    }
  });
  $(".main-content").html("<h1>Loading...</h1>");
  event.preventDefault();
});

/*lee la informacion dentro de la api y la trae a la "tabla" dentro de mi foro*/
function leerList(){
  event.preventDefault();
  let grupo = groupID;
  $.ajax({
    method: "GET",
    dataType: 'JSON',
    url: "http://web-unicen.herokuapp.com/api/thing/group/" + grupo,
    success: function(resultData){
      let html = "";
      for (let i = 0; i < resultData.information.length; i++) {
        html += "<tr id='"+ resultData.information[i]._id +"'>";
        html += "<td class='nombre-nm'>"+ resultData.information[i].thing['nombre'] +":"+ "</td>";
        html += "<td>" + resultData.information[i].thing['comentarios'] + "</td>";
        html += "<td ><button class='glyphicon glyphicon-remove eliminarComentario' resultData-id='"+resultData.information[i]._id+"'></button></td></tr>";
      }
      $("#template").html(html);
      console.log(resultData);

/*eliminar la fila */
      $(".eliminarComentario").on("click", function() {
        event.preventDefault;
        let _id = $(this).parent().parent().attr("id");
        $.ajax({
          url : "http://web-unicen.herokuapp.com/api/thing/" + _id,
          method : "DELETE",
          contentType : "application/json; charset=utf-8",
          dataType : "JSON",
          success : function(resultData){
            $("#template").html(html);
            return (leerList());
          },
          error : function(xmlhr, r, error){
            alert("Error. Intente más tarde");
          }
        });
      });
    },
    error:function(jqxml, status, errorThrown){
      console.log(errorThrown);
    }
  });
}

function enviarComentario(){
  event.preventDefault();
  let grupo= groupID;
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
        return(leerList());
        console.log(resultData);
      },
      error:function(jqxml, status, errorThrown){
        console.log(errorThrown);
      }
    });
  }else {
    $("#guardarAlert").html("Grupo e Informacion son campos requeridos");
  }
}

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
let nuevaList=JSON.stringify(list);
console.log(nuevaList);
*/
