const questions = [
  {
    question: "Co je to phishing?",
    options: [
      "Získávání citlivých informací prostřednictvím falešných emailů",
      "Útok na síťovou infrastrukturu",
      "Pokus o fyzický vstup do firmy"
    ],
    answer: 0
  },
  {
    question: "Co je to tailgating?",
    options: [
      "Zneužití nezabezpečeného přístupového bodu",
      "Neoprávněný přístup do systému pomocí ukradených přihlašovacích údajů",
      "Vstup do zabezpečených prostorů za souhlasu zaměstnance"
    ],
    answer: 2
  },
  {
    question: "Co je to pretexting?",
    options: [
      "Podvodný výmysl za účelem získání informací",
      "Útok na firemní servery",
      "Neoprávněné sledování síťového provozu"
    ],
    answer: 0
  },
  {
    question: "Jakou roli hraje social engineering při útocích na firemní zaměstnance?",
    options: [
      "Social engineering není používán při útocích na zaměstnance",
      "Social engineering je pouze o technických útocích",
      "Social engineering využívá lidského faktoru k získání informací"
    ],
    answer: 2
  },
  {
    question: "Co je to vishing?",
    options: [
      "Podvodné získávání informací pomocí telefonního hovoru",
      "Fyzický útok na zaměstnance",
      "Útok na firemní databáze"
    ],
    answer: 0
  },
  {
    question: "Co je to shoulder surfing?",
    options: [
      "Podvodná manipulace s firemním hardwarem",
      "Fyzické sledování a odposlech zaměstnanců",
      "Útok na firemní webové stránky"
    ],
    answer: 1
  },
  {
    question: "Co je to dumpster diving?",
    options: [
      "Prohledávání odpadků s cílem získat citlivé informace",
      "Fyzický útok na firemní budovy",
      "Útok na firemní emailové účty"
    ],
    answer: 0
  },
  {
    question: "Co je to spear phishing?",
    options: [
      "Cílený phishing útok na konkrétní osobu nebo organizaci",
      "Útok na počítačové sítě pomocí malwaru",
      "Zneužití zranitelností v softwaru"
    ],
    answer: 0
  },
  {
    question: "Co je to baiting?",
    options: [
      "Využívání předstírané identity pro získání informací",
      "Útok na bezdrátové sítě",
      "Podvodná nabídka nebo slib s cílem získat informace"
    ],
    answer: 2
  },
  {
    question: "Co je to quid pro quo?",
    options: [
      "Podvodná nabídka výhod nebo služeb výměnou za informace",
      "Fyzická nátlaková technika",
      "Útok na počítačové systémy pomocí šifrování"
    ],
    answer: 0
  }
];

let currentQuestion = 0; // Proměnná pro sledování aktuální otázky
let score = 0; // Proměnná pro sledování počtu správných odpovědí

function loadQuestion() {
  // Funkce pro načtení otázky do rozhraní

  // Přidáme průběžné počítadlo správných odpovědí
  const scoreElem = document.getElementById("score");
  scoreElem.textContent = `Správné odpovědi: ${score}/${currentQuestion}`;
}

function checkAnswer() {
  // Funkce pro ověření zvolené odpovědi

  // Zvýšíme skóre, pokud je odpověď správná
  if (selectedAnswer === questions[currentQuestion].answer) {
    score++;
  }

  // Zvýšíme pořadí aktuální otázky
  currentQuestion++;

  // Znovu načteme další otázku nebo zobrazíme výsledek, pokud jsou otázky vyčerpány
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    const resultElem = document.getElementById("result");
    resultElem.textContent = `Váš výsledek: ${score}/${questions.length}`;
  }

  // Aktualizujeme průběžné počítadlo správných odpovědí
  const scoreElem = document.getElementById("score");
  scoreElem.textContent = `Správné odpovědi: ${score}/${currentQuestion}`;
}

// Zbytek kódu zůstává stejný
