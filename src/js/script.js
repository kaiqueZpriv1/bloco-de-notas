const titleElement = document.getElementById('title');
const notaElement = document.getElementById('nota');
const salvarElement = document.getElementById('salvar');
const commentsElements = document.getElementById('comments');

function addComments() {
	commentsElements.innerHTML += `
	<div id="novaNota"> 
		<h3 id="titleComments" class="titleC">${titleElement.value}</h3>
		<p id="notaComments" class="notaC">${notaElement.value}</p>
		<div id="action" class="action">
			<button id="btn-fav">&#9733</button>
			<button id="btn-excluir">&#128465</button>
		</div>
	</div>
	`;
}
addComments();



salvarElement.addEventListener('click', () => {
	if (titleElement.value === "" || notaElement.value === "") {
  	  console.log("Erro: Um ou ambos os inputs estão vazios!");
  	} else {
  	  console.log("Concluído!");
	  addComments();
	  titleElement.value = ""
	  notaElement.value = ""
  	}
})
