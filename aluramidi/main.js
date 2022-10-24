function tocaSom(idElementoAudio){
   document.querySelector(idElementoAudio).play(); 
}

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaTeclas.length){

    const tecla = listaTeclas[contador]
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    contador ++;

    console.log(contador);
}

 //on click, chamar a função sem os parenteses - p ele entender q vai chamar, só quando clicar.
//document.querySelector('.tecla_pom').onclick = tocaSomPom;
//document.querySelector('.tecla_clap').onclick = tocaSomClap;



