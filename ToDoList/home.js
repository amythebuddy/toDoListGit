const input = document.getElementById("activity").value;
document.getElementById("button").addEventListener("click", addActivity);
function addActivity(){
    let container = document.createElement("div");
    container.classList.add(toDoItem);
    let newElement = document.createElement("p");
    newElement.innerText = input;
    container.appendChild(newElement);
}