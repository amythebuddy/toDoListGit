document.getElementById("button").addEventListener("click", addActivity);
function addActivity(){
    let input = document.getElementById("activity").value;
    if(input == ""){ //cannot add empty input
        alert("You need to type something!"); 
        return;
    }
    let container = document.createElement("div"); // create a div for list
    let removeBtn = document.createElement("button"); // remove button
    let finishedBtn = document.createElement("button"); // finished button
    finishedBtn.innerText = "Finished";
    finishedBtn.classList.add("add"); // add CSS style to the button
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("remove"); // add CSS style to the button
    container.classList.add("toDoItem"); // add CSS style to the div
    let newElement = document.createElement("p"); // to show the input in the div
    newElement.classList.add("content"); 
    newElement.innerText = input;
    finishedBtn.onclick = function finished(){
        newElement.style.textDecoration = "line-through"; // cross out when finished
    }
    removeBtn.onclick = function remove(){
        container.remove(); 
    }
    container.appendChild(newElement);
    container.appendChild(finishedBtn);
    container.appendChild(removeBtn);
    document.body.appendChild(container);
    document.getElementById("activity").value = ""; // make the input empty for the next activity
}