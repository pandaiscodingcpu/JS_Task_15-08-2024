const words = {
    easy: [
        "cat", "dog", "sun", "moon", "tree", "bird", "ball", "run", "jump", "walk",
        "fish", "book", "pen", "cup", "car", "bus", "hat", "map", "key", "door"
    ],
    medium: [
        "apple", "banana", "orange", "grape", "house", "garden", "flower", "water", "light", "happy",
        "music", "cloud", "river", "ocean", "mountain", "forest", "friend", "school", "computer", "keyboard"
    ],
    hard: [
        "keyboard", "javascript", "programming", "developer", "application", "algorithm", "database",
        "responsive", "interface", "authentication", "accessibility", "functionality", "architecture",
        "synchronous", "asynchronous", "deployment", "repository", "abstraction", "polymorphism"
    ]
};

const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input'); 
const scoreSpan = document.getElementById('score');
const timeSpan = document.getElementById('time');
const gameSetup = document.getElementById('game-setup');
const gamePlay = document.getElementById('game-play');
const startBtn = document.getElementById('start-btn');
const resultModal = document.getElementById('result-modal');
const modalScore = document.getElementById('modal-score');
const modalAccuracy = document.getElementById('modal-accuracy');
const playAgainBtn = document.getElementById('play-again-btn');
const easyBtn = document.getElementById('easy');
const mediumBtn = document.getElementById('medium');
const hardBtn = document.getElementById('hard');

let score = 0;
let timeLeft = 60;
let gameInterval;
let wordSpawnInterval;
let selectedTime = 60;
let selectedDifficulty = 'easy';
let typedWords = 0;
let correctWords = 0;

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = star.style.height = `${Math.random() * 3 + 1}px`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.querySelector('.stars').appendChild(star);
}

for (let i = 0; i < 150; i++) {
    createStar();
}

document.querySelectorAll('.time-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.time-btn.active').classList.remove('active');
        btn.classList.add('active');
        selectedTime = parseInt(btn.dataset.time);
    });
});
document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.difficulty-btn.active').classList.remove('active');
        btn.classList.add('active');
        selectedDifficulty = btn.id;
    });
});

startBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', resetGame);

function startGame() {
    gameSetup.style.display = 'none';
    gamePlay.style.display = 'flex';
    score = 0;
    timeLeft = selectedTime;
    typedWords = 0;
    correctWords = 0;
    scoreSpan.textContent = score;
    timeSpan.textContent = timeLeft;
    wordInput.value = '';
    wordInput.focus();

    wordDisplay.innerHTML = '';

    gameInterval = setInterval(updateTimer, 1000);
    wordSpawnInterval = setInterval(spawnWord, getSpawnRate());
}

function updateTimer() {
    timeLeft--;
    timeSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

function getSpawnRate() {
    return 3000;
}

function getFallDuration() {
    switch (selectedDifficulty) {
        case 'easy':
            return 8000;
        case 'medium':
            return 6000;
        case 'hard':
            return 5000;
    }
}

function getWordsList() {
    return words[selectedDifficulty];
}

function spawnWord() {
    const wordList = getWordsList();
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.textContent = randomWord;

    wordElement.style.position = 'absolute';
    wordElement.style.visibility = 'hidden';
    wordDisplay.appendChild(wordElement);
    const wordWidth = wordElement.offsetWidth;
    wordDisplay.removeChild(wordElement);

    const containerWidth = wordDisplay.offsetWidth;
    const randomLeft = Math.random() * (containerWidth - wordWidth - 20) + 10;

    wordElement.style.left = `${randomLeft}px`;
    wordElement.style.top = '-50px';
    wordElement.style.visibility = 'visible';

    wordDisplay.appendChild(wordElement);

    const duration = getFallDuration();
    wordElement.style.transitionDuration = `${duration / 1000}s`;
    wordElement.style.transform = `translateY(${wordDisplay.clientHeight + 50}px)`;

    setTimeout(() => {
        if (!wordElement.classList.contains('typed')) {
            wordElement.remove();
        }
    }, duration);
}

wordInput.addEventListener('input', (e) => {
    const typedText = e.target.value.trim();
    const fallingWords = document.querySelectorAll('.word');

    
    fallingWords.forEach(word => {
        if (word.textContent.toLowerCase() === typedText.toLowerCase()) {
            word.classList.add('typed');
            score += word.textContent.length; 
            correctWords++;
            typedWords++;
            scoreSpan.textContent = score;
            wordInput.value = '';
            setTimeout(() => word.remove(), 300);
        }
    });
});

function endGame() {
    clearInterval(gameInterval);
    clearInterval(wordSpawnInterval);
    wordInput.disabled = true;
    const accuracy = typedWords > 0 ? (correctWords / typedWords) * 100 : 0;
    modalScore.textContent = score;
    modalAccuracy.textContent = `${accuracy.toFixed(0)}%`;
    resultModal.style.display = 'flex';
}

function resetGame() {
    gamePlay.style.display = 'none';
    gameSetup.style.display = 'flex';
    wordInput.disabled = false;
    resultModal.style.display = 'none';
}