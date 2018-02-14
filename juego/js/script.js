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
  let jugar = function() {

    let juegaCompu = function() {
      computadora = Math.floor(Math.random() * 5);
    }

    juegaCompu();

    let generarJuego = function() {
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
      creditos-=5
      let opcionusuario = usuario;
      let opcioncompu = computadora;
      if ($("#js-spockfriendly").is(":checked")) {
        if (empates) {
        }else if (partidasPerdidas) {
        }else {
          if(opcionusuario== 4)
          creditos +=20;
          else
          credito +=10;
        }
      }
    }
    modoSpockFriendly();

    let actualizarTabla = function(){
      $('.creditos').html(creditos);
      $('.total-juego').html(totalPartidas);
      $('.total-usuario').html(partidasGanadas);
      $('.total-computadora').html(partidasPerdidas);
      $('.total-empates').html(empates)
    }
    actualizarTabla();
  }
})
