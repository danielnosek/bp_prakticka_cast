const questions = [
  {
    question: "Jak se nazývá útok, při kterém útočník vydává za důvěryhodnou osobu či organizaci?",
    options: ["Phishing", "Malware", "Spoofing", "Social Engineering"],
    answer: 2
  },
  {
    question: "Co je to tailgating (černý pasažér)?",
    options: [
      "Fyzický útok, kdy útočník pronikne do prostor, ke kterým nemá oprávnění",
      "Útok, při kterém útočník napodobuje známou osobu",
      "Útok, který se zaměřuje na sociální sítě",
      "Útok, při kterém útočník využívá zranitelnosti ve firemním softwaru"
    ],
    answer: 0
  },
  {
    question: "Který z následujících je příkladem sociálního inženýrství?",
    options: [
      "Odeslání e-mailu s odkazem na falešnou stránku, která vyzývá k zadání citlivých informací",
      "Využití škodlivého softwaru ke kompromitaci systému",
      "Provedení síťového skenování",
      "Napadení firewallu pomocí DDoS útoku"
    ],
    answer: 0
  },
  {
    question: "Co znamená pojem 'shoulder surfing'?",
    options: [
      "Přístup k citlivým informacím na sociálních sítích",
      "Využití fyzické blízkosti ke sledování zadávání citlivých údajů",
      "Zneužití důvěry zaměstnanců ve firmě",
      "Využití sociálního inženýrství ke získání hesla"
    ],
    answer: 1
  },
  {
    question: "Která ze následujících je preventivní opatření proti sociálnímu inženýrství?",
    options: [
      "Pravidelná aktualizace softwaru a systémů",
      "Využití silného hesla",
      "Otevírání podezřelých e-mailů",
      "Sdílení citlivých informací na sociálních sítích"
    ],
    answer: 0
  },
  {
    question: "Co znamená pojem 'phishing'?",
    options: [
      "Útok, při kterém se útočník vydává za důvěryhodnou osobu či organizaci",
      "Využití zranitelnosti ve firemním softwaru",
      "Útok, při kterém útočník napodobuje známou osobu",
      "Přístup k citlivým informacím na sociálních sítích"
    ],
    answer: 0
  },
  {
    question: "Co je to 'pretexting'?",
    options: [
      "Útok, při kterém se útočník vydává za jinou osobu a snaží se získat citlivé informace",
      "Využití škodlivého softwaru ke kompromitaci systému",
      "Zneužití důvěry zaměstnanců ve firmě",
      "Fyzický útok, kdy útočník pronikne do prostor, ke kterým nemá oprávnění"
    ],
    answer: 0
  },
  {
    question: "Jakou roli hraje osvěta a školení zaměstnanců při prevenci sociálního inženýrství?",
    options: [
      "Nemá žádný vliv na prevenci útoků",
      "Může snížit riziko úspěšnosti útoků",
      "Zvyšuje motivaci útočníků",
      "Je zbytečná, protože útoky jsou nezadržitelné"
    ],
    answer: 1
  },
  {
    question: "Co je to 'vishing'?",
    options: [
      "Útok, při kterém útočník vydává za důvěryhodnou osobu či organizaci",
      "Využití telefonu ke kompromitaci systému",
      "Útok, při kterém útočník napodobuje známou osobu",
      "Přístup k citlivým informacím na sociálních sítích"
    ],
    answer: 1
  },
  {
    question: "Který z následujících je příkladem sociálního inženýrství?",
    options: [
      "Využití škodlivého softwaru ke kompromitaci systému",
      "Vylákání citlivých informací pomocí podvodného telefonního hovoru",
      "Provedení síťového skenování",
      "Napadení firewallu pomocí DDoS útoku"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");

  questionElement.textContent = questions[currentQuestion].question;

  optionsElement.innerHTML = "";
  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    const option = document.createElement("input");
    option.setAttribute("type", "radio");
    option.setAttribute("name", "answer");
    option.setAttribute("value", i);
    option.setAttribute("required", true);
    optionsElement.appendChild(option);

    const label = document.createElement("label");
    label.textContent = questions[currentQuestion].options[i];
    optionsElement.appendChild(label);

    optionsElement.appendChild(document.createElement("br"));
  }

  resultElement.textContent = "";
}

function checkAnswer() {
  const options = document.getElementsByName("answer");
  let selectedOption;

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = options[i].value;
      break;
    }
  }

  if (selectedOption == questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Váš výsledek: " + score + "/" + questions.length;
}

displayQuestion();
