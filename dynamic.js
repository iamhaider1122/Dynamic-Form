let inputField = document.getElementById("inputField");
let form = document.getElementById("myForm");
let idArray = [];
inputField.addEventListener("click", function (event) {
  let inputType = prompt("enter input type", "text");

  let div = "";

  if (
    inputType === "text" ||
    inputType === "password" ||
    inputType === "email"
  ) {
    div = textInputField(inputType);
  } else if (inputType === "DropDown") {
  }

  form.appendChild(div);
});

function textInputField(inputType) {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let input = document.createElement("input");
  input.setAttribute("type", inputType);
  let inputId = prompt("Enter a valid id for input", "myInput");
  input.setAttribute("id", inputId);

  const lbl = document.createElement("label");
  lbl.setAttribute("for", inputId);
  let lblText = prompt("enter Label text");
  lbl.innerText = lblText ? lblText : inputType;
  lbl.classList.add("me-1");
  div.appendChild(lbl);
  div.appendChild(input);

  return div;
}

function dropDownField() {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let selectOption = document.createElement("select");
  let options = prompt("enter comma separated options for drop down");
}
