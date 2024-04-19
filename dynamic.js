let inputField = document.getElementById("inputField");
let form = document.getElementById("myForm");
let idArray = [];
var selectElement;

inputField.addEventListener("click", function (event) {
  let inputType = prompt("enter input type", "text");

  let div = "";

  if (
    inputType === "text" ||
    inputType === "password" ||
    inputType === "email"
  ) {
    div = textInputField(inputType);
  } else if (inputType === "dropdown") {
    div = dropDownField();
  } else if (inputType === "textarea") {
    div = textAreaField();
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

  let lbl = createLabel(inputId);

  div.appendChild(lbl);
  div.appendChild(input);

  return div;
}

function createLabel(id) {
  let lbl = document.createElement("label");
  lbl.setAttribute("for", id);
  lblText = prompt("Enter Label of this field");
  lbl.innerText = lblText;
  lbl.classList.add("me-1");
  return lbl;
}

function dropDownField() {
  let div = document.createElement("div");
  div.classList.add("m-3");
  selectElement = document.createElement("select");
  let inputId = prompt("Enter id of dropDown");
  selectElement.setAttribute("id", inputId);

  let lbl = createLabel(inputId);

  let options = prompt("enter comma separated options for drop down");
  options = options.split(",");
  console.log(options);
  options.forEach(function (element) {
    let opt = document.createElement("option");
    opt.setAttribute("value", element);
    opt.innerText = element;
    selectElement.appendChild(opt);
  });
  div.appendChild(lbl);
  div.appendChild(selectElement);
  return div;
}

function getDropDownValue() {
  console.log(selectElement);

  if (selectElement) {
    var selectedOption = selectElement.options[selectElement.selectedIndex];

    var selectedValue = selectedOption.value;

    console.log("Selected value:", selectedValue);
    return selectedValue;
  } else return null;
}

function textAreaField() {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let textarea = document.createElement("textarea");
  let inputId = prompt("Enter id of dropDown");
  textarea.setAttribute("id", inputId);
  let lbl = createLabel(inputId);
  textarea.setAttribute("rows", 5);
  textarea.setAttribute("cols", 30);
  div.appendChild(lbl);
  div.appendChild(textarea);
  div.classList.add("d-flex");
  return div;
}
