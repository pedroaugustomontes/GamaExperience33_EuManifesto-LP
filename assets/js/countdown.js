
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