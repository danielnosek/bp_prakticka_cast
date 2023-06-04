const questions = [
  {
    question: "Co je phishing?",
    options: ["Technika útoku zaměřená na získání citlivých informací od uživatele", "Překročení fyzických bariér pro neoprávněný přístup", "Vytvoření falešného předtextu pro získání informací"],
    answer: 1
  },
  {
    question: "Co je tailgating?",
    options: ["Metoda založená na získání přístupových karet", "Využití neaktualizovaného softwaru", "Situace, kdy se někdo dostane do zabezpečeného prostoru za někým, kdo má oprávnění"],
    answer: 3
  },
  // Další otázky...
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  for (let i = 0; i < currentQuestion.options.length; i++) {
    const option = currentQuestion.options[i];
    const liElement = document.createElement("li");
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("name", "answer");
    inputElement.setAttribute("value", i + 1);
    liElement.appendChild(inputElement);
    liElement.appendChild(document.createTextNode(option));
    optionsElement.appendChild(liElement);
  }
}

function showResult() {
  questionElement.style.display = "none";
  optionsElement.style.display = "none";
  resultElement.textContent = `Vaše skóre: ${score}/${questions.length}`;
  resultElement.style.display = "block";
  retryButton.style.display = "block";
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    const selectedOption = parseInt(selectedAnswer.value);
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
}

function retryQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionElement.style.display = "block";
  optionsElement.style.display = "block";
  resultElement.style.display = "none";
  retryButton.style.display = "none";
  showQuestion();
}

document.getElementById("submit-btn").addEventListener("click", checkAnswer);
retryButton.addEventListener("click", retryQuiz);

showQuestion();