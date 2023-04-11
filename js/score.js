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
const divQuest = document.querySelector("#div-quest");
const divCorrectAnswer = document.querySelector("#div-correct-answer");
const divAnswer = document.querySelector("#div-answer");
const h3Score = document.querySelector("#h3-score");
const btnReturn = document.querySelector("#btn-return");
const btnBack = document.querySelector("#btn-back");

function workflow() {
  let difficulty;

  let myItem = localStorage.getItem("key");
  let answerUser = localStorage.getItem("answer");
  console.log(myItem);

  const answerUserSplit = answerUser.split(",");

  //   console.log(Array.from(answerUser));

  if (myItem == "1") {
    difficulty = questionsEasy.default;
  } else if (myItem == "2") {
    difficulty = questionsMedium.default;
  } else if (myItem == "3") {
    difficulty = questionsHard.default;
  } else {
    difficulty = questionsEasy.default;
  }

  console.log("isso", difficulty[0].answer);

  difficulty.forEach((quest) => {
    const elementPQuest = document.createElement("p");
    const elementPAnswer = document.createElement("p");

    elementPQuest.innerHTML += quest.quest;
    elementPAnswer.innerHTML += quest.answer;
    divQuest.appendChild(elementPQuest);
    divCorrectAnswer.appendChild(elementPAnswer);
  });

  answerUserSplit.forEach((answer) => {
    const elementPAnswerUser = document.createElement("p");

    elementPAnswerUser.innerHTML += answer;
    divAnswer.appendChild(elementPAnswerUser);
  });

  let score = 0;
  for (let index = 0; index < answerUserSplit.length; index++) {
    if (Number(answerUserSplit[index]) == Number(difficulty[index].answer)) {
      score++;
      console.log("score:", score);
    } else {
    }
  }

  h3Score.innerHTML = `Pontuação ${score} / ${answerUserSplit.length}`;

  btnReturn.addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  btnBack.addEventListener("click", () => {
    window.location.href = "/pages/quiz.html";
  });
}
workflow();
