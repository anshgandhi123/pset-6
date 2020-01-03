window.onload = function() {
document.getElementById("button").onclick = addElement;
//  document.getElementById("fa fa close").onclick = deleteElement;
}
let toDo = [];

const addElement = function() {
  var input = document.getElementById("searchbar").value
  var liNode = document.createElement("li");
  var listNode = document.getElementById("unorderedList");
  liNode.append(input);
  listNode.append(liNode);
  toDo.push(input);
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
  };

// fix enter key properly it still doesn't work idk why... :(
  document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      addElement();
    }
  };

/* deleteItem = (delete) => {

}
*/
