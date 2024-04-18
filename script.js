let inputField = document.getElementById("inputField");
let emailField = document.getElementById("emailField");
let passwordField = document.getElementById("passwordField");
let textAreaField = document.getElementById("textAreaField");
let showForms = document.getElementById("showForms");
let form = document.querySelector("form");
let submitBtn = document.getElementById("submit");
let radioField = document.getElementById("radioField");
let genderValue = "";

// let formArray = []

inputField.addEventListener("click", function () {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let txt = document.createElement("input");
  // txt.setAttribute('id','text')
  txt.setAttribute("type", "text");
  txt.setAttribute("placeholder", "Enter your name");
  div.appendChild(txt);
  console.log(div);
  form.appendChild(div);
});
emailField.addEventListener("click", function () {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let txt = document.createElement("input");
  txt.setAttribute("type", "email");
  txt.setAttribute("placeholder", "Enter your email");
  div.appendChild(txt);
  console.log(div);
  form.appendChild(div);
});
passwordField.addEventListener("click", function () {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let txt = document.createElement("input");
  txt.setAttribute("type", "password");
  txt.setAttribute("placeholder", "Enter your password");
  div.appendChild(txt);
  console.log(div);
  form.appendChild(div);
});

textAreaField.addEventListener("click", function () {
  let div = document.createElement("div");
  div.classList.add("m-3");
  let textarea = document.createElement("textarea");

  textarea.setAttribute("placeholder", "Leave us a comment");
  textarea.setAttribute("rows", "5");
  textarea.setAttribute("cols", "30");
  div.appendChild(textarea);
  console.log(div);
  form.appendChild(div);
});

radioField.addEventListener("click", function () {
  let div = document.createElement("div");
  div.classList.add("m-3");
  div.classList.add("bg-primary");
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
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let inputText = document.querySelector('input[type="text"]');
  let inputPswd = document.querySelector('input[type="password"]');
  let inputEmail = document.querySelector('input[type="email"]');
  let inputTxtArea = document.querySelector("textarea");
  let obj = {
    text: inputText.value,
    passwrod: inputPswd.value,
    email: inputEmail.value,
    textarea: inputTxtArea.value,
    gender: genderValue,
  };
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

  let html = `<button id="submit" class="btn btn-primary">Submit</button>`;
  form.innerHTML = html;
  show();
});

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
                </div>`;
    });

    showForms.innerHTML = html;
  }
}

show();
