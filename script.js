let inputField = document.getElementById("inputField");
let emailField = document.getElementById("emailField");
let passwordField = document.getElementById("passwordField");
let textAreaField = document.getElementById("textAreaField");
let showForms = document.getElementById("showForms");
let form = document.querySelector("form");
let submitBtn = document.getElementById("submit");
submitBtn.disabled = true;
let radioField = document.getElementById("radioField");
let genderValue = "";
let checkBoxfield = document.getElementById("checkBoxField");
let dropDownField = document.getElementById("dropDownField");
var selectElement;

function btnDisable(event) {
  event.target.disabled = true;
  submitBtn.disabled = false;
}

inputField.addEventListener("click", function (event) {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let txt = document.createElement("input");
  // txt.setAttribute('id','text')
  txt.setAttribute("type", "text");
  txt.setAttribute("placeholder", "Enter your name");
  div.appendChild(txt);
  console.log(div);
  form.appendChild(div);

  btnDisable(event);
});

dropDownField.addEventListener("click", function (event) {
  let div = document.createElement("div");
  div.classList.add("m-3");
  const lbl = document.createElement("label");
  lbl.setAttribute("for", "city");
  lbl.innerText = "Selec your City";

  selectElement = document.createElement("select");
  selectElement.setAttribute("name", "city");
  selectElement.setAttribute("id", "city");

  // Create options for the select element
  var options = ["Lahore", "Karachi", "Islmabad"];
  options.forEach(function (optionText) {
    var option = document.createElement("option");
    option.setAttribute("value", optionText);
    option.textContent = optionText;
    selectElement.appendChild(option);
  });

  div.appendChild(lbl);
  div.appendChild(selectElement);
  form.appendChild(div);

  btnDisable(event);
});

emailField.addEventListener("click", function (event) {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let txt = document.createElement("input");
  txt.setAttribute("type", "email");
  txt.setAttribute("placeholder", "Enter your email");
  div.appendChild(txt);
  console.log(div);
  form.appendChild(div);
  btnDisable(event);
});
passwordField.addEventListener("click", function (event) {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let txt = document.createElement("input");
  txt.setAttribute("type", "password");
  txt.setAttribute("placeholder", "Enter your password");
  div.appendChild(txt);
  console.log(div);
  form.appendChild(div);
  btnDisable(event);
});

textAreaField.addEventListener("click", function (event) {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let textarea = document.createElement("textarea");

  textarea.setAttribute("placeholder", "Leave us a comment");
  textarea.setAttribute("rows", "5");
  textarea.setAttribute("cols", "30");
  div.appendChild(textarea);
  console.log(div);
  form.appendChild(div);
  btnDisable(event);
});

radioField.addEventListener("click", function (event) {
  let div = document.createElement("div");
  div.classList.add("m-3");

  div.innerText = "Gender: ";
  let radio1 = document.createElement("input");
  radio1.setAttribute("name", "gender");
  radio1.setAttribute("type", "radio");
  radio1.setAttribute("id", "male");
  let lbl1 = document.createElement("label");
  lbl1.setAttribute("for", "male");
  lbl1.innerText = "Male ";

  let radio2 = document.createElement("input");
  radio2.setAttribute("name", "gender");
  radio2.setAttribute("type", "radio");
  radio2.setAttribute("id", "female");
  let lbl2 = document.createElement("label");
  lbl2.setAttribute("for", "female");
  lbl2.innerText = "female";

  radio1.setAttribute("value", "male");
  radio2.setAttribute("value", "female");

  div.appendChild(lbl1);
  div.appendChild(radio1);
  div.appendChild(lbl2);
  div.appendChild(radio2);

  form.appendChild(div);

  console.log(radio1);

  radio1.addEventListener("click", function () {
    genderValue = this.value;
    console.log(genderValue);
  });
  radio2.addEventListener("click", function () {
    genderValue = this.value;
    console.log(genderValue);
  });
  btnDisable(event);
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let inputText = document.querySelector('input[type="text"]');
  let inputPswd = document.querySelector('input[type="password"]');
  let inputEmail = document.querySelector('input[type="email"]');
  let inputTxtArea = document.querySelector("textarea");
  let selectedCity = getDropDownValue();
  let obj = {
    text: inputText.value,
    passwrod: inputPswd.value,
    email: inputEmail.value,
    textarea: inputTxtArea.value,
    gender: genderValue,
    city: selectedCity,
  };

  inputField.disabled = false;
  passwordField.disabled = false;
  emailField.disabled = false;
  radioField.disabled = false;
  textAreaField.disabled = false;
  dropDownField.disabled = false;
  submitBtn.disabled = true;
  // Get the value of the selected option

  // formArray.push(obj)
  let formArray = [];
  formArray = JSON.parse(localStorage.getItem("formData"));
  if (formArray) {
    formArray.push(obj);
    localStorage.setItem("formData", JSON.stringify(formArray));
  } else {
    formArray = [];
    formArray.push(obj);
    localStorage.setItem("formData", JSON.stringify(formArray));
  }

  let html = ``;
  form.innerHTML = html;
  show();

  inputField.disabled = false;
  passwordField.disabled = false;
  emailField.disabled = false;
  radioField.disabled = false;
  textAreaField.disabled = false;
  dropDownField.disabled = false;
  submitBtn.disabled = true;
});

function getDropDownValue() {
  console.log(selectElement);

  var selectedOption = selectElement.options[selectElement.selectedIndex];

  var selectedValue = selectedOption.value;

  console.log("Selected value:", selectedValue);
  return selectedValue;
}

function show() {
  let formData = JSON.parse(localStorage.getItem("formData"));

  if (formData) {
    let html = "";
    formData.forEach((element) => {
      html += ` <div class="col-3  mb-2 border border-2">
                    <h4>form data</h4>
                    <div>Name : ${element.text}</div>
                    <div>email : ${element.email}</div>
                    <div>password :${element.passwrod} </div>
                    <div>Message :${element.textarea} </div>
                    <div>gender :${element.gender} </div>
                    <div>City :${element.city} </div>
                </div>`;
    });

    showForms.innerHTML = html;
  }
}

show();
//localStorage.clear();
