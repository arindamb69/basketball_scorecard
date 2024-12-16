function add1home() {
    let homescoreEl = document.getElementById('home-score-el'); // Get the element
    let score = parseInt(homescoreEl.textContent); // Get the current score as a number
    score += 1; // Add 1 to the score
    homescoreEl.textContent = score; // Update the element's textContent
    console.log(score); // Log the new score
    highlightLeader()
}

function add2home() {
    let homescoreEl = document.getElementById('home-score-el'); // Get the element
    let score = parseInt(homescoreEl.textContent); // Get the current score as a number
    score += 2; // Add 1 to the score
    homescoreEl.textContent = score; // Update the element's textContent
    console.log(score); // Log the new score
    highlightLeader()
}

function add3home() {
    let homescoreEl = document.getElementById('home-score-el'); // Get the element
    let score = parseInt(homescoreEl.textContent); // Get the current score as a number
    score += 3; // Add 1 to the score
    homescoreEl.textContent = score; // Update the element's textContent
    console.log(score); // Log the new score
    highlightLeader()
}

function add1guest() {
    let guestscoreEl = document.getElementById('guest-score-el'); // Get the element
    let score = parseInt(guestscoreEl.textContent); // Get the current score as a number
    score += 1; // Add 1 to the score
    guestscoreEl.textContent = score; // Update the element's textContent
    console.log(score); // Log the new score
    highlightLeader()
}

function add2guest() {
    let guestscoreEl = document.getElementById('guest-score-el'); // Get the element
    let score = parseInt(guestscoreEl.textContent); // Get the current score as a number
    score += 2; // Add 1 to the score
    guestscoreEl.textContent = score; // Update the element's textContent
    console.log(score); // Log the new score
    highlightLeader()
}

function add3guest() {
    let guestscoreEl = document.getElementById('guest-score-el'); // Get the element
    let score = parseInt(guestscoreEl.textContent); // Get the current score as a number
    score += 3; // Add 1 to the score
    guestscoreEl.textContent = score; // Update the element's textContent
    console.log(score); // Log the new score
    highlightLeader()
}

function reset() {
    let homescoreEl = document.getElementById('home-score-el'); // Get the element
    let guestscoreEl = document.getElementById('guest-score-el'); // Get the element
    let periodEl = document.getElementById('period-counter'); // Get the element
    let foulEl = document.getElementById('foul-counter'); // Get the element
    let timeEl = document.getElementById('time-counter'); // Get the element

    homescoreEl.textContent = 0; // Update the element's textContent
    guestscoreEl.textContent = 0; // Update the element's textContent
    periodEl.textContent = 1; // Update the element's textContent
    foulEl.textContent = 0; // Update the element's textContent
    timeEl.textContent = '0:00'; // Update the element's textContent

    console.log('Score has been reset');
    homescoreEl.parentElement.classList.remove('leader');
    guestscoreEl.parentElement.classList.remove('leader');
}

function highlightLeader() {
    let homescoreEl = document.getElementById('home-score-el'); // Get the element
    let guestscoreEl = document.getElementById('guest-score-el'); // Get the element

    const homeScore = parseInt(homescoreEl.textContent);
    const guestScore = parseInt(guestscoreEl.textContent);

    // Remove the leader class from both
    homescoreEl.parentElement.classList.remove('leader');
    guestscoreEl.parentElement.classList.remove('leader');

    // Highlight the leader
    if (homeScore > guestScore) {
        homescoreEl.parentElement.classList.add('leader');
    } else if (guestScore > homeScore) {
        guestscoreEl.parentElement.classList.add('leader');
    }
}

// Increment Counter
function incrementCounter(counterId) {
    const counterEl = document.getElementById(counterId);
    let value = parseInt(counterEl.textContent);
    value += 1;
    counterEl.textContent = value;
}

// Decrement Counter
function decrementCounter(counterId) {
    const counterEl = document.getElementById(counterId);
    let value = parseInt(counterEl.textContent);
    if (value > 0) { // Prevent negative values
        value -= 1;
    }
    counterEl.textContent = value;
}

// Timer Variables
let timerInterval;
let timeInSeconds = 0;

// Start Timer
function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals
    timerInterval = setInterval(() => {
        timeInSeconds += 1;
        updateTimerDisplay();
    }, 1000); // Update every second
}

// Stop Timer
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Reset Timer
function resetTimer() {
    stopTimer();
    timeInSeconds = 0;
    updateTimerDisplay();
}

// Update Timer Display
function updateTimerDisplay() {
    const timerEl = document.getElementById("time-counter");
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
}