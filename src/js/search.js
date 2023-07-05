function search() {
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();
  var elements = document.getElementsByTagName("*");

  for (var i = 0; i < elements.length; i++) {
    var elementText = elements[i].textContent.toLocaleLowerCase();

    if (elementText.includes(searchTerm)) {
      elements[i].style.color = "red";
    } else {
        elements[i].style.color = "black"
    }
  }
}
