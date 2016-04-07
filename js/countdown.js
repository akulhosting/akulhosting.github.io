function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  

  function updateClock() {
    var t = getTimeRemaining(endtime);

    document.getElementById("days").innerHTML = t.days ;
    document.getElementById("hours").innerHTML = ('0' + t.hours).slice(-2);
    document.getElementById("minutes").innerHTML = ('0' + t.minutes).slice(-2);
    document.getElementById("seconds").innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date("June 15, 2016 12:00:00");
initializeClock('clockdiv', deadline);
