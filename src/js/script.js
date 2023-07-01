const inputTitleE = document.getElementById("titleInput");
const inputNotaE = document.getElementById("noteInput");

// abrir campo de nota
const revealCamp = document.getElementById("reveal-campos");
const camp = document.getElementById("campos-adicao");
revealCamp.addEventListener("click", () => {
  camp.style.width = "100%";
});

// fechar campo de nota
const arrowLeft = document.querySelector(".header-camp i");
const alertElement = document.getElementById("caixa-alert");
addCaixaAlert = () => {
    alertElement.innerHTML+=`
    <div class="content-alert">
        <h3 class="text-alert">Sair sem salvar a nota ?</h3>
        <div class="buttons-alert">
        <button class="btn-ficar">Ficar</button>
        <button class="btn-sair">Sair</button>
        </div>
    </div>
    `;
}
addCaixaAlert();
arrowLeft.addEventListener("click", () => {
    if(inputTitleE.value === "", inputNotaE.value === "") {
        camp.style.width = "0";
    } else {
        alertElement.style.display = "block"
        const ficarElement = document.querySelector('.btn-ficar')
        const sairElement = document.querySelector('.btn-sair')
        ficarElement.addEventListener('click', () => {
            alertElement.style.display = "none"
        })
        sairElement.addEventListener('click', () => {
            inputNotaE.value = ""
            inputTitleE.value = ""
            camp.style.width = "0"
            alertElement.style.display = "none"
        })
    }
});

// click para salvar a nota
const btnSalvoElement = document.getElementById("saveButton");
const divSalvo = document.querySelector(".click-btn");

eventsClicks = () => {
    btnSalvoElement.addEventListener("click", () => {
      divSalvo.style.display = "block";
    });
    if(btnSalvoElement.event){
        
    } else {
        arrowLeft.addEventListener("click", () => {
      if ((inputTitleE.value === "", inputNotaE.value === "")) {
        camp.style.width = "0";
      } else {
        alertElement.style.display = "block";
        const ficarElement = document.querySelector(".btn-ficar");
        const sairElement = document.querySelector(".btn-sair");
        ficarElement.addEventListener("click", () => {
          alertElement.style.display = "none";
        });
        sairElement.addEventListener("click", () => {
          inputNotaE.value = "";
          inputTitleE.value = "";
          camp.style.width = "0";
          alertElement.style.display = "none";
        });
      }
    });
    }
}
eventsClicks();
