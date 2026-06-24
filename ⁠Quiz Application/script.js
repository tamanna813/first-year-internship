const questions = [
{
    question: "Which language is used for web styling?",
    answers: ["HTML", "CSS", "Python", "Java"],
    correct: "CSS"
},
{
    question: "Which company developed JavaScript?",
    answers: ["Microsoft", "Netscape", "Apple", "Google"],
    correct: "Netscape"
},
{
    question: "Which tag is used for headings?",
    answers: ["<h1>", "<p>", "<img>", "<div>"],
    correct: "<h1>"
},
{
    question: "What does CSS stand for?",
    answers: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets"
    ],
    correct: "Cascading Style Sheets"
}
];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;

function startQuiz() {
    showQuestion();
    startTimer();
}

function showQuestion() {
    answersElement.innerHTML = "";

    const q = questions[currentQuestion];
    questionElement.textContent = q.question;

    q.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");

        button.addEventListener("click", () => {
            if (answer === q.correct) {
                score++;
            }

            clearInterval(timer);
            nextQuestion();
        });

        answersElement.appendChild(button);
    });
}

function startTimer() {
    timeLeft = 15;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
        startTimer();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById(
        "score"
    ).textContent = `${score} / ${questions.length}`;
}

nextBtn.addEventListener("click", () => {
    clearInterval(timer);
    nextQuestion();
});

startQuiz();