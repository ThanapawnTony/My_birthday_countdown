// Set the date were counting down to
var countDownDate = new Date("Jan 22, 2023 00:00:01").getTime();

// update the count down every 1 sec
var x = setInterval(function() {
    // get today date and time
    var now = new Date().getTime();

    // find the distance between now and the countdown date
    var distance = countDownDate - now;

    // time calculation for days, hours, minutes and sec
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // output the results in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // if the count down is over, display text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TODAY IS THE DAY";
    }
}, 1000);