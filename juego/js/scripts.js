
let usuario;
let creditos = 100;
let partidasGanadas = 0;
let partidasPerdidas = 0;
let empates = 0;
let totalPartidas = 0;
let jugadasBest = 0;

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

function random(){
  computadora = Math.floor(Math.random() * 5);
}

$("#piedra, #papel, #tijera, #lagarto, #spock").on("click", function() {
  Jugar();
});
$("#js-spockfriendly").on("click", function() {
  if ($("#js-spockfriendly").is(":checked")) {
    alert("¡Modo Spock Friendly activado!");
  }
  else {
    alert("¡Modo Spock Friendly desactivado!");
  }
});

function Jugar(valor){
  let maquina = random();
  let resultado = Comparar(valor, maquina);
  totalPartidas++;
  creditos-=5;

  if (resultado == -1) {
    alert('Empate!');
    empates++;
  } else if (resultado == 0){
    alert('Perdiste!');
    partidasPerdidas++;
  } else {
    alert('Ganaste!');
    partidasGanadas++;
    if($("#js-spockfriendly").is(":checked"))//terminar esto aunq no se como.
    creditos+=10;
  }

  $('.total-juego').html(totalPartidas);
  $('.total-usuario').html(partidasGanadas);
  $('.total-computadora').html(partidasPerdidas);
  $('.total-empates').html(empates);
  $('.creditos').html(creditos);
};

function Comparar(){
  let valorUsuario = usuario;
  let valorMaquina = computadora;

  if (valorUsuario == valorMaquina) {
    return -1;
  }else if (valorUsuario == 0) {
    if (valorMaquina == 2 || valorMaquina == 3) {
      return 1;
    }else {
      return 0;
    }
  }else if (valorUsuario == 1) {
    if (valorMaquina == 0 || valorMaquina == 4) {
      return 1;
    }else {
      return 0;
    }
  }else if (valorUsuario == 2) {
    if (valorMaquina ==1 || valorMaquina == 3) {
      return 1;
    }else {
      return 0;
    }
  }
  else if (valorUsuario == 3) {
    if (valorMaquina == 1 || valorMaquina == 4) {
      return 1;
    }else {
      return 0;
    }
  }else if (valorUsuario == 4) {
    if (valorMaquina == 0 || valorMaquina == 2) {
      return 1;
    }else {
      return 0;
    }
  }
}
/*function SpockFriendly(){
  let valorMaquina = computadora;
  let valorUsuario = usuario;
  $("#js-spockfriendly").is(":checked");
  if ((valorUsuario==4)&&(valorMaquina==0)||(valorUsuario=4)&&(valorMaquina==2)) {
    creditos+=5;
  }
}
*/
