window.onload = function () {
  const list = document.getElementsByTagName("li");
  const button = document.getElementById("button");
  const searchbar = document.getElementById("searchbar");
}

function addElement() {
  var li = document.createElement("li");
  var searchbar = document.getElementById("searchbar").value
  var text = document.createTextNode(searchbar);
  li.appendChild(text)
  var value = window.onsubmit(searchbar)
  let toDoList = []
  toDoList.push(value)
}
