const openElement = document.querySelector(".openBtns");
const closeElement = document.querySelector('.closeBtns');
const isOriginal = true;
const optionElement = document.querySelector('.btns-actions');

openElement.addEventListener('click', () => {
    if(isOriginal) {
        optionElement.style.display = "flex"
        optionElement.focus()
        openElement.style.display = "none"
        closeElement.style.display = "inline"
        isOriginal = false
    }
})
closeElement.addEventListener('click', () => {
    if(isOriginal){
        optionElement.style.display = "none";
        closeElement.style.display = "none";
        openElement.style.display = "block";
        isOriginal = true;
    }
})

const btnFav = document.querySelector('.favBtn')
const btnNote = document.querySelector('.noteBtn')

const noteListElement = document.getElementById('noteList')
const favListElement = document.getElementById('favList')

btnFav.addEventListener('click', () => {
    noteListElement.style.display = "none"
    favListElement.style.display = "block"
})
btnNote.addEventListener('click', () => {
    favListElement.style.display = "none"
    noteListElement.style.display = "block"
})