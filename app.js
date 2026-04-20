const jokes = [
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!" },
    { setup: "What doyoyu call a fake noodle?", punchline: "An impasta!" },
    { setup: "Why did the scarecrow win an award?", punchline: "He was outstanding in his field!" },
    { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!" },
    { setup: "What do you call a dog that does magic?", punchline: "A Labracadabrador!" },
    { setup: "Why did the bicycle fall over?", punchline: "Because it was two-tired!" },
    { setup: "What do you call cheese that isn't yours?", punchline: "Nacho cheese!" }
];

let currentJoke = 0;

function showJoke() {
    document.getElementById('setup').textContent = jokes[currentJoke].setup;
    document.getElementById('punchline').textContent = jokes[currentJoke].punchline;
    document.getElementById('punchline').classList.add('hidden');
}

function revealPunchline() {
    document.getElementById('punchline').classList.remove('hidden');
}

function nextJoke() {
    currentJoke = (currentJoke + 1) % jokes.length;
    showJoke();
}

showJoke();

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('dark-mode-btn');
    btn.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// eval-test-line
// eval-test-line
// Added unique comment by eval agent at 1776686316