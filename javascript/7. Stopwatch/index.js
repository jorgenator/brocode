const startBtn = document.getElementById(`startBtn`);
const stopBtn = document.getElementById(`stopBtn`);
const resetBtn = document.getElementById(`resetBtn`);
const display = document.getElementById(`display`);

let startTime = new Date();
startTime.setHours(0,0,0,0);
let timestamp;

startBtn.onclick = () => {
    console.log( `Start Button Clicked` );

    timestamp = setInterval( () => {
        startTime.setSeconds(startTime.getSeconds() + 1);
        display.textContent = startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
    }, 1000 );
    
}

stopBtn.onclick = () => {
    running = false;
    clearInterval(timestamp);
    console.log( `Stop Button Clicked` );
}

resetBtn.onclick = () => {
    console.log( `Reset Button Clicked` );
    clearInterval(timestamp);
    startTime.setHours(0,0,0,0);
    display.textContent = startTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });
}

