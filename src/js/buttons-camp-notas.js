const inputTitleE = document.getElementById("titleInput");
const inputNotaE = document.getElementById("noteInput");
// abrir campo de nota
const revealCamp = document.getElementById("reveal-campos");
const camp = document.getElementById("campos-adicao");
revealCamp.addEventListener("click", () => {
  camp.style.width = "100%";
});

const leftMenu = document.querySelector('.left')
const alertElement = document.getElementById('caixa-alert')
const ficarElement = document.getElementById('ficar')
ficarElement.addEventListener('click', () => {
  alertElement.style.display = "none";
  leftMenu.style.visibility = "visible";
})
const sairElement = document.getElementById('sair')
sairElement.addEventListener('click', () => {
  leftMenu.style.visibility = "visible";
  inputTitleE.value = "";
  inputNotaE.value = "";
  alertElement.style.display = "none";
  camp.style.width = "0";
});
leftMenu.addEventListener('click', () => {
  if(inputTitleE.value !== "" || inputNotaE.value !== ""){
    alertElement.style.display = "block";
    leftMenu.style.visibility = "hidden"
  } else {
    camp.style.width = "0"
  }
})