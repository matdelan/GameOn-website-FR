 /*************** DECLARATION****** */


//Functions
let log = require('../assets/js/functions/log')
import { closeModal, launchModal } from '../assets/js/functions/modal'
import { editNav, event__focusOutTextFirst } from '../assets/js/functions/gameon'
import { checkEmail, checkRadio, checkTextField, checkQuantity , checkBirthdate } from '../assets/js/functions/check'

log("Hello la console")

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn")
const modalcloseBtn = document.querySelector(".close")
const formData = document.querySelectorAll(".formData")
const form = document.querySelector("form")
const first = document.getElementById("first")
const last = document.getElementById("last")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const quantity = document.getElementById("quantity")
const checkbox1 = document.getElementById("checkbox1")
const checkbox2 = document.getElementById("checkbox2")
const formRadio = document.querySelector(".formRadio")

//Modal events
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal))
// close modal event
modalcloseBtn.addEventListener("click", closeModal)
//focusout first
first.addEventListener("focusout", event__focusOutTextFirst)

// Submit & validation button
form.addEventListener("submit", (event) => {
    event.preventDefault()

    if(!checkTextField(first.value))
    {
        first.lastChild.classlist.remove("invisible")
        first.lastChild.classlist.add("visible")
        //event__focusOutTextFirst()
    }

    if( checkTextField(first.value)
      && checkTextField(last.value)
      && checkQuantity(quantity.value)
      && checkEmail(email.value)
      && checkbox1.checked
      && checkBirthdate(birthdate.value)
      && checkRadio(formRadio.childElementCount/2))
    {
        //Validation du formulaire
        log("Check Ok")

    }
    else
    {
        log("Erreur de validation : firt /" + checkTextField(first.value) 
            + "/ last /" + checkTextField(last.value) 
            + "/ Quantity /" + checkQuantity(quantity.value) 
            + "/ email /" + checkEmail(email.value)
            + "/ birthdate /" + checkBirthdate(birthdate.value)
            + "/ Radio /" + checkRadio((formRadio.childElementCount/2)+1))
    }
})


