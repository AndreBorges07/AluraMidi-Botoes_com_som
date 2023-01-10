function tocaSom(seletorAudio){ /*Essa é uma função*/ 
    const elemento = document.querySelector(seletorAudio);

    //Caso alguém vá lá no console para digitar outro parâmetro, esse if/else serve para não mostrar o "erro" diretamente. Melhora a experiência do usuário. 
    if (elemento != null && elemento.localName === 'audio'){ 
        elemento.play();
    }
    else{
        //alert('Elemento não encontrado');
        console.log('Elementão não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla'); //Pega o número de cada tecla, de 0 à 8

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]; // Tecla recebe o número que está vindo do contador. 

    const instrumento = tecla.classList[1]; // consegue pegar o nome da classe que está no HTML. No caso, pega a segunda classe, por isso o "1".

    // Neste caso, é o acento de "crase"
    const idAudio = `#som_${instrumento}`; /* "template strin" -> Essa constante idAudio recebe o que seria a junção das palavras "#som_" mais o nome do instrumento (tecla_pom por exemplo). logo, ele consegue guardar o nome do ID completo lá das tags áudio.*/
    
    // console.log(idAudio); //serviu para testar o funcionamento

    tecla.onclick = function () {
        tocaSom(idAudio); //usa a função lá de cima para tocar o som que vem dos áudios. 
    }

   // console.log(contador); //serviu para testar o funcionamento

   tecla.onkeydown = function (evento) {
    if(evento.code === "Enter" || evento.code === "Space") { // Quando tiver três vezes o "=" é pra comparar até o tipo do elemento. 
    tecla.classList.add('ativa');
    }
  }
    tecla.onkeyup = function () {
    tecla.classList.remove('ativa');
  }


}

