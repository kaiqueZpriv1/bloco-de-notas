
const inputTitle = document.getElementById("titleInput");
const inputNota = document.getElementById("noteInput");
const buttonSave = document.getElementById("saveButton");
const listNote = document.getElementById("noteList");

buttonSave.addEventListener("click", () => {
  if (inputNota.value === "" || inputTitle.value === "") {
    console.log("Error, the text field is empty", Error);
  } else {
    const localTitle = inputTitle.value;
    const localNota = inputNota.value;
    const timestamp = Date.now();
    const storageKey = `note_${timestamp}`;
    listNote.innerHTML += `
      <div class="note-item">
        <h3 id="title">${inputTitle.value}</h3>
        <p id="nota">${inputNota.value}</p>
        <div class="btns-actions">
          <button class="btn-excluir" id="${storageKey}">&#128465;</button>
          <button class="btn-favoritar" id="favoritar">&#10030;</button>
        </div>
      </div>
    `;
    localStorage.setItem(
      storageKey,
      JSON.stringify({ title: localTitle, nota: localNota })
    );
  }
});

// remove nota
listNote.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-excluir")) {
    const noteElement = event.target.parentNode.parentNode;
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
          <h3 id="title">${noteData.title}</h3>
          <p id="nota">${noteData.nota}</p>
          <div class="btns-actions">
            <button class="btn-excluir" id="${storageKey}">&#128465;</button>
            <button class="btn-favoritar" id="favoritar">&#10030;</button>
          </div>
        </div>
      `;
    }
  }
}

populateNotes();
