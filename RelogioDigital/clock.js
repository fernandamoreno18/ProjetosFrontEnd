setInterval(showTime, 1000); //vai chamar a função 1 segundo após iniciar

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds(); 
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec;
  
    document.getElementById("clock")
            .innerHTML = currentTime;  //subtitui o elemento no html que tem id "clock" pela data atual
}

showTime();