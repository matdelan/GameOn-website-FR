/**** LES  TESTS ****/
export function checkEmail(email){
    //let regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
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

//Test si au moins 1 checkbox est cochée
export function checkRadio(element){
    let radio = false
    
    //loop for radio button
    for(let i=0;i<(element.childElementCount);i++)
    {
      //Si un enfant de formRadio est un input
      if(element.children[i].tagName == 'INPUT')
      {
        // Si la radio est checked
        if(element.children[i].checked)
        {
          radio = true;
          break;
        }
      }
    }
    
    return radio
}

export function checkBirthdate(date){
    
    if(date !== null)
    {
        let dateBirthday = new Date(date)
        // On initialise deux dates
        let dateMin = new Date()
        let dateMax = new Date()
        //On leurs affectent l'age min & max
        dateMin.setFullYear(dateMin.getFullYear() - 18)
        dateMax.setFullYear(dateMin.getFullYear() - 80)

        if((dateBirthday < dateMin) && (dateBirthday > dateMax))
            return true
    }

    return false
}

/** TEST GLOBAL ***/
function manageAlertList(){
    manageAlert(first, checkTextField(first.value))
    manageAlert(last,checkTextField(last.value))
    manageAlert(formRadio, checkRadio(formRadio))
    manageAlert(email, checkEmail(email.value))
    manageAlert(quantity, checkQuantity(quantity.value))
    manageAlert(checkbox1, checkbox1.checked)
    manageAlert(birthdate, checkBirthdate(birthdate.value))
}

//Affiche les messages d'erreus en fonction des champs : input id / booleen champs conforme
export function manageAlert(element, bool){
  //Gestion du message d'erreur
  let msg = ""
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
      break
    case 'formRadio' :
      msg="Vous devez choisir une option."
      break
    }

    let target = element.parentElement
    //Exeception
    if(element.id == 'formRadio'){
      target = element
    }

    //Gestion d'affichage des messages d'erreurs
    if (bool){
      //si l'alerte est est visible //attributes[1].value !== ""
      if (target.getAttribute("data-error-visible")){
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
  //a condition que l'attibut data-error soit en deuxième position au niveau des classes
}
function dataLog(bool)
{
  this.bool = bool
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
        form.classList.toggle("invisible")
        form.nextElementSibling.classList.toggle("invisible")
    }
    else
    {
      let table = {}
      table.first = new dataLog(checkTextField(first.value))
      table.last = new dataLog(checkTextField(last.value))
      table.quantity = new dataLog(checkQuantity(quantity.value))
      table.email = new dataLog(checkEmail(email.value))
      table.birthdate = new dataLog(checkBirthdate(birthdate.value))
      table.radio = new dataLog(checkRadio(formRadio))
      table.condition = new dataLog(checkbox1.checked)

      console.table(table)
      //On affiche les erreurs    
      manageAlertList()
    }
}