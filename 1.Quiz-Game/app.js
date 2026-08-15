let startbtn = document.querySelector(".startbtn");
let startscreen = document.getElementById("startscreen");
let quizscreen = document.getElementById("quizscreen");
let currentquestionspan = document.querySelector(".currentquestion");
let answercontainer = document.getElementById("answercontainer");
let questionText = document.querySelector(".questiontext");
let scorespan = document.querySelector(".currentscore");
let resultscreen = document.querySelector(".result");
let resultmsg = document.querySelector(".dynamic");
let finalscore = document.querySelector(".finalscore");
let restartbtn = document.querySelector(".restartbtn");
const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];
let answersDisabled = false;
startQuiz();
let score = 0;
scorespan.textContent = score;
let currentQuestionIndex = 0;


restartbtn.addEventListener("click", restartquiz);

function startQuiz() {

  startbtn.addEventListener("click", () => {
    startscreen.classList.remove("active");
    quizscreen.classList.add("active");
    showQuestion();

  })

}
function showQuestion() {
  answersDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentquestionspan.textContent = currentQuestionIndex + 1;

  questionText.textContent = currentQuestion.question;
  answercontainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    let answerbtn = document.createElement("button");
    answerbtn.textContent = answer.text;
    answerbtn.classList.add("answerbtn");

    answerbtn.dataset.correct = answer.correct;

    answerbtn.addEventListener("click", selectAnswer);
    answercontainer.appendChild(answerbtn);

  });
}
function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;
  const selectedbutton = event.target;
  const isCorrectbtn = selectedbutton.dataset.correct === "true";
  // console.log(answercontainer.children);
  Array.from(answercontainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button == selectedbutton) {
      button.classList.add("incorrect");
    }
  });
  if (isCorrectbtn) {
    score++;
    scorespan.textContent = score;
  }
  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);

}
function showResult() {
  quizscreen.classList.remove("active")
  resultscreen.classList.add("active");
  finalscore.textContent = score;
  const percentage = (score / quizQuestions.length) * 100;
  if (percentage === 100) {
    resultmsg.textContent = "Perfect! You're  amazing!";
  } else if (percentage >= 80) {
    resultmsg.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultmsg.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultmsg.textContent = "Not bad! Try again to improve!";
  } else {
    resultmsg.textContent = "Keep studying! You'll get better!";
  }

}

function restartquiz() {
  currentQuestionIndex = 0;
  score = 0;
  scorespan.textContent = score;
  answersDisabled = false;
  resultscreen.classList.remove("active");
  quizscreen.classList.remove("active");
  startscreen.classList.add("active")

}