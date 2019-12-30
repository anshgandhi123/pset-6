window.onload = function () {
  const button = document.getElementById("button");
  const list = document.getElementById("ul");
}

function addElement() {
  var li = document.createElement("li");
  var searchbar = document.getElementById("searchbar").value
  var text = document.createTextNode(searchbar);
  li.appendChild(text)
  document.getElementById("unorderedList").appendChild(li);
  document.getElementById("searchbar").value = "";

  var span = document.createElement("SPAN");
  var secondText = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(secondText);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}
  }
}
