export function event__focusOut(element, bool){
  let alerte

  console.log(element.id + " " + bool)
  switch(element.id)
  {
    case 'last' :
    case 'email' :
    case 'birthdate' :
    case 'quantity' :
    case 'first':
      alerte = element.parentNode.lastElementChild
      if (bool){
        //si l'alerte est est visible
        if (!alerte.classList.contains('invisible')){
          //on l'enlève
          element.classList.toggle('alerte-border')
        }
      }
      else{
        //On cache l'alerte si ce n'est pas deja fait
        if(element.value !== null){
          if (alerte.classList.contains('invisible')){
            element.classList.toggle('alerte-border')
          }
        }
      }
      break
    case 'checkbox1' :
        alerte = element.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
       
      break
    case 'formRadio' :
        alerte = element.lastElementChild
      break
    }

    if (bool){
      //si l'alerte est est visible
      if (!alerte.classList.contains('invisible')){
        //on l'enlève
        alerte.classList.toggle("invisible")
      }
    }
    else{
      //On cache l'alerte si ce n'est pas deja fait
      if(element.value !== null){
        if (alerte.classList.contains('invisible')){
          alerte.classList.toggle("invisible")
        }
      }
    }
    
    
}
