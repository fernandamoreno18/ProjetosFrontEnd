function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio); 

  //if elemento != null - adicionar só elemento, pois ele ja entende - se elemento existe...
  if(elemento && (elemento.localName === 'audio')){
    elemento.play();  
  }
  else {
    //alert('Elemento não encontrado');
    console.log('Elemento não encontrado');
  } 
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++){

    const tecla = listaTeclas[contador]
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string    

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        console.log(evento.code);

        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
