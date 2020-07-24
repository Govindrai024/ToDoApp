var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");

    //create li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.setAttribute("class", "liStyle");
    li.appendChild(liText);
    list.appendChild(li);
    todo_item.value = '';

    //create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Del");
    delBtn.setAttribute("class", "btn");
    delBtn.setAttribute("onclick", "deleteItem(this)");

    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    list.appendChild(li);


    //create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.setAttribute("class", "btn");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick", "editItem(this)");

    li.appendChild(editBtn);
}


function deleteItem(e) {
    e.parentNode.remove();
}

//Delete all
function delAll() {
    list.innerHTML = "";
}

//Edit 
function editItem(e) {
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = val;

}