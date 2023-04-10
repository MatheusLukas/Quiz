const pageQuest = document.querySelector("#page-quest");
const divQuiz = document.querySelector("#div-quiz");
const divAnswer = document.querySelector("#div-answer");
const divCard = document.querySelector("#div-card");
const questionsEasy = [
  {
    quest: "Quanto é 2+2",
    options: ["3", "4", "7", "2"],
    answer: "4",
  },
  {
    quest: "Quanto é 4+4",
    options: ["1", "8", "7", "2"],
    answer: "8",
  },
  {
    quest: "Quanto é 6+6",
    options: ["3", "12", "7", "2"],
    answer: "12",
  },
  {
    quest: "Quanto é 8+8",
    options: ["3", "16", "7", "2"],
    answer: "16",
  },
  {
    quest: "Quanto é 10+10",
    options: ["3", "20", "7", "2"],
    answer: "20",
  },
  {
    quest: "Quanto é 12+12",
    options: ["3", "24", "7", "2"],
    answer: "24",
  },
];

const questionsMedium = [
  {
    quest: "Quanto é 2/2",
    options: ["3", "1", "7", "2"],
    answer: "1",
  },
  {
    quest: "Quanto é 4/4",
    options: ["3", "1", "7", "2"],
    answer: "1",
  },
  {
    quest: "Quanto é 6/6",
    options: ["3", "1", "7", "2"],
    answer: "1",
  },
  {
    quest: "Quanto é 8/8",
    options: ["3", "1", "7", "2"],
    answer: "1",
  },
  {
    quest: "Quanto é 10/10",
    options: ["3", "1", "7", "2"],
    answer: "1",
  },
  {
    quest: "Quanto é 12/12",
    options: ["3", "1", "7", "2"],
    answer: "1",
  },
];

const questionsHard = [
  {
    quest: "Quanto é 2*2",
    options: ["3", "4", "7", "2"],
    answer: "4",
  },
  {
    quest: "Quanto é 4*4",
    options: ["3", "16", "7", "2"],
    answer: "16",
  },
  {
    quest: "Quanto é 6*6",
    options: ["3", "36", "7", "2"],
    answer: "36",
  },
  {
    quest: "Quanto é 8*8",
    options: ["3", "64", "7", "2"],
    answer: "64",
  },
  {
    quest: "Quanto é 10*10",
    options: ["3", "100", "7", "2"],
    answer: "100",
  },
  {
    quest: "Quanto é 12*12",
    options: ["3", "144", "7", "2"],
    answer: "144",
  },
];

const answerUser = [];

let key = "key";
let difficulty;
let valueQuest;

function addButtonListeners() {
  const answerButtons = document.querySelectorAll(".button-answer");

  answerButtons.forEach((button) => {
    button.onclick = (e) => {
      valueQuest = e.target.textContent;
      console.log(e.target.textContent, valueQuest);
    };
  });
}

function getAnswer(value) {
  console.log("fUI");
  answerUser.push(value);
}

function mainWorkflow() {
  let myItem = localStorage.getItem(key);
  // console.log(myItem);
  // console.log(myItem === "1");
  // console.log(questionsEasy[1].quest);

  if (myItem == "1") {
    difficulty = questionsEasy;
  } else if (myItem == "2") {
    difficulty = questionsMedium;
  } else if (myItem == "3") {
    difficulty = questionsHard;
  } else {
    difficulty = questionsEasy;
  }

  let index = 0;

  divQuiz.innerHTML += `<h3 class="h3-quiz">${difficulty[index].quest}</h3>`;

  difficulty[index].options.forEach((quest) => {
    const button = document.createElement("button");

    button.setAttribute("id", "quest-button");
    button.setAttribute("class", "button-answer");
    button.innerText = quest;
    divAnswer.appendChild(button);
  });

  const nextButton = document.createElement("button");
  nextButton.setAttribute("class", "button-next");
  nextButton.setAttribute("id", "button-next");
  nextButton.innerText = "Proxima pergunta";
  divCard.appendChild(nextButton);

  const buttonNextQuest = document.querySelector("#button-next");
  buttonNextQuest.addEventListener("click", () => {
    console.log(valueQuest);

    if (valueQuest === undefined) {
      return alert("Selecione uma opção");
    }
    getAnswer(valueQuest);
    console.log("array", answerUser);
    if (index >= difficulty.length - 1)
      return (window.location.href = "../../index.html");

    while (divAnswer.childElementCount > 1) {
      divAnswer.removeChild(divAnswer.lastChild);
    }

    console.log("l", difficulty.length);

    // Incrementa no index das quests
    index++;

    // Deixa vazio e depois incrementa nas perguntas
    divQuiz.innerHTML = "";
    divQuiz.innerHTML = ` <h3 class="h3-quiz">Pergunta</h3>`;
    divQuiz.innerHTML += `<h3 class="h3-quiz">${difficulty[index].quest}</h3>`;
    // Deixa vazio e depois incrementa nas respostas com a funcao cleanOptionsAnswer

    difficulty[index].options.forEach((quest) => {
      const button = document.createElement("button");
      button.setAttribute("id", "quest-button");
      button.setAttribute("class", "button-answer");

      button.innerText = quest;

      console.log(quest);

      divAnswer.appendChild(button);
    });
    addButtonListeners();
  });
  addButtonListeners();
}
mainWorkflow();
