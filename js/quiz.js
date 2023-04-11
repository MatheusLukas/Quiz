import * as dataQuestEasy from "../assets/questionsEasy.json" assert { type: "json" };
import * as dataQuestMedium from "../assets/questionsMedium.json" assert { type: "json" };
import * as dataQuestHard from "../assets/questionsHard.json" assert { type: "json" };

// fetch("../assets/questionsEasy.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((dataQuestEasy) => {
//     teste = dataQuestEasy;
//   });

const questionsEasy = JSON.parse(JSON.stringify(dataQuestEasy));
const questionsMedium = JSON.parse(JSON.stringify(dataQuestMedium));
const questionsHard = JSON.parse(JSON.stringify(dataQuestHard));

// console.log(questionsEasy.default);

const pageQuest = document.querySelector("#page-quest");
const divQuiz = document.querySelector("#div-quiz");
const divAnswer = document.querySelector("#div-answer");
const divCard = document.querySelector("#div-card");
const answerUser = [];

let key = "key";
let difficulty;
let valueQuest;

function addButtonListeners() {
  const answerButtons = document.querySelectorAll(".button-answer");

  answerButtons.forEach((button) => {
    button.onclick = (e) => {
      valueQuest = e.target.textContent;
      // console.log(e.target.textContent, valueQuest);
    };
  });
}

function getAnswer(value) {
  answerUser.push(value);
  valueQuest = undefined;
}

function mainWorkflow() {
  let myItem = localStorage.getItem(key);
  // console.log(myItem);
  // console.log(myItem === "1");
  // console.log(questionsEasy[1].quest);

  if (myItem == "1") {
    difficulty = questionsEasy.default;
  } else if (myItem == "2") {
    difficulty = questionsMedium.default;
  } else if (myItem == "3") {
    difficulty = questionsHard.default;
  } else {
    difficulty = questionsEasy.default;
  }

  // console.log("aqui", difficulty);

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
    // console.log("value", valueQuest);

    if (valueQuest === undefined) {
      return alert("Selecione uma opção");
    }
    getAnswer(valueQuest);
    // console.log("array", answerUser);
    if (index >= difficulty.length - 1) {
      let keyAnswer = "answer";
      localStorage.setItem(keyAnswer, answerUser);
      window.location.href = "/pages/score.html";
    }

    while (divAnswer.childElementCount > 1) {
      divAnswer.removeChild(divAnswer.lastChild);
    }

    // console.log("l", difficulty.length);

    index++;

    divQuiz.innerHTML = "";
    divQuiz.innerHTML = ` <h3 class="h3-quiz">Pergunta</h3>`;
    divQuiz.innerHTML += `<h3 class="h3-quiz">${difficulty[index].quest}</h3>`;

    difficulty[index].options.forEach((quest) => {
      const button = document.createElement("button");
      button.setAttribute("id", "quest-button");
      button.setAttribute("class", "button-answer");

      button.innerText = quest;

      // console.log(quest);

      divAnswer.appendChild(button);
    });
    addButtonListeners();
  });
  addButtonListeners();
}
mainWorkflow();
