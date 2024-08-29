let hourElem = document.querySelector('#hour');
let minuteElem = document.querySelector('#minute');
let secondElem = document.querySelector('#second');

function setTime() {
    let Time = new Date();

    let hour = Time.getHours();
    let minute = Time.getMinutes();
    let second = Time.getSeconds();

    if(hour < 10) {
        hour = '0' + hour
    }
    if(minute < 10) {
        minute = '0' + minute
    }
    if(second < 10) {
        second = '0' + second
    }

    hourElem.innerHTML = hour
    minuteElem.innerHTML = minute
    secondElem.innerHTML = second
}
setInterval(setTime , 1000)