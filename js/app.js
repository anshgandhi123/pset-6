window.onload = function() {
  document.getElementById("button").onclick = addElement;
  document.getElementById("fa fa close").onclick = deleteElement;

}

let toDo = [];

const addElement = function() {
  var input = document.getElementById("searchbar").value
  var liNode = document.createElement("li");
  var listNode = document.getElementById("unorderedList");
  liNode.append(input);
  listNode.append(liNode);
  toDo.push(liNode);

  if (input === "") {
    // on purpose
  }
  else {
    let toDoList = {
      task: input,
      complete: false,
      priority: false,
      remove: null
    }
    }
  }
  // get the enter key to work

  enterKey = function(e) {
    preventDefault(e)
  if (null) {
    // on purpose
  }
  else if (e.keyCode == 13) {
    document.body.onkeyup = addElement()
  }
}

  const deleteElement = function(e) {
}
