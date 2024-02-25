
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function posicaoRandomica() {


	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas == 3) {

			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'mosquito1'
		
		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}



//---INÍCIO FUNCAO DE INICIAR O JOGO---
function iniciarJogo() {
	var nivel = document.getElementById("nivel").value;

	if(nivel == ''){
		alert('Selecione um nível antes de começarmos')
	}else{
		window.location.href = "app.html?" + nivel;
		//? = é utilizado nesse caso pare concatenação do parametro que vamos utilizar
	}
  }
  //---FIM FUNÇÃO DE INICIAR O JOGO---



  //---ATRIBUINDO O VALOR DA FUNÇÃO DE NIVEL, PARA MODIFICAR O JOGO
  var nivel = window.location.search; //SEARCH = só mostra tudo da URL, pós o ?

  nivel = nivel.replace('?', '');

  var tempoMosquito = 1650;

  if(nivel == 'facil'){ //tempo de mostrar o mosquito = 1650 / 1,65 seg.
	tempoMosquito = 1650
  }else if(nivel == 'normal'){ //tempo de mostrar o mosquito = 1250 / 1,25 seg.
	tempoMosquito = 1250;
  }else if(nivel == 'dificil'){ //tempo de mostrar o mosquito = 900 / 0,9 seg.
	tempoMosquito = 900;
  }