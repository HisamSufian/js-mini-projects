/**
 * Quiz App Logic
 * --------------
 * - Store questions in an array
 * - Show one question at a time
 * - Check answers
 * - Track score
 */

// Quiz questions
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false }
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "Java", correct: false }
        ]
    },
    {
        question: "Which language runs in the browser?",
        answers: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "JavaScript", correct: true }
        ]
    }
];

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreText = document.getElementById("score");

// Quiz state
let currentQuestionIndex = 0;
let score = 0;

// Start quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    showQuestion();
}

// Show question and answers
function showQuestion() {
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        answerButtons.appendChild(button);

        // Store correct answer info
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

// Reset previous answers
function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

// Handle answer click
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }

    // Disable all buttons
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    nextButton.style.display = "block";
}

// Next question
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

// Show final score
function showScore() {
    resetState();
    questionElement.textContent = "🎉 Quiz Completed!";
    scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
    nextButton.style.display = "none";
}

// Start quiz on load
startQuiz();
