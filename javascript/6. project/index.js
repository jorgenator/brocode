let clock = document.getElementById("myTime");

function runClock() {
  let now = new Date();
  clock.textContent = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}

setInterval(runClock, 1000);

runClock();