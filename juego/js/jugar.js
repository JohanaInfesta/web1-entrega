let usuario;
let creditos = 100;
let partidasGanadas = 0;
let partidasPerdidas = 0;
let empates = 0;
let totalPartidas = 0;
let Best = {
  BestTotal : 0,
  BestGanadas : 0,
  BestPerdidas : 0
};

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
  JugarJuego();
});
//alert activado-desactivado
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
//fin alerts activado-desactivado
function JugarJuego(){
    totalPartidas++;
  if ($("#js-best").is(":checked")) {
    BestOf();
  }else {
    Jugar();
  }
  $('.total-juego').html(totalPartidas);
  $('.total-usuario').html(partidasGanadas);
  $('.total-computadora').html(partidasPerdidas);
  $('.total-empates').html(empates);
  $('.creditos').html(creditos);
}
function Jugar(valor){
  let maquina = random();
  let resultado = Comparar(valor, maquina);
  creditos-=5;
  SpockFriendly();

  if (resultado == -1) {
    alert('Empate!');
    empates++;
  } else if (resultado == 0){
    alert('Perdiste!');
    partidasPerdidas++;
  } else {
    alert('Ganaste!');
    partidasGanadas++;
    creditos+=10;
  }
}
function SpockFriendly(){
  let valorMaquina = computadora;
  let valorUsuario = usuario;
  if ($("#js-spockfriendly").is(":checked")) {
    if ((valorUsuario==4)&&(valorMaquina==0)||(valorUsuario=4)&&(valorMaquina==2)) {
      creditos+=5;
    }
  }
}
function BestOf(valor){
  let maquina = random();
  let resultado = Comparar(valor, maquina);
  Best.BestTotal++;
  if (resultado == -1) {
    alert('Empate!');
    empates++;
  } else if (resultado == 0){
    alert('Perdiste!');
    partidasPerdidas++;
    Best.BestPerdidas++;
  } else {
    alert('Ganaste!');
    partidasGanadas++;
    Best.BestGanadas++;
  }
  if (Best.BestTotal===3) {
    if (Best.BestGanadas>=2) {
      alert("Ganaste BestOf");
      creditos+=5;
    }else if (Best.BestGanadas==Best.BestPerdidas) {
      alert("Empate BestOf");
      creditos-=5;
    }else {
      alert("Perdiste BestOf");
      creditos-=5;
    }
  }
  console.log(Best);
}

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
