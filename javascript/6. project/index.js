let clock = document.getElementById("myTime");
function runClock() {
  let now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(runClock, 1000);

runClock();
