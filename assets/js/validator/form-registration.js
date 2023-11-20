export function checkEmail(email){
    //let regex = new RegExp("/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/")
    let regex = new RegExp (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return regex.test(email)

}

export function checkTextField(text){
    return (text.length > 1)
}

export function checkQuantity(quantity){
    
    if(quantity!=="")
    {
        return ((!isNaN(quantity)||((quantity==="0"))))
    }
    
    return false
}

export function checkRadio(element){
    let radio = false
    
    //loop for radio button
    for(let i=0;i<(element.childElementCount);i++)
    {
      //console.log(element.children[i].tagName)
      if(element.children[i].tagName == 'INPUT')
      {
        if(element.children[i].checked)
        {
          radio = true;
          break;
        }
      }
    }
    console.log("radio : " + radio)
    return radio
}

export function checkBirthdate(date){
    
    if(date !== null)
    {
        let dateBirthday = new Date(date)
        let dateMin = new Date()
        let dateMax = new Date()
        dateMin.setFullYear(dateMin.getFullYear() - 18)
        dateMax.setFullYear(dateMin.getFullYear() - 80)
        if((dateBirthday < dateMin) && (dateBirthday > dateMax))
            return true
    }

    return false
}

function manageAlertList(){
    manageAlert(first, checkTextField(first.value))
    manageAlert(last,checkTextField(last.value))
    manageAlert(formRadio, checkRadio(formRadio))
    manageAlert(email, checkEmail(email.value))
    manageAlert(quantity, checkQuantity(quantity.value))
    manageAlert(checkbox1, checkbox1.checked)
    manageAlert(birthdate, checkBirthdate(birthdate.value))
}

export function manageAlert(element, bool){
  let msg
  switch(element.id){
    case 'last' :
    case 'first' :
      msg="Veuillez entrer 2 caractères ou plus."
      break
    case 'email':
      msg="Veuillez entrer un mail valide."
      break
    case 'birthdate' :
      msg="Vous devez avoir entre 18 et 80 ans pour vous inscrire."
      break
    case 'quantity' :
      msg="Veuillez entrer une quantité."
      break
    case 'checkbox1' :
      msg="Vous devez acceptez les conditions d'utilisation."
      //element = element.firstElementChild
      break
    case 'formRadio' :
      msg="Vous devez choisir une option."
      //element = element.firstElementChild
      break
    }
    let target
    if(element.id == 'formRadio'){
      target = element
    }
    else
    {
      target = element.parentElement
    }
    if (bool){
      //si l'alerte est est visible
      if (target.attributes[1].value !== ""){
        //on l'enlève
        target.setAttribute("data-error", "")
        target.setAttribute("data-error-visible", "false")
      }
    }
    else{
      //On cache l'alerte si ce n'est pas deja fait
      if(target.attributes[1].value == ""){
        target.setAttribute("data-error", msg)
        target.setAttribute("data-error-visible", "true")
      }
    }
  
}

export function validateForm(form){
        
    if( checkTextField(first.value)
      && checkTextField(last.value)
      && checkQuantity(quantity.value)
      && checkEmail(email.value)
      && checkbox1.checked
      && checkBirthdate(birthdate.value)
      && checkRadio(formRadio)
      )
    {
        //Validation du formulaire
        console.log("Check Ok")
        
        form.classList.toggle("invisible")
        form.nextElementSibling.classList.toggle("invisible")
        //modalBody.innerHTML='<div class="validate">Merci pour <br>votre inscription</div> <button id="fermer" class="btn-submit button">Fermer</button>'

    }
    else
    {
      console.log("Erreur de validation : firt /" + checkTextField(first.value) 
            + "/ last /" + checkTextField(last.value) 
            + "/ Quantity /" + checkQuantity(quantity.value) 
            + "/ email /" + checkEmail(email.value)
            + "/ birthdate /" + checkBirthdate(birthdate.value)
            + "/ Radio /" + checkRadio((formRadio))
      )
      //On affiche les erreurs    
      manageAlertList()
    }
}