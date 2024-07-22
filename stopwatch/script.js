let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapsList');

// Initialize display
window.onload = () => {
    minutesElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
};

// Start or stop the stopwatch
function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1000);
        running = true;
    } else {
        clearInterval(tInterval);
        running = false;
    }
}

// Update the stopwatch time display
function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

// Reset the stopwatch
resetBtn.addEventListener('click', () => {
    clearInterval(tInterval);
    minutesElement.innerHTML = '00';
    secondsElement.innerHTML = '00';
    running = false;
    lapsList.innerHTML = '';
});

// Record a lap
lapBtn.addEventListener('click', () => {
    if (running) {
        const lapTime = `${minutesElement.innerHTML}:${secondsElement.innerHTML}`;
        const li = document.createElement('li');
        li.textContent = lapTime;
        lapsList.appendChild(li);
    }
});
