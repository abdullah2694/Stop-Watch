var hrhead = document.getElementById("hr")
var minhead = document.getElementById("min")
var sechead = document.getElementById("sec")
var minihead = document.getElementById("mini")
 var hour = 0
var min = 0
var sec = 0
var mini = 0
var interval;

function timinerStart() {
    mini++
    minihead.innerHTML = mini

    if (mini >=100) {
        sec++
        sechead.innerHTML = sec
        mini =0
    }
    else if (sec >=60) {
        min++
        minhead.innerHTML = min
        sec =0
    }
    else if (min >=100) {
        hour++
        hrhead.innerHTML = hour
        min =0
    }

}


function start() {
    var btnid = document.getElementById("btn")
    interval= setInterval(timinerStart,10)
    btnid.disabled=true
}

function stop() {
    var btnid = document.getElementById("btn")
    clearInterval(interval)
    btnid.disabled=false

}

function reset() {
    minihead.innerHTML = 0
    sechead.innerHTML = 0
    minhead.innerHTML = 0
    hrhead.innerHTML = 0
    stop()
}