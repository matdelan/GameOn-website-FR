 /*************** DECLARATION****** */
//Functions
let log = require('../assets/js/utility/log')
import * as modal from '../assets/js/utility/modal'
import { checkEmail, checkRadio, checkTextField, checkQuantity , checkBirthdate, manageAlert,validateForm } from '../assets/js/validator/form-registration'
import { editNav } from '../assets/js/utility/nav'


// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn")
const modalBody = document.querySelector(".modal-body")
const modalcloseBtn = document.querySelector(".close")
const modalclose = document.querySelector(".validationForm")
const formData = document.querySelectorAll(".formData")
const form = document.querySelector("form")
const first = document.getElementById("first")
const last = document.getElementById("last")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const quantity = document.getElementById("quantity")
const checkbox1 = document.getElementById("checkbox1")
const checkbox2 = document.getElementById("checkbox2")
//const formRadio = document.querySelectorAll(".checkbox-input")
const formRadio = document.getElementById("formRadio")
const fermer = document.getElementById("fermer")
const menu = document.getElementById("menu")


//Modal events
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", modal.launchModal))
// close modal event
modalcloseBtn.addEventListener("click", modal.closeModal)
modalclose.addEventListener("click", modal.closeModal)
//focusout first
first.addEventListener("focusout", function(){
    manageAlert(first, checkTextField(first.value))
})
last.addEventListener("focusout", function(){
    manageAlert(last,checkTextField(last.value))
})
email.addEventListener("focusout", function(){
    manageAlert(email, checkEmail(email.value))
})
birthdate.addEventListener("focusout", function(){
    manageAlert(birthdate, checkBirthdate(birthdate.value))
})
quantity.addEventListener("focusout", function(){
    manageAlert(quantity, checkQuantity(quantity.value))
})
checkbox1.addEventListener("change", function(){
    manageAlert(checkbox1, checkbox1.checked)
})
formRadio.addEventListener("change", function(){
    manageAlert(formRadio, checkRadio(formRadio))
})

//log(menu + menu.tagName)
menu.addEventListener("click", function(){
    editNav()
})

// Submit & validation button
form.addEventListener("submit", (event) => {
    event.preventDefault()
    validateForm(form)
})
