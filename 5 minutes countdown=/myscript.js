var x= setInterval(fivecountdown,1000);
function fivecountdown(){
    var d = new Date(); 
    var seconds = d.getMinutes() * 60 + d.getSeconds(); 
    var fiveMin = 60 * 5; 
    var timeleft = fiveMin - seconds % fiveMin; 
    var result = parseInt(timeleft / 60) + ':' + timeleft % 60;
    document.getElementById('5min').innerHTML = result
    if (minutes === 0 && seconds === 0){
        clearInterval(x)
    }
}