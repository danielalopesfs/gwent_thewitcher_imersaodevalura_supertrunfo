var carta1 = {
  nome: "Geralt de Rivia",
  atributos: {
    forca: 8,
    destreza: 9,
    constituicao: 7,
    sabedoria: 6,
    carisma: 4,
    inteligencia: 5   
  }
};

var carta2 = {
  nome: "Cirilla Fiona Elen Riannon",
  atributos: {
    forca: 5,
    destreza: 10,
    constituicao: 6,
    sabedoria: 6,
    carisma: 4,
    inteligencia: 8
  }
};

var carta3 = {
  nome: "Barão Sanguinário",
  atributos: {
    forca: 9,
    destreza: 4,
    constituicao: 8,
    sabedoria: 6,
    carisma: 9,
    inteligencia: 3
  }
};

var carta4 = {
  nome: "Yennefer de Vengerberg",
  atributos: {
    forca: 4,
    destreza: 5,
    constituicao: 4,
    sabedoria: 8,
    carisma: 8,
    inteligencia: 10 
  }
};

var carta5 = {
  nome: "Eredin Bréacc Glas",
  atributos: {
    força: 10,
    destreza: 6,
    constituição: 8,
    sabedoria: 5,
    carisma: 5,
    inteligência: 5
  }
};

// Objetos dentro de um Array:

var cartas = [carta1, carta2, carta3, carta4, carta5];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 5);
  cartaMaquina = cartas[numeroCartaMaquina];
  console.log(cartaMaquina);
  
 var numeroCartaJogador = parseInt(Math.random() * 5);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 5)
    }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador)
  
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
  exibirOpcoes()
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "";
  
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
  }
  opcoes.innerHTML = opcoesTexto;
}

function obterAtributoSelecionado() {
  var radiosAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radiosAtributos.length; i++) {
    if(radiosAtributos[i].checked == true) {
      return radiosAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Parabéns! Você venceu."
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = "Não foi dessa vez! A vitória foi do seu adversário."
  } else {
    elementoResultado.innerHTML = "Empate!"
  }
  console.log(cartaMaquina);
}



// Por meio dos pontos '.' é possível "navegar" de objeto para objeto.

//Math.random() É UMA FUNCTION que retorna um número pseudo-aleatório no intervalo [0, 1] , ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado.

//'while' = enquanto. É uma estrutura de laço e, lembra, de alguma forma, o 'for' só que ao invés de executar uma só vez, executa ENQUANTO for verdade, não só se UMA vez for verdade.

// Na function exibirOpcoes() o 'for' é o 'para cada' e o 'in' é o 'dentro de'.

// Sempre lembrar de NUNCA misturar aspas duplas " com as aspas simpes '.