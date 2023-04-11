const buttonOptions = document.querySelector("#button-option");
const divList = document.querySelector("#div-list");
const buttonStart = document.querySelector("#button-start");
const buttonOptionEasy = document.querySelector("#button-easy");
const buttonOptionMedium = document.querySelector("#button-medium");
const buttonOptionHard = document.querySelector("#button-hard");

const teste = document.querySelector("#teste");

let key = "key";

function mainWorkflow() {
  localStorage.setItem(key, 1);
  buttonOptions.addEventListener("click", (e) => {
    divList.style.display === "none"
      ? (divList.style.display = "flex")
      : (divList.style.display = "none");
  });

  buttonStart.addEventListener("click", () => {
    window.location.href = "/pages/quiz.html";
  });

  teste.addEventListener("click", () => {
    window.location.href = "/pages/score.html";
  });

  buttonOptionEasy.addEventListener("click", () => {
    // console.log("Clicou no facil");

    buttonOptions.innerHTML = `Dificuldade: <span style="color: green">Facil</span>`;
    localStorage.setItem(key, 1);
    divList.style.display = "none";
  });
  buttonOptionMedium.addEventListener("click", () => {
    // console.log("Clicou no Medio");
    buttonOptions.innerHTML = `Dificuldade: <span style="color: orange">Medio</span>`;
    localStorage.setItem(key, 2);
    divList.style.display = "none";
  });
  buttonOptionHard.addEventListener("click", () => {
    // console.log("Clicou no Hard");
    buttonOptions.innerHTML = `Dificuldade: <span style="color: red">Dificil</span>`;
    localStorage.setItem(key, 3);
    divList.style.display = "none";
  });
}
mainWorkflow();
