 // Form Validation
    document.getElementById("contactForm").addEventListener("submit", function(e){
      e.preventDefault();
      let valid = true;

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;

      if(name.trim() === ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
      } else {
        document.getElementById("nameError").innerText = "";
      }

      if(email.trim() === "" || !email.includes("@")){
        document.getElementById("emailError").innerText = "Enter a valid email";
        valid = false;
      } else {
        document.getElementById("emailError").innerText = "";
      }

      if(valid){
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
      }
    });


     // To-do List
    function addTask(){
      let taskInput = document.getElementById("taskInput");
      let taskValue = taskInput.value.trim();

      if(taskValue === "") return;

      let li = document.createElement("li");
      li.innerHTML = `${taskValue} <button onclick="this.parentElement.remove()">X</button>`;
      document.getElementById("taskList").appendChild(li);

      taskInput.value = "";
    }
  