export function checkEmail(email){
    let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+[a-zA-Z]{2,3}")
    return regex.test(email);
}

export function checkTextField(text){
    return (text.length > 2)
}

export function checkQuantity(quantity){
    
    if(quantity!=="")
    {
        return ((!isNaN(quantity)||((quantity==="0"))))
    }
    
    return false
}

export function checkRadio(iteration){
    let radio = false
    //loop for radio button
    for(let i=1;i<=iteration;i++)
    {
        if(document.getElementById("location"+i).checked)
        {
          radio = true;
          break;
        }
    }
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