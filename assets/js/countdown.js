
var target_date = new Date("may 20, 2020, 20:00:00");
var dias, horas, minutos, segundos;
var regressiva = document.getElementById("regressiva");

setInterval(function () {

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

document.getElementById('days').innerHTML = dias;
document.getElementById('hours').innerHTML = horas;
document.getElementById('minutes').innerHTML = minutos;
document.getElementById('seconds').innerHTML = segundos;
  

}, 1000);

var endDate = new Date(2020, 4, 20, 20, 00); /* O mês começa em 0, vai de 0 a 11 */

countdownRefresh();

function countdownRefresh() {
    var beginDate = new Date();

    if (beginDate < endDate) {
        var timeSpan = getTimeSpan(endDate - beginDate);
        
        document.getElementById('days').textContent = timeSpan.day;
        document.getElementById('hours').textContent = timeSpan.hour;
        document.getElementById('minutes').textContent = timeSpan.minute;
        document.getElementById('seconds').textContent = timeSpan.second;

        /* Refresh a cada 1 segundo */
        setTimeout(countdownRefresh, 1000);
    }
    else {
        document.getElementById('countdown').style.display = "none";
        //document.getElementById('countdown-ended').style.display = "block";
    }
}

function getTimeSpan(ticks) {
    var d = new Date(ticks);
    return {
        day: d.getDate() - 1,
        hour: d.getUTCHours(), 
        minute: d.getMinutes(), 
        second: d.getSeconds()
    }
}



