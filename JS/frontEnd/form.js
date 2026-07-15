document.getElementById("btn-submit-form").addEventListener("submit form", submitForm);
document.getElementById("form1input1").addEventListener("input", (e) => {
    console.log(e.target.value);
});

function submitForm(e) {
    e.preventDefault();
}

const inputList = document.querySelector("#form1").querySelectorAll("input");
const inputOne = inputList[0];
const inputTwo = inputList[1];

console.log("input one", inputOne.value);
console.log("f1 input One", document.getElementById("form1input1").value);