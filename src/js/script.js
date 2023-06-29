const inputNota = document.getElementById("noteInput");
const buttonSave = document.getElementById("saveButton");
const listNote = document.getElementById("noteList");

buttonSave.addEventListener("click", () => {
  if (inputNota.value === "") {
    console.log("Error, the text field is empty", Error);
  } else {
    const localNota = inputNota.value;
    const timestamp = Date.now();
    const storageKey = `note_${timestamp}`;
    listNote.innerHTML += `
      <div class="note-item">
        <p id="nota">${inputNota.value}</p>
        <div class="btns-actions">
          <button class="btn-excluir" id="${storageKey}">&#128465;</button>
          <button class="btn-favoritar" id="favoritar">&#10030;</button>
        </div>
      </div>
    `;
    localStorage.setItem(storageKey, localNota);
    inputNota.value = ""; // Clear the input field after saving
  }
});

// Add event listener to the parent container of the notes for delegation
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
      const note = localStorage.getItem(key);
      const storageKey = key;
      listNote.innerHTML += `
        <div class="note-item">
          <p id="nota">${note}</p>
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
