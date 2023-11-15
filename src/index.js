 /*************** DECLARATION****** */
//Functions
let log = require('../assets/js/functions/log')
import * as modal from '../assets/js/gameon/modal'
import  * as events from '../assets/js/gameon/gameon'
import { checkEmail, checkRadio, checkTextField, checkQuantity , checkBirthdate } from '../assets/js/functions/check'

log("Hello la console")

// DOM Elements
const modalBtn = document.querySelectorAll(".modal-btn")
const modalBody = document.querySelector(".modal-body")
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
const fermer = document.getElementById("fermer")


//Modal events
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", modal.launchModal))
// close modal event
modalcloseBtn.addEventListener("click", modal.closeModal)
//focusout first
first.addEventListener("focusout", function(){
    events.event__focusOut(first, checkTextField(first.value))
})
last.addEventListener("focusout", function(){
    events.event__focusOut(last,checkTextField(last.value))
})
email.addEventListener("focusout", function(){
    events.event__focusOut(email, checkEmail(email.value))
})
birthdate.addEventListener("focusout", function(){
    events.event__focusOut(birthdate, checkBirthdate(birthdate.value))
})
quantity.addEventListener("focusout", function(){
    events.event__focusOut(quantity, checkQuantity(quantity.value))
})
checkbox1.addEventListener("change", function(){
    events.event__focusOut(checkbox1, checkbox1.checked)
})
formRadio.addEventListener("focusout", function(){
    events.event__focusOut(formRadio, checkRadio(formRadio.childElementCount/2))
})

function checkList(){
    events.event__focusOut(first, checkTextField(first.value))
    events.event__focusOut(last,checkTextField(last.value))
    events.event__focusOut(formRadio, checkRadio(formRadio.childElementCount/2))
    events.event__focusOut(email, checkEmail(email.value))
    events.event__focusOut(quantity, checkQuantity(quantity.value))
    events.event__focusOut(checkbox1, checkbox1.checked)
    events.event__focusOut(birthdate, checkBirthdate(birthdate.value))
}

//checkList()
/*
fermer.addEventListener("click", function(){
    modal.closeModal()
})
*/

// Submit & validation button
form.addEventListener("submit", (event) => {
    event.preventDefault()
    checkList()

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
        
        form.classList.toggle("invisible")
        modalBody.innerHTML='<div class="validate">Merci pour <br>votre inscription</div> <button id="fermer" class="btn-submit button">Fermer</button>'

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


function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


