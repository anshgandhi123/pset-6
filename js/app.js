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
// need to clear search bar once hit add
// fix enter key properly it still doesn't work idk why... :(
  document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      addElement();
    }
  };

 const deleteElement = function() {
   var removeInput = document.onclick
   var liRemoveNode = document.remove('li');
   var listNode = document.getElementById("unorderedList");
   toDo.pop(removeInput);
   listNode.append(liNode);
   toDo.push(input);

 }
