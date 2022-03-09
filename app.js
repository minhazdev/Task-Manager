//My Task Manager
const formElm = document.querySelector("form");
const titleElm = document.querySelector("#title");
const descriptionElm = document.querySelector("#description");
const assignedWorkElm = document.querySelector("#assigned-work");

formElm.addEventListener("submit",(e) => {
    e.preventDefault();
  const inputValues = receiveInputs();
  console.log(inputValues);
})

function receiveInputs() {
//     console.log(titleElm.value, descriptionElm.value, assignedWorkElm.value);
const titleInput = titleElm.Value
const descriptionInput = descriptionElm.Value
const assignedWorkInput = assignedWorkElm.Value
return {
    titleInput,
    descriptionInput,
    assignedWorkInput,
}

}