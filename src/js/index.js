
const inputTitle = document.getElementById("titleInput");
const inputNota = document.getElementById("noteInput");
const buttonSave = document.getElementById("saveButton");
const listNote = document.getElementById("noteList");

const erroTitle = document.getElementById('caixaErro_title');
const erroNota = document.getElementById('caixaErro_nota');
const erroError = document.getElementById('caixaErro_erro');
const close = document.querySelector(".closeErro");
const errosElements = document.querySelector('.caixa-erro');
close.addEventListener('click', () => {
  errosElements.style.display = "none"
})
buttonSave.addEventListener("click", () => {
  if (inputNotaE.value === "" || inputTitleE.value === "") {
    erroError.style.display = "block"
  }else {
    buttonSave.style.background = "var(--green)"
    const localTitle = inputTitleE.value;
    const localNota = inputNotaE.value;
    const timestamp = Date.now();
    const storageKey = `note_${timestamp}`;
    listNote.innerHTML += `
      <div class="note-item">
          <div class="texts-nota">
            <h3 id="title">${inputTitle.value}</h3>
            <p id="nota">${inputNotaE.value}</p>
          </div>
          <div class="menu-nota">
          <i class="ri-draggable openBtns"></i>
          <i class="ri-close-line closeBtns"></i>
            <div class="btns-actions">
             <button class="btn-excluir btnsOptions" id="${storageKey}">Excluir</button>
              <button class="btn-favoritar btnsOptions" id="favoritar">Favoritar</button>
            </div>
        </div>
        </div>
    `;
    localStorage.setItem(
      storageKey,
      JSON.stringify({ 
        title: localTitle, 
        nota: localNota })
    );
  }
});
// remove nota
listNote.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-excluir")) {
    const noteElement = event.target.parentNode.parentNode.parentNode;
    const noteKey = event.target.id;
    localStorage.removeItem(noteKey);
    noteElement.remove();
  }
});
// Retrieve and display the stored notes
function populateNotes() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("note_")) {
      const noteData = JSON.parse(localStorage.getItem(key));
      const storageKey = key;
      listNote.innerHTML += `
        <div class="note-item">
          <div class="texts-nota">
            <h3 id="title">${noteData.title}</h3>
            <p id="nota">${noteData.nota}</p>
          </div>
          <div class="menu-nota">
          <i class="ri-draggable openBtns"></i>
          <i class="ri-close-line closeBtns"></i>
            <div class="btns-actions">
             <button class="btn-excluir btnsOptions" id="${storageKey}">Excluir</button>
              <button class="btn-favoritar btnsOptions" id="favoritar">Favoritar</button>
            </div>
        </div>
        </div>
      `;
    }
  }
}

populateNotes();
