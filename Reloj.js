export function obtenerReloj(){
    let fecha = new Date();
    let hours = fecha.getHours();
    let minutes = fecha.getMinutes();
    let seconds = fecha.getSeconds();

    let secondsText;
    let minutesText;
    let hoursText;

    let isPm = hours%12 >0;
    let meridiano = isPm ? "AM":"PM";
    if(seconds<10){
        secondsText = `0${seconds}`;
    }else{
        secondsText = seconds;
    }

    if(minutes<10){
        minutesText =`0${minutes}`;
    } else {
        minutesText = minutes;
    }

    if(hours==12){
        hoursText = 12;
    }
    else if(hours!=12){
        if(hours%12<10){
        hoursText = `0${hours%12}`;
        } else{
            hoursText = hours%12;
        }
    }
    let $reloj = document.querySelector("#reloj");
    $reloj.innerText = `${hoursText}:${minutesText}:${secondsText} ${meridiano}`;
}