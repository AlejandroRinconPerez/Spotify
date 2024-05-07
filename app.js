import './timeFormatted.js';
import './autoTimeFormatted.js';
import './helloButton.js';
import './liveTimer.js';

const elem = document.getElementById('elem')
document.addEventListener('DOMContentLoaded', (e) => {
    setInterval(() => elem.setAttribute('datetime', new Date()), 1000); // (5)
});

