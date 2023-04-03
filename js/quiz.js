const pageQuest = document.querySelector("#page-quest");
const divQuiz = document.querySelector("#div-quiz");
const divAnswer = document.querySelector("#div-answer");
const buttonNextQuest = document.querySelector("#button-next");
const buttonT = document.getElementById("teste");

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
    quest: "Quanto é 4+4",
    options: ["3", "8", "7", "2"],
    answer: "8",
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

let key = "key";
buttonT.addEventListener("click", () => {
  console.log("cliquei");
});

function mainnWorkflow() {
  let myItem = localStorage.getItem(key);
  console.log(myItem);
  console.log(myItem === "1");
  console.log(questionsEasy[1].quest);

  if (myItem === "1") {
    let index = 0;

    divQuiz.innerHTML += `<h3 class="h3-quiz">${questionsEasy[index].quest}</h3>`;

    questionsEasy[index].options.forEach((quest, index) => {
      const button = document.createElement("button");

      button.setAttribute("id", "quest-button");
      button.setAttribute("class", "button-answer");
      button.innerText = quest;
      button.addEventListener("click", (e) => {
        console.log(e.target.textContent);
      });
      divAnswer.appendChild(button);
    });

    divAnswer.innerHTML += `<button class="button-next" id="button-next" >Proxima Pergunta</button>`;
  } else if (myItem === "2") {
  } else if (myItem === "3") {
  }
}
mainnWorkflow();
