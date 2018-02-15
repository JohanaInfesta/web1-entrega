$(document).ready(function(){

  let usuario;
  let creditos = 100;
  let partidasGanadas = 0;
  let partidasPerdidas = 0;
  let empates = 0;
  let totalPartidas = 0;


  $("#piedra").on("click", function() {
    usuario = 0;
  });
  $("#papel").on("click", function() {
    usuario = 1;
  });
  $("#tijera").on("click", function() {
    usuario = 2;
  });
  $("#lagarto").on("click", function() {
    usuario = 3;
  });
  $("#spock").on("click", function() {
    usuario = 4;
  });

  $("#piedra, #papel, #tijera, #lagarto, #spock").on("click", function() {
    jugar();
  });
  $("#js-spockfriendly").on("click", function() {
    if ($("#js-spockfriendly").is(":checked")) {
      alert("¡Modo Spock Friendly activado!");
    }
    else {
      alert("¡Modo Spock Friendly desactivado!");
    }
  });
  $("#js-best").on("click", function(){
    if ($("#js-best").is(":checked")) {
      alert("¡Modo Best Of 3 activado!");
    }else {
      alert("Modo Best Of 3 desactivado");
    }
  });
  let jugar = function() {

    let juegaCompu = function() {
      computadora = Math.floor(Math.random() * 5);
    }

    juegaCompu();

    let generarJuego = function() {
      creditos-=5;
      totalPartidas++;
      let opcionusuario = usuario;
      let opcioncompu = computadora;

      if (usuario == 0){//el usuario eligio piedra
        if((computadora == 1) || (computadora == 4)){
          alert("perdiste");
          partidasPerdidas++;
        }else{
          if((computadora == 2) || (computadora == 3)){
            alert("ganaste");
            partidasGanadas++;
            creditos+=10;
          }else{
            if(computadora== 0){
              alert("empate");
              empates++;
            }
          }
        }
      }
      if(usuario == 1){//el usuario eligio papel
        if((computadora == 2) || (computadora == 3)){
          alert("perdiste");
          partidasPerdidas++;
        }else{
          if((computadora == 0) || (computadora == 4)){
            alert("ganaste");
            partidasGanadas++;
            creditos+=10;
          }else{
            if(computadora == 1){
              alert("empate");
              empates++;
            }
          }
        }
      }
      if(usuario == 2) {//el usuario eligio tijera
        if((computadora == 1) || (computadora == 3)){
          alert("ganaste");
          partidasGanadas++;
          creditos+=10;
        }else{
          if((computadora== 0) || (computadora== 4)){
            alert("perdiste");
            partidasPerdidas++;
          }else{
            if(computadora == 2) {
              alert("empate");
              empates++;
            }
          }
        }
      }
      if(usuario == 3) {//el usuario eligio lagarto
        if((computadora == 1) || (computadora == 4)){computadora
          alert("ganaste");
          partidasGanadas++;
          creditos+=10;
        }else{
          if((computadora == 0) || (computadora == 2)){
            alert("perdiste");
            partidasPerdidas++;
          }else{
            if(computadora == 3) {
              alert("empate");
              empates++;
            }
          }
        }
      }
      if(usuario == 4) {//el usuario eligio spock
        if((computadora == 0) || (computadora == 2)){
          alert("ganaste");
          partidasGanadas++;
          creditos+=10;
        }else{
          if((computadora == 1) || (computadora == 3)){
            alert("perdiste");
            partidasPerdidas++;
          }else{
            if(computadora == 4) {
              alert("empate");
              empates++;
            }
          }
        }
      }

      ;
      console.log("Elección usuario: "+opcionusuario);
      console.log("Elección computadora: "+opcioncompu);
    }
    generarJuego();

    let modoSpockFriendly = function() {
      let opcionusuario = usuario;
      let opcioncompu = computadora;
      if ($("#js-spockfriendly").is(":checked")) {
        if((opcionusuario == 4)&&(opcioncompu==2)||(opcionusuario==4)&&(opcioncompu==0)){
          creditos+=5;
        }
      }
    }
    modoSpockFriendly();

    let modoBestOf = function(){
      if ($("#js-best").is(":checked")) {
        creditos = 100;
        let PartidasTotales = totalPartidas;
        if (PartidasTotales===3) {

          if (partidasGanadas >=2 ) {
            alert("ganaste");
            creditos +=5;
          }
          else if (partidasGanadas === partidasPerdidas) {
            alert("empate");
            creditos -=5
          }
          else {
            alert("perdiste");
            creditos -=5;
          }
        }
      }
    }
    modoBestOf();

    $('.creditos').html(creditos);

    let subirTabla = function(){
      event.preventDefault();
      let grupo = 1139;
      let tabla ={
        "totales" : totalPartidas,
        "ganadas" : partidasGanadas,
        "perdidas" : partidasPerdidas,
        "empate" : empates,
      };
      let info ={
        group : grupo,
        thing : tabla,
      };
      if (grupo && tabla) {
        $.ajax({
          url:"http://web-unicen.herokuapp.com/api/thing",
          type:'POST',
          dataType: 'JSON',
          data:JSON.stringify(info),
          contentType: "application/json; charset=utf-8",
          success:function(resultData){
            console.log(resultData);
          },
          error:function(jqxml, status, errorThrown){
            console.log(errorThrown);
          }
        });
      }else{
        alert("error");
      }
    }
    subirTabla();

    let mostrarTabla = function(){
      let grupo = 1139;
      $.ajax({
        method: "GET",
        dataType: 'JSON',
        url: "http://web-unicen.herokuapp.com/api/thing/group/" + grupo,
        success: function (resultData){
          let html =" ";
          for (let i = 0; i < resultData.information.length; i++) {
            html += "<tr id='"+ resultData.information[i]._id +"'>";
            html += "<td >"+ resultData.information[i].thing['totales'] + "</td>";
            html += "<td>" + resultData.information[i].thing['ganadas'] + "</td>";
            html += "<td>" + resultData.information[i].thing['perdidas'] + "</td>";
            html += "<td>" + resultData.information[i].thing['empate'] + "</td>";
            html += "<td ><button class='glyphicon glyphicon-remove eliminarComentario' resultData-id='"+resultData.information[i]._id+"'></button></td></tr>";
          }
          $("#template").html(html);
          console.log(resultData);

          $(".eliminarComentario").on("click", function() {
            event.preventDefault;
            let _id = $(this).parent().parent().attr("id");// busca el id directo para borrar
            $.ajax({
              url : "http://web-unicen.herokuapp.com/api/thing/" + _id,
              method : "DELETE",
              contentType : "application/json; charset=utf-8",
              dataType : "JSON",
              success : function(resultData){
                $("#template").html(html);
                return (mostrarTabla());
              },
              error : function(xmlhr, r, error){
                alert("Error. Intente más tarde");
              }
            });
          });
        }
      });
    }
    mostrarTabla();
    /*
    let reset = function(){
    $('#reset').on('click', function(){
    e.preventDefault();
    $.ajax({
    url:"http://web-unicen.herokuapp.com/api/thing/group/1139" +_id,
    type:'DELETE',
    dataType: 'JSON',
    data:JSON.stringify(id),
    contentType: "application/json; charset=utf-8",
    success: function (resultData){
    console.log(resultData);
  },
});
});
console.log(reset);
}
reset();*/
}
})
