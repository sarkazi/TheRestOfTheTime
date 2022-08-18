

let dateFinish = new Date('2023,05,13');
let dateStart = new Date('2021,11,13');
let date = new Date;
let daysCommon = (dateFinish - dateStart) / 1000 / 60 / 60 / 24;
let daysLeft = Math.floor((dateFinish - date) / 1000 / 60 / 60 / 24);
let daysPassed = daysCommon - daysLeft;
let daysPassedProcent = ((daysPassed * 100) / daysCommon).toFixed(2) + '%';

function leftDaysToTimeline() {
   document.querySelector('.first-screen__timeline-progress').style.width = daysPassedProcent;
   document.querySelector('.first-screen__timeline-progress').innerHTML = 'осталось ' + daysLeft + ' дн.';
}

setInterval(leftDaysToTimeline, 1000);






const tokenTg = '5600455683:AAE4N-PgdjKnBAEu1A1H3JqCCwr7v7LYbP4';
let urlTg = 'https://api.telegram.org/bot' + tokenTg + '/sendMessage?chat_id=640848363&text=Осталось ' + daysLeft + ' Дней';
let xhttp = new XMLHttpRequest();

function sendMessage() {
   xhttp.open("GET", urlTg, true);
   xhttp.send();
}

setInterval(sendMessage, 86400000);







//https://api.telegram.org/bot5600455683:AAE4N-PgdjKnBAEu1A1H3JqCCwr7v7LYbP4/getUpdates
//https://api.telegram.org/bot5600455683:AAE4N-PgdjKnBAEu1A1H3JqCCwr7v7LYbP4/sendMessage?chat_id=640848363&text=hi_gde_panama
//https://api.telegram.org/bot5600455683:AAE4N-PgdjKnBAEu1A1H3JqCCwr7v7LYbP4/sendMessage?chat_id=640848363&text=эй_слыш






