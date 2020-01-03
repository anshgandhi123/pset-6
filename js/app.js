window.onload = function() {
document.getElementById("button").onclick = addElement;
//  document.getElementById("fa fa close").onclick = deleteElement;
document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      addElement()
    }
  };
}
let toDo = [];

const addElement = function() {
  var input = document.getElementById("searchbar").value;
  var liNode = document.createElement("li");
  var listNode = document.getElementById("unorderedList");
  liNode.append(input);
  listNode.append(liNode);
  toDo.push(input);
  
  var exclamation = document.createElement("button")
  exclamation.id = exclamation
  exclamation.value = "Priority"
  exclamation.setAttribute("class", "priority");
  var done = document.createElement("button")
  done.id = done
  done.value = "Complete"
  done.setAttribute("class", "done");
  var close = document.createElement("button")
  close.id = close
  close.value = "Delete"
  close.setAttribute("class", "close");
  liNode.append(exclamation)
  liNode.append(done);
  liNode.append(close);
  
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
    document.getElementById("searchbar").value = "";
  };


deleteItem = (delete) => {
  
}
