import { validate } from "./validation.js";

const inputs = document.querySelectorAll(".contact-form__input");
const colorCheck = document.getElementById("color_mode");

inputs.forEach((input) => input.addEventListener("input", validate));
inputs.forEach((input) => input.addEventListener("focusout", validate));


colorCheck.checked = localStorage.getItem("color_mode");
if(!colorCheck.checked)  document.body.classList.add("dark");

colorCheck.addEventListener("click",(e)=> {
    localStorage.setItem("color_mode", e.target.checked);
    if(e.target.checked){
        document.body.classList.remove("dark");
    }else{
        document.body.classList.add("dark");
    }
}) 