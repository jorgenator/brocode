const startBtn = document.getElementById(`startBtn`);
const stopBtn = document.getElementById(`stopBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const display = document.getElementById(`display`);

let timer = new Date();
timer.setHours(0,0,0,0);
let runTimer;

startBtn.onclick = () => {
    console.log( `Start Button Clicked` );

    runTimer = setInterval( () => {
        timer.setMilliseconds(timer.getMilliseconds() + 10);
        let hours = String(timer.getHours()).padStart(2, '0');
        let minutes = String(timer.getMinutes()).padStart(2, '0');
        let seconds = String(timer.getSeconds()).padStart(2, '0');
        let milliseconds = String(Math.floor(timer.getMilliseconds() / 10)).padStart(2, '0');
        display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }, 10 );
    
}

stopBtn.onclick = () => {
    console.log( `Stop Button Clicked` );
    clearInterval(runTimer);
}

resetBtn.onclick = () => {
    console.log( `Reset Button Clicked` );
    clearInterval(runTimer);
    timer.setHours(0,0,0,0);
    display.textContent = timer.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }) + `:00`;
}

