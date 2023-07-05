const openElement = document.querySelector(".openBtns");
const closeElement = document.querySelector('.closeBtns')
const isOriginal = true;
const optionElement = document.querySelector('.btns-actions')
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