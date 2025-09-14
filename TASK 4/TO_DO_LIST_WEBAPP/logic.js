const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("Please add your task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Create remove button
        let span = document.createElement("span");
        span.classList.add("removebtn");
        span.innerHTML = "\u00D7"; // ×
        li.appendChild(span);

        // Create edit button
        let span2 = document.createElement("span");
        span2.classList.add("editbtn");
        span2.innerHTML = "\u27F3"; // ↻
        li.appendChild(span2);

        listContainer.appendChild(li);
    }

    inputBox.value = "";
    savedata();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.classList.contains("removebtn")) {
        e.target.parentElement.remove();
        savedata();
    } else if (e.target.classList.contains("editbtn")) {
        const li = e.target.parentElement;
        const newTask = prompt("Edit your task:", li.firstChild.textContent.trim());
        if (newTask !== null && newTask.trim() !== "") {
            li.firstChild.textContent = newTask;
            savedata();
        }
    }
}, false);

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showlist() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showlist();
