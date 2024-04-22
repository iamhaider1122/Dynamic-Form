let inputField = document.getElementById("inputField");
let form = document.getElementById("myForm");
let idArray = [];
var selectElement;
let submitBtn = document.getElementById("submit");
var fieldId = 0;
let checkBoxName;
let showForms = document.getElementById("showForms");
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
  } else if (inputType === "radio") {
    div = radioBtnField();
  } else {
    alert(
      "enter a valid input type e.g: text,password,email,dropdown,textarea,radio"
    );
  }

  form.appendChild(div);
});

function textInputField(inputType) {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let input = document.createElement("input");
  input.setAttribute("type", inputType);
  let inputId = `field${fieldId++}`;
  input.setAttribute("id", inputId);

  let lbl = createLabel(inputId);

  div.appendChild(lbl);
  div.appendChild(input);

  return div;
}

function dropDownField() {
  let div = document.createElement("div");
  div.classList.add("m-3");
  selectElement = document.createElement("select");
  let inputId = `field${fieldId++}`;
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
  let inputId = `field${fieldId++}`;
  textarea.setAttribute("id", inputId);
  let lbl = createLabel(inputId);
  textarea.setAttribute("rows", 5);
  textarea.setAttribute("cols", 30);
  div.appendChild(lbl);
  div.appendChild(textarea);
  div.classList.add("d-flex");
  return div;
}

function radioBtnField() {
  let div = document.createElement("div");
  div.classList.add("m-3");
  checkBoxName = prompt("Enter title of your radio buttons");
  let labels = prompt("enter comma separated values of radios buttons");
  div.innerText = `Select ${checkBoxName}: `;
  let radioId = 0;
  labels = labels.split(",");
  labels.forEach(function (element) {
    let radioInput = document.createElement("input");
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", checkBoxName);
    radioInput.setAttribute("id", ++radioId);
    radioInput.classList.add("ms-1");
    radioInput.setAttribute("value", element);
    let lbl = document.createElement("label");
    lbl.setAttribute("for", radioId);
    lbl.classList.add("ms-2");
    lbl.innerText = element;
    div.appendChild(lbl);
    div.appendChild(radioInput);

    radioInput.addEventListener("click", function () {
      checkBoxName = this.value;
    });
  });
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

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let inputText = document.querySelector('input[type="text"]');
  let inputPswd = document.querySelector('input[type="password"]');
  let inputEmail = document.querySelector('input[type="email"]');
  let inputTxtArea = document.querySelector("textarea");
  let selectedDropDown = getDropDownValue();
  // let obj = {
  //   gender: genderValue,
  //   city: selectedCity,
  // };

  let obj = {};

  obj.text = inputText ? inputText.value : "";
  obj.password = inputPswd ? inputPswd.value : "";
  obj.email = inputEmail ? inputEmail.value : "";
  obj.textarea = inputTxtArea ? inputTxtArea.value : "";
  obj.dropdown = selectedDropDown ? selectedDropDown : "";
  obj.checkBoxVaule = checkBoxName ? checkBoxName : "";

  let formArray = [];
  formArray.push(obj);
  localStorage.setItem("formData", JSON.stringify(formArray));

  let html = ``;
  form.innerHTML = html;
  show();
});

function show() {
  let formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    let html = "";
    formData.forEach((element) => {
      html += ` <div class=" col-lg-3 card col-5 mb-2 border border-2">
                      <h4 class="text-center">form data</h4>
                      <div><span class="h6">Name</span> : ${element.text}</div>
                      <div><span class="h6">Email</span>  : ${element.email}</div>
                      <div><span class="h6">Password</span>  :${element.passwrod} </div>
                      <div><span class="h6">Message</span>  :${element.textarea} </div>
                      <div><span class="h6">Country</span>  :${element.dropdown} </div>
                      <div><span class="h6">${checkBoxName}</span>  :${element.checkBoxVaule} </div>
                  </div>`;
    });

    showForms.innerHTML = html;
  }
}
localStorage.clear();
