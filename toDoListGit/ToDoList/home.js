document.getElementById("button").addEventListener("click", addActivity);
addBtn.addEventListener("click", crossOut)
function addActivity(){
    let input = document.getElementById("activity").value;
    if(input == ""){
        alert("You need to type something!"); 
        return;
    }
    let container = document.createElement("div");
    let removeBtn = document.createElement("button");
    let finishedBtn = document.createElement("button");
    finishedBtn.innerText = "Finished";
    finishedBtn.classList.add("add")
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("remove");
    container.classList.add("toDoItem");
    let newElement = document.createElement("p");
    newElement.innerText = input;
    finishedBtn.onclick = function finished(){
        newElement.style.textDecoration = "line-through";
    }
    removeBtn.onclick = function remove(){
        container.remove();
    }
    container.appendChild(newElement);
    container.appendChild(finishedBtn);
    container.appendChild(removeBtn);
    document.body.appendChild(container);
    document.getElementById("activity").value = "";
}